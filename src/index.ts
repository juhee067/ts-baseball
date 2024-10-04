import { createGame } from './utils/game';
import { updateGameMessage } from './utils/updateGameMessage';

// Dom과 연결
const form = document.querySelector('form') as HTMLFormElement;
const userInput = document.getElementById('userInput') as HTMLInputElement;
const result = document.getElementById('result') as HTMLElement;

const game = createGame();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  handleUserInput(userInput.value.trim());
});

const handleUserInput = (input: string) => {
  switch (input) {
    case '1':
      startGame();
      break;
    case '9':
      endGame();
      break;
    default:
      if (game.getIsGameStarted()) {
        updateGameMessage(result, game.checkNum(input));
        return (userInput.value = '');
      }
      updateGameMessage(result, '게임을 시작하려면 먼저 1을 입력해주세요.');
  }
};

const startGame = () => {
  game.startGame();
  updateGameMessage(result, '컴퓨터가 숫자를 뽑았습니다');
  userInput.value = '';
};

const endGame = () => {
  game.resetGame();
  updateGameMessage(result, '애플리케이션이 종료되었습니다.');
  userInput.value = '';
};
