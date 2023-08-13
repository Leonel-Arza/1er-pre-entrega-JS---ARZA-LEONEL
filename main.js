// Cuota mensual 
function calcularCuotaMensual(monto, tasaInteres, plazo) {
  const tasaMensual = tasaInteres / 100 / 12;
  const factor = calcularFactor(plazo, tasaMensual);
  const cuota = (monto * tasaMensual * factor) / (factor - 1);
  return cuota;
}

// Calcular el factor del denominador
function calcularFactor(plazo, tasaMensual) {
  let factor = 1;
  for (let i = 0; i < plazo; i++) {
    factor *= (1 + tasaMensual);
  }
  return factor;
}

// Función principal
function simuladorPrestamo() {
  alert("Bienvenido al simulador de préstamo personal");

  const montoPrestamo = parseFloat(prompt("Ingrese el monto que desea solicitar:"));
  const tasaInteresAnual = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
  const plazoMeses = parseInt(prompt("Ingrese el plazo en meses:"));

  if (isNaN(montoPrestamo) || isNaN(tasaInteresAnual) || isNaN(plazoMeses) || plazoMeses <= 0) {
    console.log("Por favor, ingresar un valor numérico correcto.");
    return;
  }

  const cuotaMensual = calcularCuotaMensual(montoPrestamo, tasaInteresAnual, plazoMeses);

  console.log("Monto del préstamo: $" + montoPrestamo);
  console.log("Tasa de interés anual: " + tasaInteresAnual + "%");
  console.log("Plazo en meses: " + plazoMeses);
  console.log("Cuota mensual: $" + cuotaMensual);

  alert("Cuota mensual: $" + cuotaMensual);
}


simuladorPrestamo();

