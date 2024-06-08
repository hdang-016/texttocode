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
    K: 14,
    N: 11,
    M: 111,
    U: 12,
    O: 0,
    P: 10,
    Q: "01",
    R: 92,
    S: 5,
    T: 7,
    V: 22,
    X: 26,
    Y: 29,
    W: "W"
  };
// thuật toán có quy tắc giống cái code C++ A counter lớp 8 trước m gửi - nó bắt đầu từ i = 0 rồi quét từng chữ
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
  document.getElementById("result-number").value = result;
//click to copy (lướt W3schools để xem)
    const resultNumberElement = document.getElementById("result-number");
    resultNumberElement.addEventListener("click", function() {
        navigator.clipboard.writeText(result);
        alert("Đã sao chép vào bộ nhớ tạm!");
    });
  }