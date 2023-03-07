// let meses = [
//   "Enero",
//   "Febrero",
//   "Marzo",
//   "Abril",
//   "Mayo",
//   "Junio",
//   "Julio",
//   "Agosto",
//   "Septiembre",
//   "Octubre",
//   "Noviembre",
//   "Diciembre",
// ];

// for (let i = 0; i < meses.length; i++) {
//   console.log(meses[i]);
// }

// let numero = 0;
// while (numero <= 10) {
//   console.log(numero);
//   numero++;
// }

// do {
//   console.log(10)
//   numero++
// } while (numero <= 10);

let amigos = ["Frank", "Diego", "Lisandro", "Jhoel"];

for(amigo in amigos) {
  console.log(amigos[amigo]);
  if (amigos[amigo] == "Lisandro") {
    break;
  }
}
