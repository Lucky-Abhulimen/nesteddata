//1.	Given the following nested object:
var nestedData = {
    innerData: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruit", "crackers"],
        numberData: {
            primeNumbers: [2, 3, 5, 7, 11],
            fibonnaci: [1, 1, 2, 3, 5, 8, 13]
        },
        addSnack: function (snack) {
            this.snacks.push(snack);
            return this;
        }
    }
}
/*1.a) Using a for loop, console.log all of the numbers in the primeNumbers array.
ANSWER:
*/
function primeNumbersArr() {
    var prime = nestedData.innerData.numberData.primeNumbers;
    for (var i = 0; i < prime.length; i++) {
        console.log(prime[i]);
    }
}
primeNumbersArr();

/*1.b) Using a for loop, console.log all of the even Fibonnaci numbers.
ANSWER:*/

function fibonnaciNumber() {
    var fibonnaciDigits = nestedData.innerData.numberData.fibonnaci;
    for (var i = 0; i < fibonnaciDigits.length; i++) {
        if (fibonnaciDigits[i] % 2 === 0) {
            console.log(fibonnaciDigits[i]);
        }
    }

}

fibonnaciNumber();

/* 1.c) Console.log the value "second" inside the order array.
ANSWER: */

var orderArray = nestedData.innerData.order[1];
console.log(orderArray);

// 1.d) Invoke the addSnack function and add the snack "chocolate"

nestedData.innerData.addSnack("Chocolate");


// 2. Given the following nested object:
var nestedObject = {
    speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
    data: {
        continents: {
            europe: {
                countries: {
                    switzerland: {
                        capital: "Bern",
                        population: 8000000
                    }
                }
            }
        },
        languages: {
            spanish: {
                hello: "Hola"
            },
            french: {
                hello: "Bonjour"
            }
        }
    }
}

/*2.a) Write a function addSpeaker to add a speaker to the array of speakers.The speaker
 you add must be an object with a key of name and a value of whatever you'd like.
*/
function addSpeaker() {
    nestedObject.speakers.push({ name: "Lucky" })
}
addSpeaker();

/* 2.b) Write a function addLanguage that adds a language to the languages object.The 
language object you add should have a key with the name of the language and the value 
of another object with a key of "hello" and a value of however you spell "hello" in the 
language you add.*/

function addLanguage(language, helloform) {
    nestedObject.data.languages["yoruba"] = {
        hello: "bawo"
    }
}
addLanguage();

/*Write a function addCountry that adds a European country to the countries object 
(inside of the continents object,). The country you add 
should be an object with the key as name of the country and the value as an object with 
the keys of "capital" and "population" and their respective values.*/

function addCountry(name, capital, population) {
    nestedObject.data.continents.europe.countries["Germany"] = {
        capital: "Berlin",
        populationa: 4000000
    }

}
addCountry();


