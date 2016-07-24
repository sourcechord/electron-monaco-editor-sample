/// <reference path="node_modules/monaco-editor/monaco.d.ts" />
import * as electron from 'electron';
import {remote} from 'electron';
const app = remote.app;
const BrowserWindow = remote.BrowserWindow;
const dialog = remote.dialog;

var editor: monaco.editor.IStandaloneCodeEditor;

function onModuleLoaded() {
    editor = monaco.editor.create(document.getElementById('container'), {
        value: [
        'function x() {',
        '\tconsole.log("Hello world!");',
        '}'
        ].join('\n'),
        language: 'typescript',
        automaticLayout: true,
        theme: "vs-dark"
    });
}

function showEditorText() {
    var text = editor.getValue();
    alert(text);
}
