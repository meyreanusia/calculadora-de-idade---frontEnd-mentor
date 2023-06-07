let arabicoeRomanos = [
  {numero: 1000, romanos: "M"},
  {numero: 900, romanos: "CM"},
  {numero: 500, romanos: "D"},
  {numero: 400, romanos: "CD"},
  {numero: 100, romanos: "C"},
  {numero: 90, romanos: "XC"},
  {numero: 50, romanos: "L"},
  {numero: 40, romanos: "XL"},
  {numero: 10, romanos: "X"},
  {numero: 9, romanos: "IX"},
  {numero: 5, romanos: "V"},
  {numero: 4, romanos: "IV"},
  {numero: 1, romanos: "I"},
]

function converterRomanos(numeroArabico){
  let valorAtual = ""

  for(let i = 0; i < arabicoeRomanos.length; i++){
    if(arabicoeRomanos[i].numero <= numeroArabico){
      numeroArabico = numeroArabico - arabicoeRomanos[i].numero
      valorAtual = valorAtual + arabicoeRomanos[i].romanos;
      i--;
    }
  }
  return valorAtual
}

const inputNumber = document.querySelector("#number");
let botaoEnviar = document.querySelector(".button-submit");
let mostrarResultado = document.querySelector(".result-num h2")

botaoEnviar.addEventListener("click", function (event) {
  event.preventDefault();
  
  let valorRomano = converterRomanos(inputNumber.value);
  mostrarResultado.textContent = valorRomano;
});


// function converterArabicos(numeroRomano){
//   let valorAtual = 0
//   for(let i = 0; i < arabicoeRomanos.length; i++){
//     if(arabicoeRomanos[i].romanos == numeroRomano ){
//       numeroRomano = numeroRomano - arabicoeRomanos[i].romanos;
//       valorAtual = valorAtual + arabicoeRomanos[i].numero
//     }
//   }
//   console.log(valorAtual);
// }


// converterRomanos(24);