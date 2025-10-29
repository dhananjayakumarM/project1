// Question one  done counter question

// const counter = document.getElementById("counterBtn");
// const count = document.getElementById("count");

// counter.addEventListener("click", () => {
//   let newCount = parseInt(count.innerText) || 0;
//   count.innerText = newCount + 1;
// });

// Question two  calculator counter question with event delegation solved
{
  /* <div id="calculate">
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>+</button>
  <button>-</button>
  <button>=</button>
  <button>clear</button>
  <p id="showresult"></p>
</div>; */
}

// let expression = "";
// const output = document.getElementById("showresult");

// document.querySelectorAll("#calculate button").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     // console.log(btn.innerText);
//     const value = btn.innerText;

//     if (value === "=") {
//       try {
//         const evaluate = eval(expression);
//         output.innerText = evaluate;
//       } catch (error) {
//         output.innerText = "wrong please check";
//       }
//     } else if (value === "clear") {
//       expression = "";
//       output.innerText = "";
//     } else {
//       expression += value;
//       output.innerText = expression;
//     }
//   });
// });

// curryinq question done

// var multiply = function (a, b) {
//   return a * b;
// };

// console.log(multiply(1, 2));

// var multiplybyTwo = function (a) {
//   return function (b) {
//     return a * b;
//   };
// };

// console.log(multiplybyTwo(1)(2));
//call apply bind

let obj1 = {
  name: "akshay",
  lname: "sainik",
  printFullName: function (params) {
    console.log(this.name + this.lname + params);
  },
};

let obj2 = {
  name: "arun",
  lname: "dommaraju",
};

// let accesstoobj2 = obj1.printFullName.call(obj2, "frombengaluru");

// let accesstoobj3 = obj1.printFullName.apply(obj2, ["rtnagar"]);

// let accesstoobj4 = obj1.printFullName.bind(obj2, "chamundinagar");
// accesstoobj4();

// polyfill for bind

// Function.prototype.mybind = function (...args) {
//   let obj = this;
//   [args[0], ...rest] = args;
//   return function (...args2) {
//     obj.apply(args[0], [...rest, ...args2]);
//   };
// };

// let accesstoobj4 = obj1.printFullName.mybind(obj2, "banglore");
// accesstoobj4();

// const nums = [1, 2, 3, 4, 5];

// const doubled = nums.map((n) => n * 2);
// const evens = nums.filter((n) => n % 2 === 0);
// const sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(doubled);
// console.log(evens);
// console.log(sum);

// const arr = [1, 2, 3, 4, 5, 2];

// const arrarmap = arr.map((item) => {
//   return item * 3;
// });
// console.log(arrarmap);

// const arrayfilter = arr.filter((item) => {
//   return item != 2;
// });
// console.log(arrayfilter);

// const arraysort = arr.sort();
// console.log(arraysort);

// const string = "maxam";
// const string2 = "mixam";

// function palindrome(param) {
//   return console.log(param.split("").reverse().join());
// }

// palindrome(string2);
