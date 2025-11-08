function sum(...numbers: number[]): number {
  // reduce ile tüm sayıları toplar
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));

// BEKLENEN ÇIKTI:
// 6
// 100
