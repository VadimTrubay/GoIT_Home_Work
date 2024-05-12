// У вас є такі функції JavaScript:

// function showMessage(message) {
//     console.log(message);
// }

// function calc(num1, num2) {
//     return num1 + num2;
// }

// function customError() {
//     throw new Error('Error');
// }
// Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?

export function showMessage(message: string): void {
  // @ts-ignore
  console.log(message);
}

export function calc(num1: number, num2: number): number {
  return num1 + num2;
}

export function customError(): never {
  // @ts-ignore
  throw new Error('Error');
}
