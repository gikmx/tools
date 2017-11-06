/* eslint-disable import/no-dynamic-require */
import PATH from 'path';

const Thrower = require(PATH.join(__dirname, 'thrower', 'thrower'));
const Checker = require(PATH.join(__dirname, 'checker', 'checker'));
const Logger = require(PATH.join(__dirname, 'logger', 'logger'));
const Streamer = require(PATH.join(__dirname, 'streamer', 'streamer'));
const Populator = require(PATH.join(__dirname, 'populator', 'populator'));
const Mapper = require(PATH.join(__dirname, 'mapper', 'mapper'));
const Server = require(PATH.join(__dirname, 'server', 'server'));

const Tools = {
    thrower: Thrower,
    checker: Checker,
    logger: Logger,
    streamer: Streamer,
    populator: Populator,
    mapper: Mapper,
    server: Server,
};
export default Tools;

export {
    Thrower,
    Checker,
    Logger,
    Streamer,
    Populator,
    Mapper,
    Server,
};

/**
 * @namespace Types
 * @descriptionThese are the available types for the tools.
 * @private
 */
