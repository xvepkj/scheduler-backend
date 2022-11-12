import jsonSchema from "jsonschema";

export const eventSchema = {
  "id": "/event",
  "type": "object",
  "properties":{
    "activeTemplateId": {"type": ["string", "null"]} , 
    "date": { "type": "string" },
    "baseEvent" : { "$ref": "/baseEvent" },
    "trackingData": {"type": ["string", "null"] } }, 
  "required": ["date", "baseEvent"]
};

export const baseEventSchema = {
  "id": "/baseEvent",
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "startTime" : { "type":  "string" },
    "endTime" : { "type": "string" },
    "trackingType" : { "type": "string" },
    "tagId" : { "type": ["string","null"] }
  },
  "required": ["name", "startTime", "endTime",
    "trackingType"]
};