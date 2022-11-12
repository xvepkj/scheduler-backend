
export const eventSchema = {
    "id": "/event",
    "type": "object",
    "properties":{
        "activeTemplateId": {"type": ["string", "null"]} ,
        "date": "string",
        "baseEvent" : "/partialEventSchema",
        "trackingData": {"type": ["string", "null"] } }, 
    "required": ["activeTemplateId", "date", "baseEvent"]
}

export const baseEventSchema = {
  "id": "/partialEvent",
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "startTime" : { "type":  "string" },
    "endTime" : { "type": "string" },
    "trackingType" : { "type": "string" },
    "tagId" : { "type": ["string","null"] }
  },
  "required": ["name", "startTime", "endTime",
    "trackingType", "tagId"]
};

