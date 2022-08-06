import './scss/estilos.scss';
import datos from './dias.json';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import zonaHoraria from 'dayjs/plugin/timezone';
import 'dayjs/locale/es-mx';

let cuerpo = document.getElementById('cuerpo');
let boton = document.getElementById('boton');

// Traducir fecha a español y configurar la zona horaria
dayjs.extend(utc);
dayjs.extend(zonaHoraria);
dayjs.locale('es-mx');
dayjs.tz.setDefault('America/Bogota');

function pintar() {
  for (let i = 0; i <= datos.length; i++) {
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
      const fechaJS = dayjs(datos[i].fecha);
      let fechaFormateada = fechaJS.format('MMMM D, YYYY');
      //fechaFormateada = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);

      fecha.innerText = `${fechaFormateada}`;
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
