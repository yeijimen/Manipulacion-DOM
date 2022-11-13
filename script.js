// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('parrafito')
// const pid = document.getElementById('pid');
// const input = document.querySelector('input');

// // console.log(input.value);

// // console.log({
// //     h1,
// //     p,
// //     parrafito,
// //     pid,
// //     input,
// // });
// //h1.innerText = "Nuevo titulo <br> salto" //convierte todo a texto
// //h1.innerHTML = "nuevo titulo <br> hola"; //interpreta codigo Html y crea nuevo titulo
// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'rojo');
// h1.classList.add('rojo');
// h1.classList.remove('verde');
// // h1.classList.toggle('rojo');
// // h1.classList.contains('verde');

// //input.value = "456";

// const img = document.createElement('img');
// img.setAttribute('src', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=pexels-pixabay-461198.jpg&fm=jpg&_gl=1*1uvcrjy*_ga*MTg4MjMwOTM0MC4xNjY1NTQyMTg4*_ga_8JE65Q40S6*MTY2Nzc4OTIxOS4yLjEuMTY2Nzc4OTIzMC4wLjAuMA..');
// console.log(img);
// img.setAttribute('width', '360px');
// pid.innerHTML = '';
// pid.append(img);

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnclick);

function btnOnclick() {
   const sumainputs = Number(input1.value) + Number(input2.value);
   pResult.innerText = "Resultado: " + sumainputs;
}
// form.addEventListener('submit', sumarinputs);

// function sumarinputs(event) {
//     // console.log({event});
//     event.preventDefault();
//     const sumainputs = Number(input1.value) + Number(input2.value);
//     pResult.innerText = "Resultado: " + sumainputs;
// }






