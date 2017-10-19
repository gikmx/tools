import Thrower from '@gik/tools-thrower';
import Checker from '@gik/tools-checker';
import Logger from '@gik/tools-logger';
import Streamer from '@gik/tools-streamer';
import Populator from '@gik/tools-populator';
import Mapper from '@gik/tools-mapper';

/**
 * These are the available types for the tools.
 * @namespace Types
 */

/**
 * > This is a meta package containign the following packages.
 *
 * - [tools-thrower](http://github.com/gikmx/tools-thrower)
 * - [tools-checker](http://github.com/gikmx/tools-checker)
 * - [tools-logger](http://github.com/gikmx/tools-logger)
 * - [tools-streamer](http://github.com/gikmx/tools-streamer)
 * - [tools-populator](http://github.com/gikmx/tools-populator)
 * - [tools-mapper](http://github.com/gikmx/tools-mapper)
 */
const Tools = {
    thrower: Thrower,
    checker: Checker,
    logger: Logger,
    streamer: Streamer,
    populator: Populator,
    mapper: Mapper,
};
export default Tools;

export {
    Thrower,
    Checker,
    Logger,
    Streamer,
    Populator,
    Mapper,
};
