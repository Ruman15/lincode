
//#1
// let isOnline: boolean = true;
//let isCompleted: boolean = false;
//let hasAccess: boolean = true;
//let isLoading: boolean = false;


//isOnline = false; 
//isCompleted = true; 
//hasAccess = false; 
//isLoading = true;

//#2
let age: number = 25;
let height: number = 180;
let weight: number = 75.5;
let temperature: number = 36.6;
let distance: number = 150;

//#3

//let age: number = 25;
//let height: number = 180;
//let weight: number = 75.5;
//let temperature: number = 36.6;
//let distance: number = 150;


//age = 30; 
//height = 185; 
//weight = 80.2; 
//temperature = 37.0; 
//distance = 200; 

//#4
//let firstName: string = "John";
//let lastName: string = "Doe";
//let city: string = "New York";
//let country: string = "USA";
//let greeting: string = "Hello, World!";

//#5
let firstName: string = "John";
let lastName: string = "Doe";
let city: string = "New York";
let country: string = "USA";
let greeting: string = "Hello, World!";


firstName = "Jane"; 
lastName = "Smith"; 
city = "Los Angeles"; 
country = "Canada"; 
greeting = "Hi there!"; 

// firstName = 123; // Ошибка: Тип 'number' не может быть присвоен типу 'string'
// city = true; // Ошибка: Тип 'boolean' не может быть присвоен типу 'string'

//#6
//let emptyValue: null = null;
//let notInitialized: undefined = undefined;
//let maybeNull: string | null = null; 
//let maybeUndefined: number | undefined = undefined; 

//#7

let emptyValue: null = null;
let notInitialized: undefined = undefined;
let maybeNull: string | null = null;
let maybeUndefined: number | undefined = undefined;

emptyValue = null; 
// emptyValue = "some value"; // Ошибка: Тип 'string' не может быть присвоен типу 'null'

notInitialized = undefined; 
// notInitialized = 42; // Ошибка: Тип 'number' не может быть присвоен типу 'undefined'

maybeNull = "Hello!"; 
maybeNull = null; 
// maybeNull = 123; // Ошибка: Тип 'number' не может быть присвоен типу 'string | null'

maybeUndefined = 100; 
maybeUndefined = undefined; 
// maybeUndefined = "test"; // Ошибка: Тип 'string' не может быть присвоен типу 'number | undefined'

//#8

function logMessage(message: string): void {
    console.log(message);
}
function updateArray(arr: number[], index: number, value: number): void {
    if (index >= 0 && index < arr.length) {
        arr[index] = value;
    } else {
        console.log("Индекс вне допустимого диапазона");
    }
}

function addUser(users: string[], user: string): void {
    users.push(user);
}

function doNothing(): void {
}

logMessage("Hello, TypeScript!");
let numbers = [1, 2, 3];
updateArray(numbers, 1, 42);
console.log(numbers); 

let users = ["Alice", "Bob"];
addUser(users, "Charlie");
console.log(users); 

doNothing(); 

//#9
//function greetUser(name: string): void {
//    console.log("Hello, " + name + "!");
//}

//greetUser("Alice"); 

//function greetUser(name: string): void {
//    console.log("Hello, " + name + "!");
//    return "Greeting completed"; 
//}

//greetUser("Alice"); 

// error TS2322: Type 'string' is not assignable to type 'void'.

//Ошибка возникает потому, что функция с типом void не должна возвращать значение.
// Тип void обозначает отсутствие возвращаемого значения, и когда вы добавляете return
// с каким-либо значением (например, строкой "Greeting completed"), TypeScript понимает,
// что тип возвращаемого значения (string) не соответствует объявленному типу void.
// Это и вызывает ошибку компиляции.

//#10

//let isOnline: boolean = true;
//let hasAccess: boolean = false;
//let isAdmin: boolean = true;
//let isUserLoggedIn: boolean = false;




