// deep copy object

export const deepCopy = () => {
  const obj = {
    name: "amy",
    age: 3,
    colors: {
      a: "1",
      b: "2",
      c: {
        test: "hello"
      }
    }
  };

  const testObj = {};
  console.log("test = ", deepCopyHelper(obj, testObj));
  console.log("testObj = ", testObj);
};

const deepCopyHelper = (object, returnObj) => {
  if (typeof object !== "object") {
    return object;
  } else {
    Object.keys(object).forEach(key => {
      if (typeof object[key] !== "object") {
        returnObj[key] = object[key];
      } else {
        returnObj[key] = deepCopyHelper(object[key], {});
      }
    });
  }
  return returnObj;
};

// You are given two sorted arrays, A and B, and A has a large enough buffer at the end
// to hold B. Write a method to merge B into A in sorted order.
export const sortArrays = () => {
  let n = 2 - 1;
  let m = 4 - 1;
  const arrayOne = [1, 3, , , , ,];
  const arrayTwo = [-2, 5, 7, 9];
  let i = arrayOne.length - 1;

  while (n >= 0 && m >= 0) {
    console.log("one = ", arrayOne[n], " two = ", arrayTwo[m], "i = ", i);
    if (arrayOne[n] > arrayTwo[m]) {
      arrayOne[i] = arrayOne[n];
      n--;
    } else {
      arrayOne[i] = arrayTwo[m];
      m--;
    }
    i--;
  }

  console.log("i = ", i, arrayOne);
  while (i >= 0) {
    arrayOne[i] = arrayTwo[m];
    m--;
    i--;
  }
  console.log("arrayOne = ", arrayOne);
};

// remove duplicates from a sorted array, return the length
// not equal, increment both, set ptr's value to i
export const removeDuplicates = () => {
  const array = [1, 1, 2, 2, 2, 3, 4, 4, 5];
  let ptr = 0;
  let length = 1;

  for (let i = 1; i < array.length; i++) {
    if (array[ptr] !== array[i]) {
      ptr++;
      array[ptr] = array[i];
      length++;
    }
  }
  console.log("array = ", array, " length = ", length);
};

//     assert.equal(calculate("5 1 2 + 4 * + 3 -"), 14);

export const calculate = () => {
  const expression = "5 1 2 + 4 * + 3 -";
  const operations = new Set(["+", "-", "*", "/"]);
  const stack = [];
  const expArray = expression.split(" ");

  if (expression === "") {
    return 0;
  }
  expArray.forEach(char => {
    if (!operations.has(char)) {
      if (isNaN(char)) {
        console.log("Error! ", char, " is not a number");
      }
      stack.push(Number(char));
    } else {
      const num1 = stack.pop();
      const num2 = stack.pop();
      const value = eval(num2 + char + num1);
      //   const value = evaluateExpression(char, stack.pop(), stack.pop());
      stack.push(value);
    }
  });
  console.log("answer = ", stack.pop());
  return stack.pop();
};

// calculate in reverse order bc it got reversed from the stack
const evaluateExpression = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return num2 + num1;
    case "-":
      return num2 - num1;
    case "*":
      return num2 * num1;
    case "/":
      return num2 / num1;
    default:
      return num2;
  }
};

// private void permute(String str, int l, int r)
// {
//     if (l == r)
//         System.out.println(str);
//     else
//     {
//         for (int i = l; i <= r; i++)
//         {
//             str = swap(str,l,i);
//             permute(str, l+1, r);
//             str = swap(str,l,i);
//         }
//     }
// }

const swap = (str, i, j) => {
  const temp = str[i];
  str[i] = str[j];
  str[j] = temp;
  return str;
};

const permute = (str, l, r) => {
  if (l === r) {
    console.log(str);
  } else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      permute(str, l + 1, r);
      str = swap(str, l, i);
    }
  }
};

const makeChange = (amount, denoms, index) => {
  console.log("amount = ", amount, " index = ", index);
  if (index >= denoms.length - 1) {
    if (amount % denoms[denoms.length - 1] === 0) {
      return 1;
    } else {
      return 0;
    }
  }
  const denomAmount = denoms[index];
  let ways = 0;
  for (let i = 0; i * denomAmount <= amount; i++) {
    const amountRemaining = amount - i * denomAmount;
    ways += makeChange(amountRemaining, denoms, index + 1);
  }
  return ways;
};

// longest increasing subsequence
const longest = () => {
  const input = [10, 9, 2, 5, 3, 7, 101, 18];
  const cache = [];
  // initialize cache
  for (let i = 0; i < input.length; i++) {
    cache[i] = 1;
  }

  for (let i = 1; i < input.length; i++) {
    for (let j = 0; j < i; j++) {
      if (input[i] > input[j]) {
        cache[i] = Math.max(cache[i], cache[j] + 1);
      }
    }
  }
  console.log("max = ", Math.max.apply(null, cache));
};

// write all subsets of 3 that add up to 0

export const findSubsets = () => {
  const input = [-20, 10, 10, 2, 5];
  const indexMap = getIndexMap(input);

  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      const sum = input[i] + input[j];
      const desiredNum = 0 - sum;
      if (
        indexMap.hasOwnProperty(desiredNum) &&
        indexMap[desiredNum][indexMap[desiredNum].length - 1] > i &&
        indexMap[desiredNum][indexMap[desiredNum].length - 1] > j
      ) {
        console.log("[", input[i], ",", input[j], ",", desiredNum, "]");
      }
    }
  }
};

const getIndexMap = input => {
  const map = {};
  for (let i = 0; i < input.length; i++) {
    if (map.hasOwnProperty(input[i])) {
      map[input[i]].push(i);
    } else {
      map[input[i]] = [i];
    }
  }
  return map;
};
