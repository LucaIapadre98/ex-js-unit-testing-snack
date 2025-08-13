function somma (a, b){
    return a + b;
}
test('La funzione "somma" retituisce la somma di due  numeri', () => {
    expect(somma(1, 1)).toBe(2);
    expect(somma(2, 5)).toBe(7);
    expect(somma(3, 3)).toBe(6);
});