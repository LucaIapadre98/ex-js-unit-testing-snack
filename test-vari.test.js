test('La funzione "dividi" restituisce il quozionte tra due nueri', () => {
    expect(dividi(10,2)).toBe(5);
});

test('La funzione "dividi" deve gestire la divisione per zero lanciando un errore', () => {
    expect(() =>dividi(5, 0)).toThrow() ;                               //OPERAIONZE CHE CI LANCIA UN ERRORE
    expect(() =>dividi(7, 0)).toThrow() ;  
});

test('La funzione "isEven" restituisce true per numeri pari e false per numeri dispari', () => {
    expect(isEven(4)).toBeTruthy();
    expect(isEven(3)).toBeFalsy();
});

test('La funzione "capitalize" restituisce la stringa con la prima lettera maiuscola', () => {
    expect(capitalize("Boolean")).toBe("Boolean")
});

test('La funzione "sumArray" restituisce la somma degli elementi di un array', () => {
    expect(sumArray([1, 2, 4, 5, 6])).toBe(18);
});


test('La funzione "countOccurrences" conta quante volte un carattere appare in una stringa', () => {
    expect(countOccurrences("boolean", "o")).toBe(2)
});

test('La funzione "getEmailDomain" estrae il dominio da un indirizzo email', () => {
    expect(getEmailDomain("luca.iap@gmail.com")).toContain("gmail.com")

});

test('La funzione "findUserById" restituisce l\'oggetto corretto dato un array di utenti e un Id', () =>{
    const users = [
        {id:1, name: "Luca", age:27},
        {id:2, name: "Ludovico", age:28},
        {id:3, name: "Andrea", age:37},
    ]
    expect(findUserById(users, 2)).toEqual({id:2, name: "Ludovico", age:28});

});

const {dividi, isEven, capitalize, sumArray, countOccurrences, getEmailDomain, findUserById}= require("./test-vari.js");