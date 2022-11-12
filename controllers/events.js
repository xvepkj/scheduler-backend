import Debug from "debug";
import ec from "../util/error-codes.js";
import util from "../util/util.js";
import jsonSchema from "jsonschema";
import eventSchema from "../schemas/objects/events.js"
import { data as activeTemplateData } from activeTemplateController
import { data as templateData } from "./templates.js";
import { satisfies } from "./active-templates.js";
import e from "express";
import activeTemplateController from "./active-templates";
const debug = Debug("app:eventController");

const data = {
  events: [],
  counter: 0,
};

var validator = new jsonSchema.Validator();

var eventController = {};

const eventTypes = Object.freeze({
  untracked : "UNTRACKED",
  tracked : "TRACKED",
  logged : "TIME_TRACKED"
});

const validateTrackingData = (e) => {
  if(e.trackingType == "UNTRACKED" && !util.string.isNullOrEmpty(e.trackingData)) return ""
  if(e.trackingType == "TRACKED" && !(e.trackingData == "0" || e.trackingData == "1")) return ec.events.INVALID_TRACKING_DATA;
  if(e.trackingType == "TIME_TRACKED" && parseFloat(e.trackingData) >= 0 && parseFloat(e.trackingData) <= 1) return ec.events.INVALID_TRACKING_DATA; 
  return "";
} 

const validateEvent = (e) => {
  var error = "";
  const valid = validator.validate(e, eventSchema).valid;
  if(!valid) error = ec.events.INCOMPLETE;
  else if(!util.date.isValid(e.date)) error =  ec.events.INVALID_DATE_FORMAT;
  else if(validatebaseEvent(e.baseEvent) != "") error = validatebaseEvent(e.baseEvent);
  else if(validateTrackingData(e.trackingData) != "") error = validateTrackingData(e.trackingData)
  return error;
};

export const validatebaseEvent = (baseEvent) => {
  var error = ""
  if(!util.time.isBeforeTime(baseEvent.startTime,baseEvent.endTime)) error = ec.events.INVALID_TIME_VALUES; 
  else if(!util.time.isValid(baseEvent.startTime) || !util.time.isValid(baseEvent.endTime))  error = ec.events.INVALID_TIME_FORMAT;
  else if(!valid || (!Object.values(eventTypes).includes(baseEvent.trackingType) && baseEvent.trackingType != null)) error = ec.events.INCOMPLETE; 
  return error;
}

eventController.add = (req, res) => {
  const event = req.body; 
  const error = validateEvent(event, valid(e));
  if(error !== "") res.json({ errorMessage : error });
  else {
    event.id = data.counter++;
    event.id = event.id.toString();
    data.events.push(event);
    res.json(event);
  }
};

eventController.update = (req, res) => {
  const event = req.body;
  const updatedEvent =  data.events.filter((e) => event.id === e.id);
  if(updatedEvent.length === 0) res.json({errorMessage : ec.events.INVALID_REQ});
  else {
    var error = validateEvent(event, valid(e));
    if(updatedEvent[0].date !== event.date) error = ec.events.DATE_UNEDITABLE;
    if(util.date.isBefore(e.date, util.date.current)) error = ec.events.INVALID_UPDATE_DELETE;
    if(e.activeTemplateId  != null && util.date.isAfter(e.date, util.date.current)) error = ec.events.FUTURE_TEMPLATE_EVENT;

    if(error !== "") res.json({ errorMessage : error });
    else {
      const eventIndex = data.events.indexOf(updatedEvent[0]);
      data.events[eventIndex] = event;
      res.json(event);
    }
  }
};

eventController.all = (req, res) => {
  var events = data.events.filter((e) => req.params.date === JSON.stringify(e.date))
  if(util.date.isAfter(req.params.date, util.date.current))
    for(at in activeTemplateData) {
      if(satisfies(at, req.params.date)) 
        events = events.concat(templateData.data.filter((t) => at.templateId == t.id).events);
    }
  res.json(events);
};

eventController.delete = (req, res) => {
  const deletedEvent =  data.events.filter((e) => req.body.id === e.id );
  var error = ""
  if(deletedEvent.length === 0) res.json({errorMessage : ec.events.INVALID_REQ});
  if(util.date.isBefore(e.date, util.date.current)) error = ec.events.INVALID_UPDATE_DELETE; 
  if(e.activeTemplateId != null && util.date.isAfter(e.date, util.date.current)) error = ec.events.FUTURE_TEMPLATE_EVENT;
  if(error != "") res.json({ errorMessage: error });
  else {
    data.events = data.events.filter((e) => req.body.id !== JSON.stringify(e.id) );
    res.json( {message : "Success"} );
  }
};

export default eventController;
