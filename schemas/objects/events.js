
export const eventSchema = {
    "id": "/event",
    "type": "object",
    "properties":{
        "activeTemplateId": {"type": ["string", "null"]} ,
        "name": { "type": "string" },
        "startTime": { "type": "string" },
        "endTime": { "type": "string" },
        "trackingType": { "type": "string" },
        "tagId" : {"type": ["string", "null"] },
        "trackingData": {"type": ["string", "null"] } }, 
    "required": ["name", "activeTemplateId", "startTime",
                "endTime", "trackingType", "tagId"]
}