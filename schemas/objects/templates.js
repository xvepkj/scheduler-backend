import { baseEventSchema } from "./events.js";

export const templateSchema = {
  "id": "/template",
  "type": "object",
  "properties":{
    "id": { "type" : "string" },
    "name": { "type" : "string" },
    "events" : {
      "type": "array",
      "items":{ "$ref": "/baseEventSchema" }
    }
  },
  "required": [ "id", "events" ]
};



