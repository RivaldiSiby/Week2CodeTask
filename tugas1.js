const cekPalindrom = (text) => {
  if (typeof text !== "string") {
    return "isi inputan harus bertipe string";
  }
  text = text.toLocaleLowerCase();
  let uji = "";
  // melakukan perulangan untuk membalik kata
  for (let i = text.length - 1; i >= 0; i--) {
    uji = uji + text[i];
  }
  // mengecek kta yang dubah
  if (text === uji) {
    return "palindrom";
  } else {
    return "bukan palindrom";
  }
};

const text = "Malam";
const text2 = "Bukan";
console.log(cekPalindrom(text));
console.log(cekPalindrom(text2));
console.log(cekPalindrom(12));
