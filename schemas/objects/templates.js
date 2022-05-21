
export const templateSchema = {
    "id": "/template",
    "type": "object",
    "properties":{
        "id": { "type" : "string" },
        "name": { "type" : "string" },
        "events" : {
            "type": "array",
            "items":{ "$ref": "/partialEvent" }
        }
    },
    "required": [ "id", "events" ]
}

export const partialEventSchema = {
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
}

