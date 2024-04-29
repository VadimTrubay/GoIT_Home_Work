// type User = {
//     id: number;
//     name: string;
// };
//
// const getUserNames = (users: Array<User>): void => {
//     users.map((user) => user.name);
// }
//
// const users: User[] = [
//     {id: 1, name: 'Alice'},
//     {id: 2, name: 'Bob'},
//     {id: 3, name: 'Charlie'},
// ];
//
// let result = getUserNames(users);
// console.log(result); // ['Alice', 'Bob', 'Charlie']
//
// export {};
//
//
// function handleEvent(event: string, handler: ???): void {
//     function implementation
// }
// handleEvent("click", () => { console.log("Clicked!") });
// handleEvent("mouseover", (x: number, y: number) => {
//     console.log(`Mouse at ${x}, ${y}`); })


// type UserType = {
//     id: number;
//     name: string;
//     coordinate: CoordinateType
// }
//
// type CoordinateType = [number, number]
//
// const user: UserType = {
//     id: 1,
//     name: "vad",
//     coordinate: [10, 20]
// }


// enum AnimalIds {
//     cat = 'cat',
//     dog = 'dog',
//     fish = 'fish',
// }
//
// type Animal = {
//     [AnimalIds.cat]: {
//         meow: () => string;
//     };
//     [AnimalIds.dog]: {
//         bark: () => string;
//     };
//     [AnimalIds.fish]: {
//         swim: () => undefined;
//     };
// };
// // Створення об'єктів типу Animal
// let cat: Animal[AnimalIds.cat] = {
//     meow: () => 'Meow! I am a cat',
// };
//
// let dog: Animal[AnimalIds.dog] = {
//     bark: () => 'Woof! I am a dog',
// };
//
// let fish: Animal[AnimalIds.fish] = {
//     swim: () => undefined,
// };
//
// export {};



















































