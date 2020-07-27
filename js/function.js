// colocando a string para soma '+'
function soma(){
  var oper = document.getElementById('oper');
  oper.innerHTML = '+';
};
// colocando a string para subtração '-'
function sub(){
  var oper = document.getElementById('oper');
  oper.innerHTML = '-';
};
// colocando a string para divisão'/'
function div(){
  var oper = document.getElementById('oper');
  oper.innerHTML = '/';
};
// colocando a string para multiplicação '*'
function mult(){
  var oper = document.getElementById('oper');
  oper.innerHTML = '*';
};
// concolando a string para percentagem '%'
function percent() {
  var oper =  document.getElementById('oper');
  oper.innerHTML = '% de';
}

// colocando a integração para no botão igual, função responsável por resolver a operação.
function igual() {
  var num1 = document.getElementById('numero1').value;
  var num2 = document.getElementById('numero2').value;
  var opera = document.getElementById('oper').innerHTML;
  var resultado = document.getElementById('resultado');

  const numr1 = parseFloat(num1);
  const numr2 = parseFloat(num2);
  
  // swirch case responsável por comparar a string e realizar a função conrrespondente.
  switch (opera) {
    case '+':
      var total = numr1 + numr2;
      return resultado.innerHTML = total;
    case '-':
      var total = numr1 - numr2;
      return resultado.innerHTML = total;
    case '/':
      var total = numr1 / numr2;
      return resultado.innerHTML = total;
    case '*':
      var total = numr1 * numr2;
      return resultado.innerHTML = total;
    case '% de':
      var total = ((numr2 * numr1) / 100);
      return resultado.innerHTML = total;
  
  };

};

//função raiz

function raiz() {
  var resultado = document.getElementById('resultado');
  var numr1 = parseFloat(resultado.innerHTML);
  var resultadoRaiz =  Math.pow(numr1,(0.5));
  resultado.innerHTML = resultadoRaiz;
};


