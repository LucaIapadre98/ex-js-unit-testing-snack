function getInitials(nomeCompleto){                         //QUESTA FUNZIONE MI RESTITUISCE L'INIZIALE DEL NOME E DEL COGNOME
    const [nome, cognome] = nomeCompleto.split(" ");
    return `${nome.charAt(0)}.${cognome.charAt(0)}.`
};

function createSlug(titolo){                                //CI RITORNA LA SCRITTA IN MINUSCOLO E CON I TRATTINI
    return titolo.toLowerCase().replaceAll(" ", "-"); 

};
function average(numeri){                                   //CI RITORNA LA SOMMA DEI NUMERI E LA LORO MEDIA ARITMETICA
    numeri.forEach(numero => {
        if(isNaN(numero)){
            throw new Error("Vuole solo numeri!")
        }
    })            
   return numeri.reduce((acc, numero) => acc + numero, 0) / numeri.length;
};

function isPalindrome(parola){                              // QUESTA FUNZIONE CI RESTITUISCE LA FUNZIONE PER CAPIRE SE UNA PAROLA E' PALINDROMA
    const parolaInversa = parola.split("").reverse().join("");
    return parola === parolaInversa;
}

module.exports = {getInitials, createSlug, average, isPalindrome}