import Debug from "debug";
import ec from "../util/error-codes.js";
import jsonSchema from "jsonschema";
import { activeTemplateSchema } from "../schemas/objects/active-templates.js";
import { data as templatesData } from "./templates.js";
const debug = Debug("app:activeTemplateController");

var validator = new jsonSchema.Validator();
validator.addSchema(activeTemplateSchema);

const data = {
  activeTemplates: [],
  counter: 0
};

var activeTemplateController = {};

activeTemplateController.add = (req, res) => {
  const activeTemplate = req.body;
  activeTemplate.id = "0"; // Dummy id for validation
  const validationResult = validator.validate(activeTemplate, activeTemplateSchema);
  if(!validationResult.valid) {
    res.json( { errorMessage : ec.activeTemplates.INVALID_SCHEMA } );
    return;
  }

  if (templatesData.templates.findIndex(t => t.id == activeTemplate.templateId) === -1) {
    res.json( { errorMessage: ec.activeTemplates.INVALID_TEMPLATE_ID});
    return;
  }

  activeTemplate.id = (data.counter++).toString();
  data.activeTemplates.push(activeTemplate);
  res.json(activeTemplate);
};

activeTemplateController.all = (req, res) => {
  res.json(data.activeTemplates); 
};

activeTemplateController.update = (req, res) => {
  const activeTemplate = req.body;
  const valid = validator.validate(activeTemplate, activeTemplateSchema).valid;
  if(!valid) return res.json( { errorMessage : ec.activeTemplates.INVALID_SCHEMA } );

  var index = data.activeTemplates.findIndex(at => activeTemplate.id === at.id);
  if (index == -1) return ec.activeTemplates.INVALID_ID;
  data.activeTemplates[index] = activeTemplate;
  res.json(activeTemplate);
};

activeTemplateController.delete = (req, res) => {
  var id = req.body.id;
  var index = data.activeTemplates.findIndex(at => id === at.id);
  if (index == -1) return ec.activeTemplates.INVALID_ID;
  data.activeTemplates.splice(index, 1);
  res.json( { message : "Success"} );
};

activeTemplateController.getById = (req, res) => {
  const id = req.params.id;
  var index = data.activeTemplates.findIndex(at => id === at.id);
  if (index == -1) {
    res.json({ errorMessage: ec.activeTemplates.INVALID_ID });
  } else {
    res.json(data.activeTemplates[index]);
  }
};

export default activeTemplateController;