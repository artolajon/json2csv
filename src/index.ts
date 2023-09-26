import './style.scss';
import image from './image.jpg';

function component() {
    const element = document.createElement('div');
  
    element.innerText = "When you run the commands correctly"; 
    element.classList.add('meme');

    // Add the image to our existing div.
    const myImage = new Image();
    myImage.src = image;

    element.appendChild(myImage);

    return element;
  }
  document.body.innerHTML="";
  document.body.appendChild(component());