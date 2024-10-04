"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("./utils/game");
document.addEventListener('DOMContentLoaded', function () {
    // Dom과 연결
    var form = document.querySelector('form');
    var userInput = document.getElementById('userInput');
    var submit = document.getElementById('submit');
    var result = document.getElementById('result');
    var result1 = (0, game_1.createGame)();
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = userInput.value;
        if (!/^\d{3}$/.test(input.trim())) {
            userInput.value = '';
            alert('3자리 숫자를 입력하세요1212');
            return;
        }
    });
});
