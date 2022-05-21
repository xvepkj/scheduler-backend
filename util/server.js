// Environment variables from .env
import dotenv from "dotenv";
dotenv.config();

import Debug from "debug";
const debug = Debug("app:main");

import express from "express";

import apiRouter from "../routes/api.js";

const server = {};

server.httpServer = null;

// Set to true for testing
server.isTestEnv = false;

server.start = async function () {
  debug("Starting server");
  /*********************************
  /* Express Setup 
  /*********************************/
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(apiRouter);

  return new Promise((resolve) => {
    server.httpServer = app.listen(5000, function () {
      debug("Server started @ port " + 5000);
      resolve(true);
    });
  });
};

server.stop = function () {
  server.httpServer.close(function () {
    debug("Stopped server");
  });
};

export default server;