const palavras = ['abacaxi', 'uva', 'pera', 'banana', 'jaboticaba'];
const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
const letrasCorretas = [];
const letrasChutadas = [];
let vidas = 6;
let palavra = ['_______'];
let estado = '';

class Forca {

  chutar(letra) {
    console.clear();
    letra = letra.toLowerCase();

    validarLetra(letra, palavraSecreta);
    validarPalavra(palavraSecreta);
  }

  buscarEstado() {
    aForca();
    checarEstado();

    return estado;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas, // Deve conter todas as letras chutadas
      vidas, // Quantidade de vidas restantes
      palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

function validarLetra(letra, palavraSecreta) {

  if (letra.length > 1) {
    return;
  }
  if (letrasChutadas.includes(letra)) {
    console.log('letra já foi chutada.');
  } else {
    if (palavraSecreta.includes(letra)) {
      letrasCorretas.push(letra);
      letrasChutadas.push(letra);
    } else {
      letrasChutadas.push(letra);
      vidas--;
      console.log('letra incorreta.');
    }
  }
}

function validarPalavra(palavraSecreta) {
  palavra = []

  palavraSecreta.split('').forEach(letra => {
    if (letrasCorretas.includes(letra)) {
      palavra.push(letra);
    } else {
      palavra.push('_');
    }
  });
}

function checarEstado() {
  estado = 'aguardando chute';

  if (vidas === 0) {
    estado = 'perdeu';
    perdeu();
  }
  if (palavraSecreta === palavra.join('')) {
    estado = 'ganhou';
    ganhou();
  }
}

function aForca() {

  console.log("  _______     ");
  console.log(" |/      |    ");

  if (vidas == 5) {
    console.log(" |      (_)   ");
    console.log(" |       |    ");
    console.log(" |            ");
    console.log(" |            ");
  }
  if (vidas == 4) {
    console.log(" |      (_)   ");
    console.log(" |       |/   ");
    console.log(" |            ");
    console.log(" |            ");
  }
  if (vidas == 3) {
    console.log(" |      (_)   ");
    console.log(" |      /|/   ");
    console.log(" |            ");
    console.log(" |            ");
  }
  if (vidas == 2) {
    console.log(" |      (_)   ");
    console.log(" |      /|/   ");
    console.log(" |       |    ");
    console.log(" |            ");
  }
  if (vidas == 1) {
    console.log(" |      (_)   ");
    console.log(" |      /|/   ");
    console.log(" |       |    ");
    console.log(" |      /     ");
  }
 
  console.log(" |            ");
  console.log("_|___         ");
}

function ganhou() {
  console.clear();
  console.log("       ___________      ");
  console.log("      '._==_==_=_.'     ");
  console.log("      .-:      /-.      ");
  console.log("     | (|:.     |) |    ");
  console.log("      '-|:.     |-'     ");
  console.log("        | ::.    /      ");
  console.log("         '::. .'        ");
  console.log("           ) (          ");
  console.log("         _.' '._        ");
  console.log("        '-------'       ");
}

function perdeu() {
  console.clear();
  console.log("  _______     ");
  console.log(" |/      |    ");
  console.log(" |      (_)   ");
  console.log(" |      /|/   ");
  console.log(" |       |    ");
  console.log(" |      //    ");
  console.log(" |            ");
  console.log("_|___         ");

  console.log('Puxa, você foi enforcado!');
  console.log(`A palavra era ${palavraSecreta}`);
}

module.exports = Forca;
