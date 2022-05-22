import th from "./test-helper.js";
import tagsApi from "./local-state/tags.js";
import eventsApi from "./local-state/events.js";
import templatesApi from "./local-state/templates.js";
import activeTemplatesApi from "./local-state/active-templates.js";

/**
 * Functions to generate tests specific to routes
 */

const test = {};

/* ******************************** */
test.tags = {};

test.tags.add = {};
test.tags.add.pass = th.gen.post.pass("/api/tags", (b) => { return tagsApi.add(b); });
test.tags.add.fail = th.gen.post.fail("/api/tags");

test.tags.all = {};
test.tags.all.pass = th.gen.get.pass("/api/tags", () => { return tagsApi.all(); });

test.tags.getById = {}
test.tags.getById.pass = th.gen.get.pass("/api/tags", (id) => { return tagsApi.getById(id); });
test.tags.getById.fail = th.gen.get.fail("/api/tags")

test.tags.update = {}
test.tags.update.pass = th.gen.put.pass("/api/tags", (t) => { return tagsApi.update(t); });
test.tags.update.fail = th.gen.put.fail("/api/tags")

test.tags.delete = {}
test.tags.delete.pass = th.gen.delete.pass("/api/tags", (b) => { return tagsApi.delete(b.id); });
test.tags.delete.fail = th.gen.delete.fail("/api/tags")

/* ******************************** */
test.events = {};

test.events.add = {};
test.events.add.pass = th.gen.post.pass("/api/events", (b) => { return eventsApi.add(b); });
test.events.add.fail = th.gen.post.fail("/api/events");

// Get all by date
test.events.all = {};
test.events.all.pass = th.gen.get.pass("/api/events", (d) => { return eventsApi.all(d);}); 

test.events.update = {};
test.events.update.pass = th.gen.put.pass("/api/events",(b) => {return eventsApi.update(b);});
test.events.update.fail = th.gen.put.fail("/api/events");

test.events.delete = {};
test.events.delete.pass = th.gen.delete.pass("/api/events",(obj) => { return eventsApi.delete(obj.id); });
test.events.delete.fail = th.gen.delete.fail("/api/events");

/* ******************************** */
test.templates = {};

test.templates.all = {};
test.templates.all.pass = th.gen.get.pass("/api/templates", () => { return templatesApi.all(); });

test.templates.add = {};
test.templates.add.pass = th.gen.post.pass("/api/templates", (d) => { return templatesApi.add(d); });
test.templates.add.fail = th.gen.post.fail("/api/templates");

test.templates.update = {};
test.templates.update.pass = th.gen.put.pass("/api/templates", (d) => { return templatesApi.update(d); });
test.templates.update.fail = th.gen.put.fail("/api/templates");

test.templates.delete = {};
test.templates.delete.pass = th.gen.delete.pass("/api/templates", (d) => { return templatesApi.delete(d); });
test.templates.delete.fail = th.gen.delete.fail("/api/templates");

test.templates.getById = {};
test.templates.getById.pass = th.gen.get.pass("/api/templates", (id) => { return templatesApi.getById(id); });
test.templates.getById.fail = th.gen.get.fail("/api/templates");

/* ******************************** */
test.activeTemplates = {};

test.activeTemplates.all = {};
test.activeTemplates.all.pass = th.gen.get.pass("/api/templates/active", () => { return activeTemplatesApi.all(); });

test.activeTemplates.add = {};
test.activeTemplates.add.pass = th.gen.post.pass("/api/templates/active", (d) => { return activeTemplatesApi.add(d); });
test.activeTemplates.add.fail = th.gen.post.fail("/api/templates/active");

test.activeTemplates.update = {};
test.activeTemplates.update.pass = th.gen.put.pass("/api/templates/active", (d) => { return activeTemplatesApi.update(d); });
test.activeTemplates.update.fail = th.gen.put.fail("/api/templates/active");

test.activeTemplates.delete = {};
test.activeTemplates.delete.pass = th.gen.delete.pass("/api/templates/active", (d) => { return activeTemplatesApi.delete(d); });
test.activeTemplates.delete.fail = th.gen.delete.fail("/api/templates/active");

test.activeTemplates.getById = {};
test.activeTemplates.getById.pass = th.gen.get.pass("/api/templates/active", (id) => { return activeTemplatesApi.getById(id); });
test.activeTemplates.getById.fail = th.gen.get.fail("/api/templates/active");

/* ******************************** */

export default test;