const cekPalindrom = (text) => {
  if (typeof text !== "string") {
    return "isi inputan harus bertipe string";
  }
  text = text.toLocaleLowerCase();
  let uji = "";
  for (let i = text.length - 1; i >= 0; i--) {
    uji = uji + text[i];
  }
  if (text === uji) {
    return "palindrom";
  } else {
    return "selesai";
  }
};

const text = "Malam";
console.log(cekPalindrom(text));
console.log(cekPalindrom(12));
