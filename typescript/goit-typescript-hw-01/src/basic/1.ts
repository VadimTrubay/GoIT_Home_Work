// Є наступний JavaScript код:
// const age = 50;
// const username = 'Max';
// const toggle = true;
// const empty = null;
// const callback = (a) => { return 100 + a };
// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.


const age: number = 50;
const username: string = 'Max';
const toggle: boolean = true;
const empty: null = null;
let callback = (a: number): number => {
  return 100 + a
};

