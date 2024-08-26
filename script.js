function converttexttocode(text) {
  const quytac = {
    A: 4,
    B: 13,
    C: 6,
    D: 12,
    E: 3,
    F: "F",
    G: 9,
    H: 76,
    I: 1,
    J: "J",
    K: 14,
    L: "L",
    M: 111,
    N: 11,
    O: 0,
    P: 10,
    Q: "01",
    R: 92,
    S: 5,
    T: 7,
    U: 12,
    V: 22,
    W: "W",
    X: 26,
    Y: 29,
    Z: "Z"
  };

  let encodedtext = "";
  for (let i = 0; i < text.length; i++) {
    const character = text[i].toUpperCase();

    if (quytac[character] !== undefined) {
      encodedtext += quytac[character];
    } else {
      encodedtext += character;
    }
  }

  return encodedtext;
}

function handleinput() {
  const inputText = document.getElementById("input-text").value;
  const result = converttexttocode(inputText);
  const resultNumberElement = document.getElementById("result-number");
  resultNumberElement.style.color = "";
  resultNumberElement.value = result;
  resultNumberElement.addEventListener("click", function() {
    resultNumberElement.style.color = "green";
    resultNumberElement.value = "Copied";
    navigator.clipboard.writeText(result)
      .then(() => {
      })
      .catch(err => {
        console.error("Error:", err);
      });
  });
}
const audio = document.getElementById("myAudio");
document.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  }
});
