import Debug from "debug"
const debug = Debug("test:helper");

import request from "supertest";
import { expect } from "chai";

/* global it */

/* ================================ */
/**
 * Test helper object (th)
 * provides readymade test methods for fail/pass of
 * a particular flow
 *
 * In all test methods, first argument is description
 *
 * Post:
 * - pass: body
 * - fail: body, message
 *
 * Get:
 * - pass: param, query
 * - fail: param, query, message
 */

const th = {};
th.request = {};

/* ================================ */
const result = {};
result.fail = (m) => {
  return { errorMessage: m };
};
result.pass = (d) => {
  return d;
};
/* ================================ */
th.request.get = (path, query, expected, done) => {
  debug("%O", [path, query, expected]);
  request(global.httpServer)
    .get(path)
//    .set("Cookie", cookie) // for authentication
    .query(query)
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) done(err);
      expect(res.body).to.eql(expected);
      done();
    });
};

th.request.post = (path, body, expected, done) => {
  debug("%O", [path, body, expected]);
  request(global.httpServer)
    .post(path)
//    .set("Cookie", cookie) // for authentication
    .send(body)
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) done(err);
      expect(res.body).to.eql(expected);
      done();
    });
};

th.request.put = (path, body, expected, done) => {
  debug("%O", [path, body, expected]);
  request(global.httpServer)
    .put(path)
//    .set("Cookie", cookie) // for authentication
    .send(body)
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) done(err);
      expect(res.body).to.eql(expected);
      done();
    });
};

th.request.delete = (path, body, expected, done) => {
  debug("%O", [path, body, expected]);
  request(global.httpServer)
    .delete(path)
//    .set("Cookie", cookie) // for authentication
    .send(body)
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) done(err);
      expect(res.body).to.eql(expected);
      done();
    });
};
/* ================================ */
th.gen = {};
th.gen.get = {};
th.gen.post = {};
th.gen.put = {};
th.gen.delete = {};

/**
 * Generates a function which is supposed to test a success result (upon a get request)
 *
 * The generated function 'f' has three args:
 * - desc: test name
 * - p: optional param for get request (assumed always single)
 * - q: optional query object for get request
 *
 * @param {*} route the request path
 * @param {*} dataGenerator function for generating expected data object given param and query
 * @returns
 */
th.gen.get.pass = (route, dataGenerator) => {
  return function (desc, p = null, q = {}) {
    it(desc, function (done) {
      let data = dataGenerator(p, q);
      th.request.get(route + (p ? "/" + p : ""), q, result.pass(data), done);
    });
  };
};

th.gen.get.fail = (route) => {
  return function (desc, message, p = null, q = {}) {
    it(desc, function (done) {
      th.request.get(route + (p ? "/" + p : ""), q, result.fail(message), done);
    });
  };
};

/**
 * Similar to th.gen.get generators
 * Here dataGenerator takes a single argument body
 * which is the post request body.
 * It is also responsible for making any changes to localState based
 * on the request
 * @param {*} route
 * @param {*} dataGenerator
 * @returns
 */
th.gen.post.pass = (route, dataGenerator) => {
  return function (desc, body) {
    it(desc, function (done) {
      let data = dataGenerator(body);
      th.request.post(route, body, result.pass(data), done);
    });
  };
};

th.gen.post.fail = (route) => {
  return function (desc, body, message) {
    it(desc, function (done) {
      th.request.post(route, body, result.fail(message), done);
    });
  };
};

/**
 * Similar to th.gen.get generators
 * Here dataGenerator takes a single argument body
 * which is the post request body.
 * It is also responsible for making any changes to localState based
 * on the request
 * @param {*} route
 * @param {*} dataGenerator
 * @returns
 */
th.gen.put.pass = (route, dataGenerator) => {
  return function (desc, body) {
    it(desc, function (done) {
      let data = dataGenerator(body);
      th.request.put(route, body, result.pass(data), done);
    });
  };
};

th.gen.put.fail = (route) => {
  return function (desc, body, message) {
    it(desc, function (done) {
      th.request.put(route, body, result.fail(message), done);
    });
  };
};

export default th;