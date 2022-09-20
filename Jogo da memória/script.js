const baralho = [
  { nome: "naruto", img: 'img/naruto.jpg' },
  { nome: "naruto", img: "img/naruto.jpg" },
  { nome: "sasuke", img: "img/sasuke.jpg" },
  { nome: "sasuke", img: "img/sasuke.jpg" },
  { nome: "sakura", img: "img/sakura.jpg" },
  { nome: "sakura", img: "img/sakura.jpg" },
  { nome: "kakashi", img: "img/kakashi.jpg" },
  { nome: "kakashi", img: "img/kakashi.jpg" },
  { nome: "itachi ", img: "img/itachi.jpg" },
  { nome: "itachi ", img: "img/itachi.jpg" },
  { nome: "minato", img: "img/minato.jpg" },
  { nome: "minato", img: "img/minato.jpg" },
  { nome: "madara", img: "img/madara.jpg" },
  { nome: "madara", img: "img/madara.jpg" },
  { nome: "jiraya", img: "img/jiraya.jpg" },
  { nome: "jiraya", img: "img/jiraya.jpg" },
 
 
  
];
const tabuleiro = document.querySelector("#tabuleiro");
const virados = document.querySelector("#virados");
const viradosEmbaralhados = document.querySelector("#viradosEmbaralhados");
const fimDeJogo = document.querySelector("#acertos");

let acerto;
var inicio;
storage = localStorage;

let selecionadas = [];

function reiniciar() {
  var btn = document.querySelector("#refresh");
  btn.addEventListener("click", function () {
    location.reload();
  });
}
function cartasOrdenadasDesviradas() {
  for (let i = 0; i < baralho.length; i++) {
    let carta_virada = document.createElement("img");
    carta_virada.id = i;
    carta_virada.name = baralho[i].nome;
    carta_virada.src = baralho[carta_virada.id].img;
    virados.append(carta_virada);
  }
}
function cartasEmbaralhadasDesviradas() {
  for (let i = 0; i < baralho.length; i++) {
    let carta_virada2 = document.createElement("img");
    carta_virada2.id = i;
    carta_virada2.name = baralho[i].nome;
    carta_virada2.src = baralho[carta_virada2.id].img;
    viradosEmbaralhados.append(carta_virada2);
  }
}
function criarTabuleiro() {
  inicio = Date.now();
  acerto = 0;
  fimDeJogo.innerText = acerto;
  document.getElementById("virados");
  virados.parentNode.removeChild(virados);
  cartasEmbaralhadasDesviradas(embaralhar());

  setTimeout(() => {
    document.getElementById("viradosEmbaralhados");
    viradosEmbaralhados.parentNode.removeChild(viradosEmbaralhados);

    for (let i = 0; i < baralho.length; i++) {
      let carta = document.createElement("img");
      carta.id = i;
      carta.name = baralho[i].nome;
      carta.src = "img/cr.jpg";
      carta.addEventListener("click", selecionarCarta);
      tabuleiro.appendChild(carta);
    }
    $(document).ready(function () {
      $("img#0").click(function () {
        $("img#0").slideUp();
        $("img#0").fadeOut();
        $("img#0").fadeIn();
        $("img#0").slideDown();
      });
      $("img#1").click(function () {
        $("img#1").slideUp();
        $("img#1").fadeOut();
        $("img#1").fadeIn();
        $("img#1").slideDown();
      });
      $("img#2").click(function () {
        $("img#2").slideUp();
        $("img#2").fadeOut();
        $("img#2").fadeIn();
        $("img#2").slideDown();
      });
      $("img#3").click(function () {
        $("img#3").slideUp();
        $("img#3").fadeOut();
        $("img#3").fadeIn();
        $("img#3").slideDown();
      });
      $("img#4").click(function () {
        $("img#4").slideUp();
        $("img#4").fadeOut();
        $("img#4").fadeIn();
        $("img#4").slideDown();
      });
      $("img#5").click(function () {
        $("img#5").slideUp();
        $("img#5").fadeOut();
        $("img#5").fadeIn();
        $("img#5").slideDown();
      });
      $("img#6").click(function () {
        $("img#6").slideUp();
        $("img#6").fadeOut();
        $("img#6").fadeIn();
        $("img#6").slideDown();
      });
      $("img#7").click(function () {
        $("img#7").slideUp();
        $("img#7").fadeOut();
        $("img#7").fadeIn();
        $("img#7").slideDown();
      });
      $("img#8").click(function () {
        $("img#8").slideUp();
        $("img#8").fadeOut();
        $("img#8").fadeIn();
        $("img#8").slideDown();
      });
      $("img#9").click(function () {
        $("img#9").slideUp();
        $("img#9").fadeOut();
        $("img#9").fadeIn();
        $("img#9").slideDown();
      });
      $("img#10").click(function () {
        $("img#10").slideUp();
        $("img#10").fadeOut();
        $("img#10").fadeIn();
        $("img#10").slideDown();
      });
      $("img#11").click(function () {
        $("img#11").slideUp();
        $("img#11").fadeOut();
        $("img#11").fadeIn();
        $("img#11").slideDown();
      });
      $("img#12").click(function () {
        $("img#12").slideUp();
        $("img#12").fadeOut();
        $("img#12").fadeIn();
        $("img#12").slideDown();
      });   
      $("img#13").click(function () {
        $("img#13").slideUp();
        $("img#13").fadeOut();
        $("img#13").fadeIn();
        $("img#13").slideDown();
      }); 
      $("img#14").click(function () {
        $("img#14").slideUp();
        $("img#14").fadeOut();
        $("img#14").fadeIn();
        $("img#14").slideDown();
      });
      $("img#15").click(function () {
        $("img#15").slideUp();
        $("img#15").fadeOut();
        $("img#15").fadeIn();
        $("img#15").slideDown();
      });
    });
  }, 3000);
}
function selecionarCarta(){
  let carta = this;
  carta.src = baralho[carta.id].img;
  selecionadas.push(carta);

  for (let i = 0; i < baralho.length; i++) {
    let carta_virada = document.createElement("img");
    carta_virada.id = i;
    carta_virada.name = baralho[i].nome;
    carta_virada.src = baralho[carta_virada.id].img;
}
  if (selecionadas.length == 3) {
    let carta3 = selecionadas[2];
    carta3.src = "img/cr.jpg";
  }

  if (selecionadas.length == 2) {
    setTimeout(() => {
      let carta1 = selecionadas[0];
      let carta2 = selecionadas[1];

      if (carta1.name == carta2.name) {
        carta1.src = baralho[carta1.id].img;
        carta2.src = baralho[carta2.id].img;
        carta1.removeEventListener("click", selecionarCarta);
        carta2.removeEventListener("click", selecionarCarta);

        acerto++;
        fimDeJogo.innerText = acerto;
      } else {
        $(document).ready(function () {
          $(carta1).slideUp();
          $(carta1).fadeOut();
          $(carta1).fadeIn();
          $(carta1).slideDown();

          $(carta2).slideUp();
          $(carta2).fadeOut();
          $(carta2).fadeIn();
          $(carta2).slideDown();
        });
        carta1.src = "img/cr.jpg";
        carta2.src = "img/cr.jpg";
      }
      if (acerto == baralho.length / 2) {
        tempo_decorrido();
        document.location.reload(true);
      }

      selecionadas = []; 
    }, 1500);
  }
}
function embaralhar() {
  baralho.sort(() => {
    return 0.5 - Math.random();
  });
}
function tempo_decorrido() {
  var fim = Date.now();
  var tempo = Math.round((fim - inicio) / 1000);
  if (localStorage.getItem("MaiorTempo") == null) {
    localStorage.setItem("MaiorTempo", tempo);
  }

  alert("fim de jogo, o tempo foi de: " + tempo + " segundos");
  var valor = JSON.parse(localStorage.getItem("MaiorTempo"));
  if (tempo < valor) {
    localStorage.setItem("MaiorTempo", tempo);
  }
}
function time() {
  if (localStorage.getItem("MaiorTempo") == null)
  alert("Ainda não há um tempo salvo");
  while (localStorage.getItem("MaiorTempo") !== null) {
    alert(
      "O melhor tempo foi de: " +
        JSON.parse(localStorage.getItem("MaiorTempo")) +
        " segundos"
    );
    break;
  }
}
