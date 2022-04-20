const arkFood = (price, voucher, distance, tax) => {
  // validasi
  if (typeof price !== "number") {
    return "Harga harus bertipe number";
  }
  if (typeof voucher !== "string") {
    return "Voucher harus bertipe string";
  }
  if (typeof distance !== "number") {
    return "Jarak harus bertipe number";
  }
  if (typeof tax !== "boolean") {
    return "Pajak harus bertipe boolean";
  }
  // cek harga
  if (price < 0) {
    return "Harga tidak valid";
  }
  // cek jarak
  if (distance < 0) {
    return "Jarak tidak valid";
  }
  // cek kode promo
  const code = [
    {
      code: "ARKAFOOD5",
      minPrice: 50000,
      discounts: 50,
      maxDiscounts: 50000,
    },
    {
      code: "DITRAKTIRDEMY",
      minPrice: 30000,
      discounts: 60,
      maxDiscounts: 25000,
    },
  ];
  let potongan = 0;
  code.map((item) => {
    //  cek apakah kode vocher terdaftar
    if (item.code === voucher) {
      // cek jumlah harga dengan minimal harga pemesanan
      if (price >= item.minPrice) {
        potongan = (price * item.discounts) / 100;
        // cek jumlah max potongan
        if (potongan > item.maxDiscounts) {
          potongan = item.maxDiscounts;
        }
      }
    }
  });

  //   cek jarak
  let biayaAntar = 5000;
  //   jika lebih dari 2km
  if (biayaAntar >= 3) {
    hitungJarak = distance - 2;
    biayaAntar = 5000 + hitungJarak * 3000;
  }

  //   cek pajak
  let pajak = tax === true ? (price * 5) / 100 : 0;

  //   output
  return `
    ---------- ArkFood ----------

    Harga       : ${price}
    Potongan    : ${potongan}
    Biaya Antar : ${biayaAntar}
    Pajak       : ${pajak}
    -----------------------------
    SubTotal    : ${price - potongan + biayaAntar + pajak}
  `;
};
console.log(arkFood(75000, "ARKAFOOD5", 5, true));
