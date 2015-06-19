const Lang = imports.lang;

const PanelMenu = imports.ui.panelMenu;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const BugItem = Me.imports.bugItem;

const BugIndicator = new Lang.Class({
    Name: 'BugIndicator',
    Extends: PanelMenu.Button,

    _init: function() {
        this.parent(0.0, "Bug");
   },

    shutdown: function() {
        this.destroy();
    }
});

