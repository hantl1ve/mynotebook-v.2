const addDiv = document.getElementById('write-down');
const textForDiv = document.getElementById('input-form');
const boardForDiv = document.getElementsByClassName('board')[0];

fetch('http://localhost:3000', {
    method: 'GET',
  }).then((res) => {
    res.json().then((data) => {
      boardForDiv.innerHTML = '';
      for (let i = 0; i < data.length; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('new-div');
        newDiv.innerHTML = data[i];        
        newDiv.addEventListener('dblclick', (event) => {
          const text = event.target.innerHTML;
          fetch('http://localhost:3000', {
            method: 'DELETE',
            body: text,
          })
        });
        boardForDiv.append(newDiv);
      };
    });
  });

addDiv.addEventListener('click', () => {
  if (textForDiv.value.length === 0) {
    return;
  };
  fetch('http://localhost:3000', {
    method: 'POST',
    body: textForDiv.value,
  }).then(() => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-div');
    newDiv.innerHTML = textForDiv.value;

    newDiv.addEventListener('dblclick', (event) => {
          const text = event.target.innerHTML;
          fetch('http://localhost:3000', {
            method: 'DELETE',
            body: text,
          })
        });
    boardForDiv.append(newDiv);
    textForDiv.value = '';
  })
});

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  textForDiv.value = '';
})
