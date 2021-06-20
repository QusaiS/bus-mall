
'use strict';

let imgArray = [

  'bag.jpg','banana.jpg',
  'bathroom.jpg','boots.jpg',
  'breakfast.jpg','bubblegum.jpg',
  'chair.jpg','cthulhu.jpg',
  'dog-duck.jpg','dragon.jpg',
  'pen.jpg','pet-sweep.jpg',
  'scissors.jpg','shark.jpg',
  'sweep.png','tauntaun.jpg',
  'unicorn.jpg','usb.gif',
  'water-can.jpg','wine-glass.jpg'];

// Constructor
// New obj
// prototype render
// Random function
// get by id
// Event Handler

let imageSection = document.getElementById('imageSection');
let leftImage = document.getElementById( 'leftImage' );
let midImage = document.getElementById( 'midImage' );
let rightImage = document.getElementById( 'rightImage' );
let list = document.getElementById('ord');
let view = document.getElementById('show');

let counter = 0;
let trys=25;
let rightCounter = 0;
let midCounter = 0;
let leftCounter = 0;

function Images( name, src ) {
  this.name = name;
  this.src = `./img/${src}`;
  this.views = 0;
  Images.all.push(this);
}

Images.all = [];

for( let i = 0; i < imgArray.length; i++ ) {
  // console.log(imgArray[i].split( '.' ));
  new Images( imgArray[i].split( '.' )[0], imgArray[i] );
}

function render() {
  let leftIndex = randomNumber(0, imgArray.length - 1);
  let midIndex;
  let rightIndex;
  do {
    rightIndex = randomNumber(0, imgArray.length - 1);
  } while( leftIndex === rightIndex || midIndex === rightIndex );

  do {
    midIndex = randomNumber(0, imgArray.length - 1);
  } while( leftIndex === midIndex || midIndex === rightIndex );

  rightImage.src = Images.all[rightIndex].src;
  leftImage.src = Images.all[leftIndex].src;
  midImage.src = Images.all[midIndex].src;

  Images.all[rightIndex].views++;
  Images.all[leftIndex].views++;
  Images.all[midIndex].views++;

  console.log(Images.all);
}

function eventHandler(e) {
  // console.log(e.target.id);
  if((e.target.id === 'rightImage' || e.target.id === 'leftImage' || e.target.id === 'midImage' ) && counter < 10){
    render();
    console.log(counter);
    if (e.target.id === 'rightImage') {
      Images.all[rightCounter].clicker++;
    }

    else if (e.target.id === 'centerImage') {
      Images.all[midCounter].clicker++;
    }

    else {
      Images.all[leftCounter].clicker++;
    }
    counter++;
    render();
  }

}

imageSection.addEventListener('click', eventHandler);

render();

// console.log(Images.all);
// leftImage.setAttribute('src', Images.all[0].src)
// let index = randomNumber(0, imgArray.length - 1);
// rightImage.src = Images.all[index].src;
// console.log( leftImage, rightImage );

// Helper function
function randomNumber( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}

view.addEventListener('click', function dataView() {
  for (let i = 0; i < imgArray.length; i++) {
    let item = document.createElement('li');
    ord.appendChild(item);
    item.textContent = `${Images.all[i].name.split('.')[0]} had ${Images.all[i].clicker} votes, and was seen ${Images.all[i].views} times.`;
    imageSection.removeEventListener('click',eventHandler);
  }
});
