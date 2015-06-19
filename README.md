install this extension as `bug@gnome-shell-extensions.gnome.org`

run `gsettings set org.gnome.shell disable-extension-version-validation true` (or false)

```
Jun 19 14:00:46 Lou gnome-session[579]: (gnome-shell:627): Gjs-WARNING **: JS ERROR: Error: Type name Gjs_BugItem is already registered
Jun 19 14:00:46 Lou gnome-session[579]: GObjectMeta<._construct@resource:///org/gnome/gjs/modules/overrides/GObject.js:125
Jun 19 14:00:46 Lou gnome-session[579]: wrapper@resource:///org/gnome/gjs/modules/lang.js:169
Jun 19 14:00:46 Lou gnome-session[579]: Class.prototype._construct/newClass@resource:///org/gnome/gjs/modules/lang.js:204
Jun 19 14:00:46 Lou gnome-session[579]: Class@resource:///org/gnome/gjs/modules/lang.js:152
Jun 19 14:00:46 Lou gnome-session[579]: @/usr/share/gnome-shell/extensions/bug@gnome-shell-extensions.gnome.org/bugItem.js:9
Jun 19 14:00:46 Lou gnome-session[579]: @/usr/share/gnome-shell/extensions/bug@gnome-shell-extensions.gnome.org/indicator.js:8
Jun 19 14:00:46 Lou gnome-session[579]: @/usr/share/gnome-shell/extensions/bug@gnome-shell-extensions.gnome.org/extension.js:4
Jun 19 14:00:46 Lou gnome-session[579]: initExtension@resource:///org/gnome/shell/ui/extensionSystem.js:220
Jun 19 14:00:46 Lou gnome-session[579]: enableExtension@resource:///org/gnome/shell/ui/extensionSystem.js:109
Jun 19 14:00:46 Lou gnome-session[579]: _onVersionValidationChanged/<@resource:///org/gnome/shell/ui/extensionSystem.js:284
Jun 19 14:00:46 Lou gnome-session[579]: _onVersionValidationChanged@resource:///org/gnome/shell/ui/extensionSystem.js:283
```
