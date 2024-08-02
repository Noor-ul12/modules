"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOnsiteStudent = exports.getAllStudent = void 0;
var data_1 = require("./data");
var getAllStudent = function () {
    return data_1.default;
};
exports.getAllStudent = getAllStudent;
var getOnsiteStudent = function () {
    var result = data_1.default.filter(function (student) { return student.isOnSite; });
    return result;
};
exports.getOnsiteStudent = getOnsiteStudent;
