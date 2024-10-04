"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGame = void 0;
var randomNumber_1 = require("./randomNumber");
var createGame = function () {
    // 랜덤 숫자 뽑기
    var randomNumber = (0, randomNumber_1.generateRandomNum)();
    // 기회 3번
    var chance = 3;
    // 게임 성공 여부
    var isGameOver = false;
    return randomNumber;
};
exports.createGame = createGame;
