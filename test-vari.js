function dividi(x, y){
    if(y === 0){                                                 //CONDIZIONE PER ANNULLARE LA DIVISIONE PER 0
        throw new Error("Non divisibile per zero")
    }
    return x / y;
};

const isEven = num => num % 2 === 0;

function capitalize(stringa){                                              //FUNZIONE CHE REISTITUISCE LA PRIMA LETTERA MAIUSCOLA DELLA STRINGA
    return stringa.charAt(0).toUpperCase() + stringa.slice(1);
};

function sumArray(arr){
    return arr.reduce((acc, num) => acc + num, 0);
};

function countOccurrences(strings, char){                         //FUNZIONE CHE CI CONTA QUANTI CARATTERI CI SONO IN UNA STRINGA
    const chars =strings.split("");
    const recurringChars = chars.filter(c => c === char)
    return recurringChars.length;
};

function getEmailDomain(email){                            //FUNZIONE CHE RITORNA IL DOMINIO DI UN INDIRIZZO EMAIL
    return email.split("@")[1];
};

function findUserById(users, id){
    return users.find(user => user.id === id)
}

module.exports= { 
    dividi,
    isEven, 
    capitalize, 
    sumArray, 
    countOccurrences, 
    getEmailDomain, 
    findUserById
}