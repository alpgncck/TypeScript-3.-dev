abstract class Shape {
  // abstract metod
  abstract getArea(): number;
}

class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    // alan = π * r^2
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(10); // 10 yarıçaplı
console.log(circle.getArea());

// BEKLENEN ÇIKTI:
// 314.1592653589793
