const sketchBoard = document.createElement('div');
sketchBoard.classList.add('sketchBoard');
document.body.appendChild(sketchBoard);

let pixelCount = 16;

for (i=0 ; i < pixelCount ; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add(`pixel`)
    pixel.classList.add(`pixel-${i}`)
    sketchBoard.appendChild(pixel);
}