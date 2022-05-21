
import jsonSchema from "jsonschema";
import { templateSchema, partialEventSchema } from "../schemas/objects/templates.js";


var v = new jsonSchema.Validator();
v.addSchema(partialEventSchema, partialEventSchema.id);


var template1 = 
        {
          "id": "2",
          "name": "study",
          "events": [
            {
              "name": "study",
              "startTime": "start",
              "endTime": "end",
              "trackingType": "UNTRACKED",
              "tagId" : null
            },
            {
              "name": "play",
              "startTime": "start",
              "endTime": "end",
              "trackingType": "TRACKED",
              "tagId" : "tag-id"
            }
          ]
        };


console.log(v.validate(template1, templateSchema));

