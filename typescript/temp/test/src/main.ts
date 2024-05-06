// const myName: string = "12";
// const age: number = 30;
// const email: null = null;
// const isMarried: undefined = undefined;
// const hobbies: any[] = ['sports', 'cooking'];
// const isHappy: boolean = false;

type User = {
    name: string;
    age: number;
    phone?: Array<string>;
}

function displayUserProfile(user: User): string {
    return `${user.name} ${user.age}`
}

const user: User = {
    name: 'vad',
    age: 30,
    phone: ['123', '456']
}

console.log(displayUserProfile(user))