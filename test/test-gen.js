import th from "./test-helper.js";
import tagsApi from "./local-state/tags.js";
import eventsApi from "./local-state/events.js";
import templatesApi from "./local-state/templates.js";
import activeTemplatesApi from "./local-state/active-templates.js";

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

test.templates = {};

test.templates.all = {};
test.templates.add = {};
test.templates.update = {};
test.templates.delete = {};
test.templates.getById = {};
test.templates.add.pass = th.gen.post.pass("/api/templates", (d) => { return templatesApi.add(d); });
test.templates.all.pass = th.gen.get.pass("/api/templates", () => { return templatesApi.all(); });
test.templates.update.pass = th.gen.put.pass("/api/templates", (d) => { return templatesApi.update(d); });
test.templates.delete.pass = th.gen.delete.pass("/api/templates", (d) => { return templatesApi.delete(d); });
test.templates.getById.pass = th.gen.get.pass("/api/templates", (id) => { return templatesApi.getById(id); });

test.activeTemplates = {};

test.activeTemplates.all = {};
test.activeTemplates.add = {};
test.activeTemplates.update = {};
test.activeTemplates.delete = {};
test.activeTemplates.getById = {};
test.activeTemplates.add.pass = th.gen.post.pass("/api/templates/active", (d) => { return activeTemplatesApi.add(d); });
test.activeTemplates.add.fail = th.gen.post.fail("/api/templates/active");
test.activeTemplates.all.pass = th.gen.get.pass("/api/templates/active", () => { return activeTemplatesApi.all(); });
test.activeTemplates.update.pass = th.gen.put.pass("/api/templates/active", (d) => { return activeTemplatesApi.update(d); });
test.activeTemplates.delete.pass = th.gen.delete.pass("/api/templates/active", (d) => { return activeTemplatesApi.delete(d); });
test.activeTemplates.getById.pass = th.gen.get.pass("/api/templates/active", (id) => { return activeTemplatesApi.getById(id); });
test.activeTemplates.getById.fail = th.gen.get.fail("/api/templates/active");

// test.tags.one = {};
// test.tags.add = {};
// test.tags.update = {};
// test.tags.remove = {};

export default test;