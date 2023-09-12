import * as DAL from '/core/DAL.js'

// Get array index and value
export function getArrayIndexAndValue() {
    for (const [i, value] of  DAL.charArr.entries()) {
        console.log('index ' + i, 'value ' + value);
    }
};

export function getArrayValues() {
    DAL.carArr.forEach(element => {
        console.log(element)
    });
};

export function filterFruits() {
   return DAL.fruitArr.filter((word) => word.length > 6);
}
  
export function mapFruits() {
    DAL.fruitArr.map((_, i) => console.log(i + _));
}

export function findOneAdult() {
    return DAL.numberArray.find((element) => element >= 18);
}

export function findOneAdultIndex() {
    return DAL.numberArray.findIndex((element) => element >= 18);
}


