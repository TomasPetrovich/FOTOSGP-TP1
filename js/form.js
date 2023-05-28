function limpiar() {
    document.getElementById('my-form').reset();
    document.getElementById('total').innerHTML = 'Total';
    document.getElementById('total').style.color = 'white';
    document.getElementById('total').style.backgroundColor = 'rbg(43,48,53)';
  }
  
  function calcular() {

    let nro1 = 0;
    let tamaño = '';
    let total = 0;
  
  
    nro1 = document.getElementById('cantidad').value;
   
  
    tamaño = document.getElementById('selectTam').value;
  
  
    console.log("El número 1 es: " + nro1);
    console.log("El tamaño es: " + tamaño);
  
    if(tamaño == 'chico') {
      total = (nro1*2000)-((nro1*2000)*10)/100;
    }
  
    if(tamaño == 'mediano') {
      total = (nro1*3500)-((nro1*3500)*20)/100;
    }
  
    if(tamaño == 'grande') {
      total = (nro1*5000)-((nro1*5000)*30)/100;
    }
  
    let act = document.getElementById('total');
    act.innerHTML = 'El total a pagar es de: ' + total;
    act.style.color = 'white';
    act.style.backgroundColor = 'darkgreen';
  
    console.log("El total es: " + total);
  
  }