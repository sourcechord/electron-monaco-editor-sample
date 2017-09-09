/// <reference path="node_modules/monaco-editor/monaco.d.ts" />
import * as electron from 'electron';
import {remote} from 'electron';
const app = remote.app;
const BrowserWindow = remote.BrowserWindow;
const dialog = remote.dialog;

declare var amdRequire;
var editor: monaco.editor.IStandaloneCodeEditor;

// loader.jsのrequire関数を使い、monaco-editorのコードを読み込む
amdRequire(['vs/editor/editor.main'], () => {
  onModuleLoaded();
});

// monaco-editorのモジュール読み込み完了時に行う、エディタ初期化処理
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


document.getElementById('btnShowText').onclick = showEditorText;
