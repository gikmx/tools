'use strict';

const PATH = require('path');
const FS   = require('fs');

const {Observable} = require('rxjs/Rx');
const FelizError   = require('feliz.error');

const is = require('./is');

const rx = {};

rx.node = {
    access  : Observable.bindNodeCallback(FS.access),
    stat    : Observable.bindNodeCallback(FS.stat),
    read    : Observable.bindNodeCallback(FS.readFile),
    readdir : Observable.bindNodeCallback(FS.readdir)
}

rx.path = target => {
    if (!is(target).string()) throw FelizError.type({
        name: 'feliz.util:rx.path',
        type: 'String',
        data: !target? target : target.constructor.name
    });

    target = PATH.isAbsolute(target)? target : PATH.resolve(target);

    const path = {};

    path.isReadable = ()=> rx.node
        .access(target, FS.R_OK)
        .catch(() => Observable.of(null))
        .map(Boolean);

    path.stat = ()=> path
        .isReadable()
        .switchMap(read => read? rx.node.stat(target) : Observable.of(null))

    path.isDir = ()=> path
        .stat()
        .map(stat => stat && stat.isDirectory());

    path.isFile = ()=> path
        .stat()
        .map(stat => stat && stat.isFile());

    path.readdir = ()=> path
        .isDir()
        .mergeMap(isdir => {
            if (!isdir) throw FelizError.type({
                name: 'feliz.util:rx.path.readdir',
                type: 'directory',
                data: target
            })
            return rx.node.readdir(target)
        })
        .mergeAll()
        .map(filename => PATH.join(target, filename));

    path.read = () => path.isFile()
        .mergeMap(isfile => {
            if (!isfile) throw FelizError.type({
                name: 'feliz.util:rx.path.read',
                type: 'readable file',
                data: target
            });
            return rx.node.read(target)
        })

    return path;
};

module.exports = rx;
