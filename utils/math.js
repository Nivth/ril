import { symbols } from "../pages/_app";
export const PRIMES_NUMBERS = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

/**
 * Dapatkan simbol acak (+ , - , / , *)
 */
const getRandomSymbol = () => {
  // Nambahin "tambahan" lain di akhir untuk menaikan kemungkinan.
  var min = 0;
  var max = symbols.length - 1;
  var random = Math.round(Math.random() * (+max - +min) + +min);
  return symbols[random];
};

/**
 * Mengembalikan function untuk menghasilkan operasi berikutnya.
 *
 * @param {string} symbol
 * @param {number} prev
 */
export const evaluate = (symbol, prev) => {
  // Pembagian
  if (symbol === "/") {
    return () => {
      const ram = Math.floor(Math.random() * (10 - 1) + 1);
      const commonMultiple = PRIMES_NUMBERS.filter(
        (n) => prev % n === 0 && ram * n
      );
      const index = Math.floor(Math.random() * (commonMultiple.length - 1));

      return +commonMultiple[index] || 1;
    };
  }

  // Perkalian
  if (symbol === "*") {
    let ramNum = 0;

    if (prev < 15) {
      ramNum = 15;
    }

    if (prev > 14 && prev < 50) {
      ramNum = 8;
    }

    if (prev > 49) {
      ramNum = 5;
    }

    return () => getRandomNumber(ramNum);
  }

  // dan lain lain
  return () => getRandomNumber(70);
};

/**
 * Dapatkan nomor acak dari nol sampai melewati range parameter (default 100)
 *
 * @param {number} range
 */
const getRandomNumber = (range) => {
  return (Math.random() * (range || 100)).toFixed();
};

/**
 * Mengembalikan operasi matematika tergantung dari poin user.
 * @param {number} points
 */
const generateProblem = (points) => {
  const lv = parseInt(points / 100 / 5 + 1);
  let prevNum = getRandomNumber();
  let problem = prevNum;

  for (let i = 0; i < lv; i++) {
    let symbol = getRandomSymbol();
    let getAnotherNumber = evaluate(symbol, prevNum);
    let anotherNumber = getAnotherNumber() || 0; // Avoid undefined
    problem += ` ${symbol} ${anotherNumber}`;
    prevNum = anotherNumber;
  }
  return problem;
};

/**
 * Evaluasi ekspresi matematika dengan nilai yang diberikan.
 * @param {string} expression
 * @param {number} value
 */
const compare = (expression, value) => {
  return solve(expression) === Number(value);
};

/**
 * Solve expression
 * @param {string} expression
 */
const solve = (expression) => {
  // eslint-disable-next-line no-eval
  const result = eval(expression);

  // Mengembalikan dua poin
  if (result.toString().includes(".")) {
    return Number(result.toFixed(2));
  }
  return result;
};

export default {
  generateProblem,
  compare,
  solve,
};
