"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    var ID = todo.id;
    var title = todo.title;
    console.log("\n        id: ".concat(ID, "\n        title: ").concat(title, "\n    "));
});
