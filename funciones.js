function suma(numero1, numero2, numero3) {
  let resultado = numero1 + numero2 + numero3;
  return resultado;
}

let r = suma(5, 45, 47);
document.getElementById("js").innerText = r;

let sumas = (numero4, numero5) => numero4 + numero5;

let x = sumas(5,80)

document.getElementById("sum").innerText = x;

// funcion autoinvocada
// 
(function () {
  alert("Helo world");
})();
