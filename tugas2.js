const reverseWords = (text) => {
  if (typeof text !== "string") {
    return "isi inputan  harus bertipe string";
  }

  let kalimat = [];
  let penampung = "";

  // melooping untuk menampung isi penampung ke dalam array kalimat
  for (let i = 0; i < text.length; i++) {
    // cek ketika karakter berisi white space hentikan penampungan karakter di array penampung
    if (text[i] === " ") {
      if (penampung !== "") {
        kalimat[kalimat.length] = penampung;
      }
      penampung = "";
    } else {
      // memasukan isi string perkarakter
      penampung += text[i];
    }
  }
  // ketika ada yang belum dimasukan ke array kalimat dimasukan disini
  if (penampung !== "") {
    kalimat[kalimat.length] = penampung;
  }

  let hasil = "";
  // loopping untuk membalikan array kalimat dan memasukannya ke variable hasil
  for (let i = kalimat.length - 1; i >= 0; i--) {
    hasil += kalimat[i] + " ";
  }
  return hasil;
};

const text = "    reverse    coba    uji     ";
const text2 = "ujian sedang saya ";
const text3 = " melompat sedang tupai";
const text4 = "melompat sedang katak ";
console.log(reverseWords(text));
console.log(reverseWords(text2));
console.log(reverseWords(text3));
console.log(reverseWords(text4));
