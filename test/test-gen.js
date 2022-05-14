import th from "./test-helper.js";
import tagsApi from "./local-state/tags.js";
import eventsApi from "./local-state/events.js";
/**
 * Functions to generate tests specific to routes
 */

const test = {};

test.tags = {};

test.tags.add = {};
test.tags.add.pass = th.gen.post.pass("/api/tags", (b) => { return tagsApi.add(b); });
test.tags.add.fail = th.gen.post.fail("/api/tags");

test.tags.all = {};
test.tags.all.pass = th.gen.get.pass("/api/tags", () => { return tagsApi.all(); });

test.events = {};

test.events.add = {};
test.events.add.pass = th.gen.post.pass("/api/events", (b) => { return eventsApi.add(b); });
test.events.add.fail = th.gen.post.fail("/api/events");

test.events.all = {};
test.events.delete = {};
test.events.update = {};
test.events.all.pass = th.gen.get.pass("/api/events", (d) => { return eventsApi.all(d);}); 
test.events.delete.pass = th.gen.delete.pass("/api/events",(obj) => { return eventsApi.delete(obj.id); });
test.events.update.pass = th.gen.put.pass("/api/events",(b) => {return eventsApi.update(b);});

// test.tags.one = {};
// test.tags.add = {};
// test.tags.update = {};
// test.tags.remove = {};

export default test;