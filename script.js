let btn = document.querySelector('button');

btn.onclick = function click(){
    let Getrandomcolor = getrandomcolor();
    btn.style.backgroundColor = Getrandomcolor;
    btn.style.color = 'white';
};

btn.addEventListener('click', function (){
    let h3 = document.querySelector('h3');
    let Getrandomcolor = getrandomcolor();
    h3.innerText = Getrandomcolor;

    let div = document.querySelector('div');
    div.style.backgroundColor = Getrandomcolor;

    console.log('color updated')
});

function getrandomcolor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green}, ${blue})`;
    return color;
}