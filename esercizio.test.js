// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."
test('La funzione "getInitials" restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Luca Rossi")).toBe("L.R.");
});

test('La funzione "createSlug" restituisce una stringa in lowercase.', () => {
    expect(createSlug("Titolo Con Maiuscole")).toBe("titolo-con-maiuscole")
});

test('La funzione "average" calcola la media aritmetica di un array di numeri.', () => {
    expect(average([5, 15])).toBe(10)
    expect(() => average([5, "ciao"])).toThrow()
});

test('La funzione "createSlug" sostituisce gli spazi con "-".', () => {
    expect(createSlug("Titolo Molto Lungo")).toBe("titolo-molto-lungo");
});

test('La funzione "isPalindrome" verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome("anna")).toBeTruthy();
    expect(isPalindrome("boolean")).toBeFalsy();
});
const {getInitials, createSlug, average, isPalindrome} = require("./esercizio.js");

