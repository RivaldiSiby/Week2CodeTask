const devideAndSort = (numbers) => {
  // validasi
  if (typeof numbers !== "number") {
    return "inputan harus bertipe number";
  }
  // memecahkan number
  const devide = numbers.toString().split(0);
  //   mengurutkan
  let result = [];
  devide.map((item) => {
    let nums = [];
    for (let i = 0; item.length > i; i++) {
      nums.push(parseInt(item[i]));
    }
    result.push(...nums.sort());
  });
  //   mengembalikan dan menampilkan
  return console.log(...result);
};

// test
devideAndSort(5956560159466056);
