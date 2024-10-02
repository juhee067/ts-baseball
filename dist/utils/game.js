import { compareNumbers } from './compareNumbers';
import { generateRandomNum } from './randomNumber';
export const createGame = () => {
    // 게임 상태
    let randomNumber = [];
    let chances = 3;
    let isGameStarted = false;
    //  게임 시작
    const startGame = () => {
        randomNumber = generateRandomNum();
        chances = 3;
        isGameStarted = true;
    };
    //  게임 리셋
    const resetGame = () => {
        chances = 3;
        isGameStarted = false;
    };
    // 게임이 시작됐는지 여부
    const getIsGameStarted = () => isGameStarted;
    //  입력 값 검사
    const checkNum = (input) => {
        if (!/^\d{3}$/.test(input.trim())) {
            return '3자리 숫자를 입력하세요';
        }
        const gameResult = compareNumbers(randomNumber, input);
        chances--;
        if (gameResult.strike === 3) {
            isGameStarted = false;
            return `3개의 숫자를 모두 맞히셨습니다.\n-------게임 종료-------`;
        }
        if (chances === 0) {
            isGameStarted = false;
            return `3개의 숫자를 모두 맞히지 못하셨습니다.\n-------게임 종료-------`;
        }
        return gameResult.ball === 0 ? '낫싱' : `strike: ${gameResult.strike}, ball: ${gameResult.ball}`;
    };
    return {
        startGame,
        resetGame,
        checkNum,
        getIsGameStarted,
    };
};
