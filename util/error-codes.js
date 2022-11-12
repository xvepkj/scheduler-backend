const ec = {};

ec.tags = {};
ec.events = {};
ec.templates = {};
ec.activeTemplates = {};

ec.tags.INVALID_ID = "No tag with given id exists";
ec.tags.INVALID_SCHEMA = "Incorrect schema";

ec.events.INCOMPLETE = "Illegal event";

ec.events.INVALID_DATE_FORMAT = "Invalid Date Format";

ec.events.INVALID_TIME_FORMAT = "Invalid Time Format";

ec.events.INVALID_TIME_VALUES = "Invalid Time Values";

ec.events.INVALID_TRACKING_DATA = "Invalid tracking data"

ec.events.INVALID_REQ = "Event not found";

ec.events.INVALID_UPDATE_DELETE = "Can't update or delete past events"

ec.events.FUTURE_TEMPLATE_EVENT = "Can't update or delete future events" 

ec.templates.INVALID_TEMPLATE = "Illegal Template";

ec.templates.INVALID_REQ = "Invalid Requirement";

ec.templates.ASSOCIATED_TEMPLATE = "Can't delete template associated with associated active templates"

ec.activeTemplates.INVALID_ID = "No active template with given id exists";

ec.activeTemplates.INVALID_TEMPLATE_ID = "No template with given id exists";

ec.activeTemplates.INVALID_SCHEMA = "Invalid schema for active template";

export default ec;