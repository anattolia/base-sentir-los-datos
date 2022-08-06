import './scss/estilos.scss';
import datos from './dias.json';

let cuerpo = document.getElementById('cuerpo');
let boton = document.getElementById('boton');

function pintar() {
  for (let i = 0; i <= 42; i++) {
    console.log(datos[i].asesinatos);
    let dia = document.createElement('div');
    let negro = document.createElement('div');
    let fecha = document.createElement('div');
    let nombre = document.createElement('div');

    dia.classList.add('contenedorDia');
    negro.classList.add('negro');
    fecha.classList.add('fecha');
    nombre.classList.add('nombres');
    /*  if (lista[i]) {
      negro.innerText = lista[i].nombre;
    } else {
      negro.innerText = '10 de enero, 2022: Nilson Antonio Velásquez Gil';
    } */
    if (datos[i].asesinatos !== 0) {
      fecha.innerText = `${datos[i].fecha}`;
      negro.style.width = `${datos[i].asesinatos * 1.5}em`;
      negro.style.height = negro.style.width;

      // if (datos[i].asesinatos > 1) {
      let nombres = '';
      datos[i].nombres.forEach((n) => {
        nombres += `${n} <br> `;
      });
      nombre.innerHTML = nombres;
    } else {
      negro.style.height = '15px';
    }
    dia.appendChild(fecha);
    dia.appendChild(negro);
    dia.appendChild(nombre);

    cuerpo.appendChild(dia);
  }
}

boton.addEventListener('click', pintar);
