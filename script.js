const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('name');
const nameList = document.getElementById('nameList');
const winnerDisplay = document.getElementById('winner');
let names = [];

function addName() {
    const newName = nameInput.value.trim();
    if (newName !== '') {
        names.push(newName);
        updateNameList();
        nameInput.value = '';
    }
}

function updateNameList() {
    nameList.innerHTML = '<h3>Nomes Adicionados:</h3>';
    names.forEach(name => {
        const listItem = document.createElement('div');
        listItem.textContent = name;
        nameList.appendChild(listItem);
    });
}

function drawWinner() {
    const numberOfNames = names.length;
    if (numberOfNames > 0) {
        const randomIndex = Math.floor(Math.random() * numberOfNames);
        const winner = names[randomIndex];
        winnerDisplay.textContent = `O vencedor é: ${winner}`;
    } else {
        winnerDisplay.textContent = 'Adicione nomes antes de sortear.';
    }
}
