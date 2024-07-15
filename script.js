const sketchBoard = document.createElement('div');
sketchBoard.classList.add('sketchBoard');
document.body.appendChild(sketchBoard);
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
clearButton.classList.add('button');
document.body.appendChild(clearButton);
const newBoardButton = document.createElement('button');
newBoardButton.textContent = 'New Board';
newBoardButton.classList.add('button');
document.body.appendChild(newBoardButton);
const rainbowCheckbox = document.createElement('input');
rainbowCheckbox.type = 'checkbox';
document.body.appendChild(rainbowCheckbox);
const rainbowLabel = document.createElement('label');
rainbowLabel.htmlFor = rainbowCheckbox;
rainbowLabel.textContent = 'Rainbow mode';
document.body.appendChild(rainbowLabel);


let pixelCount = 16;

const changeColor = (event) => {
    if (rainbowCheckbox.checked === true) {
        event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    } else {
        event.target.classList.add('defaultColor')
    }
    event.target.classList.add('changed')
}

const clearBoard = ()=> {
    event.preventDefault();
    let pixels = document.getElementsByClassName('pixel');
    for (i = 0 ; i < pixels.length ; i++) {
        pixels[i].classList.remove('defaultColor', 'changed');
        pixels[i].style.removeProperty('background-color');
    }
}

const newBoard = ()=> {
    event.preventDefault();
    let userResponse = window.prompt("How many pixels? It can't be more than 100.")
    if (userResponse > 100) {
        pixelCount = 100;
    } else {
        pixelCount = userResponse;
    }
    renderBoard();
}

clearButton.addEventListener('click', clearBoard);
newBoardButton.addEventListener('click', newBoard);

const removePixels = ()=> {
    let pixels = document.getElementsByClassName('pixel');
    pixels = Array.from(pixels);
    for (i=0 ; i < pixels.length ; i++) {
        pixels[i].remove();
    }  
}

const renderBoard = ()=> {
    removePixels();
    for (i=0 ; i < pixelCount ** 2 ; i++) {
        let pixel = document.createElement('div');
        pixel.addEventListener('mouseover', changeColor);
        pixel.classList.add(`pixel`)
        pixel.classList.add(`pixel-${i}`)
        sketchBoard.appendChild(pixel);
    }
    sketchBoard.style.width = `${pixelCount * 10}px`;
}

renderBoard();