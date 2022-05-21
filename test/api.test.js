/**
 * The API testing module
 *
 * Local state simulates a temporary working version of
 * our application
 *
 * It does not interact with any of the actual application modules
 * except for:
 * - error-codes.js : For verification
 */

/* global before, after, describe */

// To use aliases specified in _moduleAliases (package.json)
import server from "../util/server.js";

import { assert } from "chai";

before(async function () {
  server.isTestEnv = true;
  let serverStarted = await server.start(true);
  assert.isTrue(serverStarted);

  global.httpServer = server.httpServer;
});

after(function () {
  server.stop();
});

import tagsTests from "./api/tags.js";
describe("TAGS", tagsTests);

import eventTests from "./api/events.js";
describe("EVENTS", eventTests);

import templateTests from "./api/templates.js";
describe("TEMPLATES",templateTests);