//1.

function filterOutOdds(...numbers) {
    return numbers.filter(num => num%2 === 0);
}

//2.

// function min(...numbers) {
//     return Math.min(...numbers);
// }

const min = (...numbers) => Math.min(...numbers);

//3.

function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

//4.

function doubleAndReturnArgs(arr, ...args) {
    const doubledArgs = args.map(el => el*2);
    return [...arr,...doubledArgs];
} 

//5. Slice and Dice

const removeRandom = (...elements) => {
    const ElIndex = Math.floor(Math.random() * elements.length);
    const newArr = [...elements];
    newArr.splice(ElIndex,1);
    return newArr;
};

const extend = (arr1, arr2) => [...arr1, ...arr2];


const addKeyVal = (obj, key, val) => {
    const newObj = {...obj, [key] : val};
    return newObj;
};

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
};

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, value) => {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
};