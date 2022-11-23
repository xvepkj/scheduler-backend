import Debug from "debug";
import ec from "../util/error-codes.js";
import jsonSchema from "jsonschema";
import { tagSchema } from "../schemas/objects/tags.js";
const debug = Debug("app:tagsController");

var validator = new jsonSchema.Validator();
validator.addSchema(tagSchema);

// To be removed after implementing actual service methods
const data = {
  tags: [],
  counter: 0,
};

var tagsController = {};

tagsController.add = (req, res) => {
  const tag = req.body;
  const validateResult = validator.validate(tag, tagSchema).valid;
  if (!validateResult) {
    res.json({ errorMessage: ec.tags.INVALID_SCHEMA});
  } else {
    tag.id = (data.counter++).toString();
    data.tags.push(tag);
    res.json(tag);
  }
};

tagsController.update = (req, res) => {
  const tag = req.body;
  const validateResult = validator.validate(tag, tagSchema).valid;
  if (!validateResult) { // replace by schema validation
    res.json({ errorMessage: ec.tags.INVALID_SCHEMA});
    return;
  }
  var index = data.tags.findIndex(t => t.id === tag.id);
  if (index === -1) {
    res.json({ errorMessage: ec.tags.INVALID_ID });
  } else {
    data.tags[index] = tag;
    res.json(tag);
  }
};

tagsController.delete = (req, res) => {
  var id = req.body.id;
  var index = data.tags.findIndex(t => t.id === id);
  if (index === -1) {
    res.json({ errorMessage: ec.tags.INVALID_ID });
  } else {
    data.tags.splice(index, 1);
    res.json({ message: "Success" });
  }
};

tagsController.getById = (req, res) => {
  var id = req.params.id;
  var index = data.tags.findIndex(t => t.id === id);
  if (index === -1) {
    res.json({ errorMessage: ec.tags.INVALID_ID });
  } else {
    res.json(data.tags[index]);
  }
};

tagsController.all = (req, res) => {
  res.json(data.tags);
};

export default tagsController;