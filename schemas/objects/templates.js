
export const templateSchema = {
  "id": "/template",
  "type": "object",
  "properties":{
    "id": { "type" : "string" },
    "name": { "type" : "string" },
    "events" : {
      "type": "array",
      "items":{ "$ref": "/baseEvent" }
    }
  },
  "required": [ "id", "events" ]
};



