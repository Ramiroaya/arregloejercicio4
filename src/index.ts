let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");

btnEnviar1.addEventListener("click", () => {
  //let tamañoArreglo = Number(prompt("Ingrese el tamaño del arreglo"));
  let arreglo1: string[] = Array(2);
  let arreglo2: number[] = Array(3);
  let indice: number;

  for (indice = 0; indice < arreglo1.length; indice++) {
    arreglo1[indice] = prompt("Ingrese el nombre en el indice" + indice);
  }
  for (indice = 0; indice < arreglo1.length; indice++) {
    console.log(
      "El Nombre en el indice   " + indice + "  es:  " + arreglo1[indice]
    );
  }
  for (indice = 0; indice < arreglo2.length; indice++) {
    arreglo2[indice] = Number(
      prompt("Ingrese el numero en el indice" + indice)
    );
  }
  for (indice = 0; indice < arreglo2.length; indice++) {
    console.log(
      "El numero en el indice  " + indice + "  es:  " + arreglo2[indice]
    );
  }
});
