let authorQoute = document.querySelector(".author__qoute");
let displayQoute = document.querySelector(".display__qoute");
let generateBtn = document.querySelector(".generate__qoute");
let startBtn = document.querySelector(".start__qoute");
let stopBtn = document.querySelector(".stop__qoute");
let autoStatus = document.querySelector(".auto__status");

let intervaild;
document.addEventListener("DOMContentLoaded", function () {
  generateQuote();
});
generateBtn.onclick = generateQuote;
startBtn.onclick = startAuto;
stopBtn.onclick = stopAuto;
async function getQuotes() {
  const reponese = await fetch("https://type.fit/api/quotes");
  const data = await reponese.json();
  return data;
}
async function generateQuote() {
  const quotes = await getQuotes();
  const qoute = quotes[Math.floor(Math.random() * quotes.length)];
  displayQoute.innerHTML = qoute.text;
  authorQoute.innerHTML = qoute.author;
}
function startAuto() {
  intervaild = setInterval(generateQuote, 2000);
  autoStatus.innerHTML = "Auto : ON";
}

function stopAuto() {
  clearInterval(intervaild);
  autoStatus.innerHTML = "";
}
