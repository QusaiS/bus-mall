
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



let imageSection = document.getElementById('imageSection');
let leftImage = document.getElementById( 'leftImage' );
let midImage = document.getElementById( 'midImage' );
let rightImage = document.getElementById( 'rightImage' );
let list = document.getElementById('ord');
let view = document.getElementById('show');

let pImg = [];
let counter = 0;
let rightCounter = 0;
let midCounter = 0;
let leftCounter = 0;

function Images( name, src ) {
  this.name = name;
  this.src = `./img/${src}`;
  this.views = 0;
  this.clicker = 0;
  Images.all.push(this);
}

Images.all = [];

for( let i = 0; i < imgArray.length; i++ ) {
  // console.log(imgArray[i].split( '.' ));
  new Images( imgArray[i].split( '.' )[0], imgArray[i] );
}

pImg [0] = -1 ;
pImg [1] = -1;
pImg [2] = -1 ;







function render() {
  console.log(JSON.stringify(pImg));
  let leftIndex ;
  let midIndex;
  let rightIndex;
  do{
    leftIndex = randomNumber(0, imgArray.length - 1);
  }while ( pImg.includes(leftIndex , 0 ) );

  do {
    rightIndex = randomNumber(0, imgArray.length - 1);

  } while( leftIndex === rightIndex || pImg.includes(rightIndex , 0 ) );

  do {
    midIndex = randomNumber(0, imgArray.length - 1);

  } while( leftIndex === midIndex || midIndex === rightIndex || pImg.includes(midIndex , 0 ));

  pImg [0] = leftIndex ;
  pImg [1] = rightIndex;
  pImg [2] = midIndex ;

  // console.log(JSON.stringify(pImg));

  rightImage.src = Images.all[rightIndex].src;
  leftImage.src = Images.all[leftIndex].src;
  midImage.src = Images.all[midIndex].src;

  Images.all[rightIndex].views++;
  Images.all[leftIndex].views++;
  Images.all[midIndex].views++;
  drawChart ();

  console.log(Images.all);
}


function eventHandler(e) {
  // console.log(e.target.id);
  if((e.target.id === 'rightImage' || e.target.id === 'leftImage' || e.target.id === 'midImage' )
  && counter < 26){
    render();
    console.log(counter);
    if (e.target.id === 'rightImage') {
      Images.all[rightCounter].clicker++;
    }

    if (e.target.id === 'midImage') {
      Images.all[midCounter].clicker++;
    }

    if ( e.target.id === 'leftImage') { Images.all[leftCounter].clicker=Images.all[leftCounter].clicker+1;
    }
    counter++;
    render();
  }

}

imageSection.addEventListener('click', eventHandler);

render();



function randomNumber( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}

view.addEventListener('click', function dataView() {
  document.getElementById('ord').innerHTML='';
  for (let i = 0; i < imgArray.length; i++) {
    let item = document.createElement('li');
    list.appendChild(item);
    item.textContent = `${Images.all[i].name.split('.')[0]} had ${Images.all[i].clicker} votes, and was seen ${Images.all[i].views} times.`;
    imageSection.removeEventListener('click',eventHandler);
  }
  imageSection.addEventListener('click', eventHandler);
});



// function drawChart (){
  
//   let arrName=[];
//   for(var i=0;i<imgArray.length;i++){
//     // arrName[i].push(imgArray[i]);
//     console.log(imgArray[i]);
//   }

function drawChart() {
  document.getElementById('myChart').innerHTML = "";
  document.getElementById('dChart').innerHTML ='<canvas id="myChart" width="350" height="99" ></canvas>';
  let name = [];
  let view = [];

  for(let i = 0; i < Images.all.length; i++) {
    name.push(Images.all[i].name);
    view.push(Images.all[i].views);
  }
  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: name,
      datasets: [{
        label: '# of Votes',
        data: view,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 10
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
drawChart ();


console.log(drawChart)