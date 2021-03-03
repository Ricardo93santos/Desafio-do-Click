function mudarPosicao(){
  var bt = document.querySelector("#botao");
  bt.style.position="absolute";
  bt.style.left=Math.random()*900+"px";
  bt.style.top=Math.random()*580+"px";
}
function clicado(){
  var bt = document.querySelector("#botao");
  alert("Parabén, você conseguiu Clicar!");
}
function addEventos(){
  var bt = document.querySelector("#botao");
  bt.addEventListener("mouseover", mudarPosicao);
  bt.addEventListener("click", clicado);
}
window.addEventListener("load", addEventos);