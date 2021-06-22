var productImg = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg']
var leftProImage = document.querySelector('#pro1img');
var rightProImage = document.querySelector('#pro2img');
var centerProImage = document.querySelector('#pro3img');
var groupImageSection = document.getElementById('all_Pro');
var product = [];
var noRepeat = [];
var totalClicks = 1; // to stop the prossess after 25 click

function Products(name) {
    this.name = name;
    this.urlImg = `img/${this.name}`;
    this.totalClickspro = 0;
    this.totalCountViews = 0;
    product.push(this); //this its refer to the object that im created
}

//Random image:----------->
function randomImg() {
    var leftProRandom = product[randomNumber(0, product.length - 1)]
    var rightPro2Random = product[randomNumber(0, product.length - 1)]
    var centerPro3Random = product[randomNumber(0, product.length - 1)]
    leftProImage.setAttribute('src', leftProRandom.urlImg);
    leftProImage.setAttribute('alt', leftProRandom.name);
    rightProImage.setAttribute('src', rightPro2Random.urlImg);
    rightProImage.setAttribute('alt', rightPro2Random.name);
    centerProImage.setAttribute('src', centerPro3Random.urlImg);
    centerProImage.setAttribute('alt', centerPro3Random.name);
    while ((leftProRandom.name === rightPro2Random.name) ||
        (leftProRandom.name === centerPro3Random.name) ||
        (centerPro3Random.name === rightPro2Random.name) ||
        (noRepeat.includes(leftProRandom.name)) ||
        (noRepeat.includes(rightPro2Random.name)) ||
        (noRepeat.includes(centerPro3Random.name))) {
        //pick another random number
        var leftProRandom = product[randomNumber(0, product.length - 1)]
        var rightPro2Random = product[randomNumber(0, product.length - 1)]
        var centerPro3Random = product[randomNumber(0, product.length - 1)]
        leftProImage.setAttribute('src', leftProRandom.urlImg);
        leftProImage.setAttribute('alt', leftProRandom.name);
        rightProImage.setAttribute('src', rightPro2Random.urlImg);
        rightProImage.setAttribute('alt', rightPro2Random.name);
        centerProImage.setAttribute('src', centerPro3Random.urlImg);
        centerProImage.setAttribute('alt', centerPro3Random.name);
    }
    noRepeat = [];
    noRepeat.push(leftProRandom.name, rightPro2Random.name, centerPro3Random.name);
    leftProRandom.totalCountViews += 1;
    rightPro2Random.totalCountViews += 1;
    centerPro3Random.totalCountViews += 1;
    setItem()
}

for (var i = 0; i < productImg.length; i++) {
    new Products(productImg[i]);
}

getItem();
randomImg();

function clickImage(e) {
    totalClicks = totalClicks + 1;

    for (var i = 0; i < product.length; i++) {
        if (product[i].name === e.target.alt) {
            product[i].totalClickspro += 1;
        }
    }

    if (totalClicks == 26) {
        groupImageSection.removeEventListener('click', clickImage)
        leftProImage.remove()
        rightProImage.remove()
        centerProImage.remove()
        console.log('finished');
        renderFinsh()
        alert('finished')
        renderChartResults()
        return;
    };

    if ((e.target.id === 'pro1img') || (e.target.id === 'pro2img') || (e.target.id === 'pro3img')) {
        randomImg();
    }
}

groupImageSection.addEventListener('click', clickImage);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderFinsh() {
    var list = document.getElementById("list");
    var ulel = document.createElement('ul');
    list.appendChild(ulel);
    for (var i = 0; i < product.length; i++) {
        var liel = document.createElement('li');
        liel.textContent = `${product[i].name} had ${product[i].totalClickspro} votes and was shown ${product[i].totalCountViews} times`
        ulel.appendChild(liel)
    }
}


function renderChartResults() {
    var proNames = [];
    var proClicks = [];
    var proViews = [];
    for (var i = 0; i < product.length; i++) {
        var pronames = product[i].name;
        proNames.push(pronames);
        var pronlicks = product[i].totalClickspro;
        proClicks.push(pronlicks);
        var proviews = product[i].totalCountViews;
        proViews.push(proviews);
    }
    console.log(proNames)
    console.log(proClicks)
    console.log(proViews)
    var ctx = document.getElementById('myChart').getContext('2d');
    //chart render:----------->
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: proNames,
            datasets: [{
                label: '# of Votes',
                data: proClicks,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 206, 86, 0.7)'
                ],
            }, {
                label: '# of Views',
                data: proViews,
                backgroundColor: [
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)'

                ],
                borderColor: [
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(153, 102, 255, 0.7)'

                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

//update drinks
function setItem() {
    var SetPro = JSON.stringify(product);
    localStorage.setItem('proDuct1', SetPro);
}

//get all drinks
function getItem() {
    var proDuct1 = localStorage.getItem('proDuct1');
    if (JSON.parse(proDuct1) != null) {
        product = JSON.parse(proDuct1)
    }
}
// Add an event listener to the submit button
groupImageSection.addEventListener('click', clickImage);