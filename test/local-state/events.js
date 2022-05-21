const data = {
  events: []
};

const eventsApi = {};

var counter = 0;

eventsApi.all = (d) => {
  return data.events.filter((e) => d === JSON.stringify(e.date) );
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