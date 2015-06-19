const Lang = imports.lang;

const St = imports.gi.St;

const BugItem = new Lang.Class({
    Name: 'BugItem',
    Extends: St.Button,

    _init: function() {
        this.parent();
    }
});
