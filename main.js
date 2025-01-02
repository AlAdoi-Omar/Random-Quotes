let authorQoute = document.querySelector(".author__qoute");
let displayQoute = document.querySelector(".display__qoute");
let generateBtn = document.querySelector(".generate__qoute");
let startBtn = document.querySelector(".start__qoute");
let stopBtn = document.querySelector(".stop__qoute");
let autoStatus = document.querySelector(".auto__status");
let id__qoute = document.querySelector('.id__qoute');

let intervaild;
document.addEventListener("DOMContentLoaded", function () {
  generateQuote();
});
generateBtn.onclick = generateQuote;
startBtn.onclick = startAuto;
stopBtn.onclick = stopAuto;
async function getQuotes() {
  const reponese = await fetch('https://dummyjson.com/quotes');
  const data = await reponese.json();
  return data.quotes;

}
async function generateQuote() {
  const quotes = await getQuotes();
  const qoute = quotes[Math.floor(Math.random() * quotes.length)];
  id__qoute.innerHTML = qoute.id;
  displayQoute.innerHTML = `"${qoute.quote}"`;
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
