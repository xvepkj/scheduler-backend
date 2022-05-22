export const activeTemplateSchema = {
  "id": "/activeTemplate",
  "type": "object",
  "properties":{
    "id": { "type" : "string" },
    "templateId": { "type" : "string" },
    "startingDate": { "type" : "string" },
    "repeatCriteria": {
      "type" : "string",
      "enum": ["CUSTOM", "WEEKLY", "MONTHLY", "FREQUENCY"]
    },
    "repeatCriteriaData" : {
      "oneOf": [
        {
          "type": "array",
          "items": { "type": "string" }
        },
        {
          "type": "array",
          "items": { "type": "integer" }
        },
        {
          "type": "integer"
        }
      ]
    }
  },
  "required": [ "id", "templateId", "startingDate", "repeatCriteria", "repeatCriteriaData" ]
};
