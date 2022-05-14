import Debug from "debug";
import ec from "../util/error-codes.js";
import util from "../util/util.js"
const debug = Debug("app:eventController");

const data = {
    events: [],
    counter: 0,
}

var eventController = {};

const eventTypes = Object.freeze({
    untracked : "UNTRACKED",
    tracked : "TRACKED",
    logged : "TIME_TRACKED"
})

const validateEvent = (e) => {
    var error = "";
    if( !e.name || 
        !e.date || 
        !e.startTime || 
        !e.endTime || 
        !Object.values(eventTypes).includes(e.trackingType)) {
            error = ec.events.INCOMPLETE 
        } 
    else if(!util.date.isValid(e.date)) error =  ec.events.INVALID_DATE_FORMAT 
    else if(!util.time.isValid(e.startTime)) error = ec.events.INVALID_TIME_FORMAT
    else if(!util.time.isValid(e.endTime)) error = ec.events.INVALID_TIME_FORMAT
    else if(!util.time.isBeforeTime(e.startTime,e.endTime)) error = ec.events.INVALID_TIME_VALUES
    return error
}

eventController.add = (req, res) => {
    const event = req.body;
    const error = validateEvent(event)
    if(error !== "") res.json({ errorMessage : error })
    else {
        event.id = data.counter++;
        event.id = event.id.toString()
        data.events.push(event);
        res.json(event);
    }
};

eventController.update = (req, res) => {
    const event = req.body;
    const updatedEvent =  data.events.filter((e) => event.id === e.id);
    if(updatedEvent.length === 0) res.json({errorMessage : ec.events.INVALID_REQ});
    else {
        var error = validateEvent(event);
        if(updatedEvent[0].date !== event.date) error = ec.events.DATE_UNEDITABLE;
        if(error !== "") res.json({ errorMessage : error })
        else {
            const eventIndex = data.events.indexOf(updatedEvent[0])
            data.events[eventIndex] = event;
            res.json(event);
        }
    }
};

eventController.all = (req, res) => {
    res.json(data.events.filter((e) => req.params.date === JSON.stringify(e.date) ));
};

eventController.delete = (req, res) => {
    const deletedEvent =  data.events.filter((e) => req.body.id === e.id );
    if(deletedEvent.length === 0) res.json({errorMessage : ec.events.INVALID_REQ});
    else {
        data.events = data.events.filter((e) => req.body.id !== JSON.stringify(e.id) );
        res.json( {message : "Success"} )
    }
};

export default eventController;

