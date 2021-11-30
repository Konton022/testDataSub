import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
Задание 1 - Создать абстрактный класс “AClass” у которого будет свойство “Numbers” типа Array, 
который будет содержать n натуральных чисел. 
Также AClass должен иметь метод “fill”, 
который заполняет массив Numbers случайными числами; 
метод “factorial”, который возвращает массив факториалов из массива Numbers; 
и абстрактный метод “sort”. Конструктор принимает один параметр “n” 
и вызывает метод “fill”. Метод “fill” можно вызывать только из методов класса “AClass”. 
Метод “factorial” может вызываться из класса AClass и из дочерних классов.
Реализовать два дочерних класса “Class1” и “Class2” с методом “sort” который сортирует массив Numbers, 
а затем выдает массив факториалов. Способы сортировки в классах “Class1” и “Class2” должны различаться.
</div>
`;

class AClass {
  constructor(n) {
    this.n = n;
    this.numbers = [];
  }
  fill(max) {
    for (let i = 0; i < this.n; i++) {
      this.numbers.push(Math.floor(Math.random() * max));
    }
    return this.numbers;
  }
  factorial() {
    const arr = this.numbers.map((item) => {
      if (item === 0) {
        return 1;
      } else {
        let result = 1;
        for (item; item > 0; item--) {
          result *= item;
        }
        return result;
      }
    });
    return arr;
  }
}

let obj = new AClass(5);
console.log(obj);

console.log(obj.fill(10));
console.log(obj.factorial());
