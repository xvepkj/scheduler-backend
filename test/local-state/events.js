import { data as activeTemplateData } from "./active-templates.js";
import { satisfies } from "../../controllers/active-templates.js";
import { data as templateData } from "./templates.js";
import util from "../../util/util.js";

const data = {
  events: []
};

const eventsApi = {};

var counter = 0;

eventsApi.all = (d) => {
  var events = data.events.filter((e) => d === JSON.stringify(e.date) );
  if(util.date.isAfter(d, util.date.current))
    for(const activeTemplate of activeTemplateData) {
      if(satisfies(activeTemplate, d)) 
        events = events.concat(templateData.data.filter((t) => activeTemplate.templateId == t.id).events);
    }
  return events;  
};

eventsApi.add = (e) => {
  e.id = counter++;
  e.id = e.id.toString();
  data.events.push(e);
  return e;
};

eventsApi.update = (event) => {
  const updatedEvent =  data.events.filter((e) => event.id === e.id );
  const eventIndex = data.events.indexOf(updatedEvent[0]);
  data.events[eventIndex] = event;
  return event;
};

eventsApi.delete = (id) => {
  data.events = data.events.filter((e) =>id !== e.id );
  return {message: "Success"};
};

export default eventsApi;