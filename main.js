// 로또 번호 생성 함수
function generateLottoNumbers() {
  const numbers = [];
  while (numbers.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers.sort((a, b) => a - b);
}

// 번호에 따른 색상 클래스 결정
function getColorClass(num) {
  if (num <= 10) return 'color-1';
  if (num <= 20) return 'color-2';
  if (num <= 30) return 'color-3';
  if (num <= 40) return 'color-4';
  return 'color-5';
}

// 5게임 생성 및 표시 함수
function createFiveGames() {
  const container = document.getElementById('lotto-container');
  container.innerHTML = ''; // 기존 내용 삭제

  for (let i = 0; i < 5; i++) {
    const gameNumbers = generateLottoNumbers();
    const gameRow = document.createElement('div');
    gameRow.className = 'lotto-game';

    gameNumbers.forEach(num => {
      const ball = document.createElement('div');
      ball.className = `ball ${getColorClass(num)}`;
      ball.textContent = num;
      gameRow.appendChild(ball);
    });

    container.appendChild(gameRow);
  }
}

// 초기 실행 및 버튼 이벤트 등록
document.addEventListener('DOMContentLoaded', () => {
  createFiveGames();
  
  const generateBtn = document.getElementById('generate-btn');
  generateBtn.addEventListener('click', createFiveGames);
});