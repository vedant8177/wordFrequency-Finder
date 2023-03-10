
const outputBox = document.querySelector(".output");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const phraseInput = document.querySelector(".phraseInput").value;
    const output = wordFrequency(phraseInput);
    const outputString = createOutputString(output);
    outputBox.innerHTML = outputString;
    outputBox.style.display = "block";
});

const wordFrequency = (phrase) => {
  const frequency = {};
  const words = phrase.split(" ");
  for (word of words) {
    if (word in frequency) {
      frequency[word] += 1;
    } else {
      frequency[word] = 1;
    }
  }
  return frequency;
};

const createOutputString = (obj) => {
  let finalString = "";
  for (word in obj) {
      finalString += `<p class="outputText">${word}:${obj[word]}</p>`;
  }
  return finalString;
}

const resetDom = () => {
    document.querySelector(".phraseInput").value = "";
    outputBox.style.display = "none";
}