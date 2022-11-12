import Debug from "debug";
import ec from "../util/error-codes.js";
import util from "../util/util.js";
import jsonSchema from "jsonschema";
import { templateSchema } from "../schemas/objects/templates.js";
import { partialEventSchema } from "../schemas/objects/events.js";
import { data as activeTemplateData } from "./active-templates.js";
import validateEvent from "./events.js"
const debug = Debug("app:templateController");

var validator = new jsonSchema.Validator();
validator.addSchema(partialEventSchema);

export const data = {
  templates: [],
  counter: 0
};

var templateController = {};

const eventTypes = Object.freeze({
  untracked : "UNTRACKED",
  tracked : "TRACKED",
  logged : "TIME_TRACKED"
});

const eventValid = (e) => validator.validate(e, partialEventSchema).valid

templateController.add = (req, res) => {
  const template = req.body;
  template.id = "0";
  const valid = validator.validate(template, templateSchema).valid;
  if(!valid) return res.json( { errorMessage : ec.templates.INVALID_TEMPLATE } );
  for(let i = 0; i < template.events.length; i++) {
    const e = template.events[i];
    const error = validateEvent(e, eventValid(e));
    if(error != "") res.json({ errorMessage: error });
  }
  template.id = data.counter++;
  template.id = template.id.toString();
  data.templates.push(template);
  res.json(template);
};

templateController.all = (req, res) => {
  res.json(data.templates); 
};

templateController.update = (req, res) => {
  const template = req.body;
  const oldTemplate = data.templates.filter ( (t) => template.id === t.id );
  if(oldTemplate.length === 0) res.json({ errorMessage : ec.templates.INVALID_REQ });
  else {
    const valid = validator.validate(template, templateSchema).valid;
    if(!valid) return res.json( { errorMessage : ec.templates.INVALID_TEMPLATE } );
    for(let i = 0; i < template.events.length; i++) {
      const e = template.events[i];
      const error = validateEvent(e, eventValid(e));
      if(error != "") res.json({ errorMessage: error });
    }
    const templateIndex = data.templates.indexOf(oldTemplate[0]);
    data.templates[templateIndex] = template;
    res.json(template);
  }
};

templateController.delete = (req, res) => {
  const oldTemplate = data.templates.filter ( (t) => req.body.id === t.id );
  if(oldTemplate.length === 0) res.json({ errorMessage : ec.templates.INVALID_REQ });
  else if(activeTemplateData.filter((at) => at.templateId == req.body.id).length > 0) res.json( { errorMessage: ec.templates.ASSOCIATED_TEMPLATE });
  else {
    data.templates = data.templates.filter((t) => req.body.id !== t.id);
    res.json( { message : "Success"} );
  }
};

templateController.getById = (req, res) => {
  res.json(data.templates.filter((t) => req.params.id === JSON.stringify(t.id)));
};

export default templateController;