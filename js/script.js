"use strict";

const qTextToQuote = document.querySelector("#quote");
const qQuotedText = document.querySelector("#quoted");
const qQuoteNum = document.querySelector("#quote-num");
const clipboard = new ClipboardJS("#quoted");



function quoteText(text) {
  // No-op if there's no text
  if (text.trim() === "") return "";

  const numOfQuotes = Number.parseInt(qQuoteNum.value, 10);
  text = text.padStart(text.length + numOfQuotes, '"');
  text = text.padEnd(text.length + numOfQuotes, '"');
  return text;
}


function setText(text) {
  qQuotedText.textContent = text;
  qQuotedText.dataset.clipboardText = text;
}

qTextToQuote.addEventListener("keyup", function() {
  setText(quoteText(this.value));
});

qQuoteNum.addEventListener("change", function() {
  setText(quoteText(qTextToQuote.value));
});

window.onload = function() {
  setText(quoteText(qTextToQuote.value));
}
