import { partialEventSchema } from "./events";

export const templateSchema = {
  "id": "/template",
  "type": "object",
  "properties":{
    "id": { "type" : "string" },
    "name": { "type" : "string" },
    "events" : {
      "type": "array",
      "items":{ "$ref": "/partialEventSchema" }
    }
  },
  "required": [ "id", "events" ]
};



