import th from "./test-helper.js";
import tagsApi from "./local-state/tags.js";
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

// test.tags.one = {};
// test.tags.add = {};
// test.tags.update = {};
// test.tags.remove = {};

export default test;