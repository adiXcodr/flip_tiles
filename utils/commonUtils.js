const selectRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

function getRandomInt() {
    let max = 50;
    let min = 1;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateArray = (length, value = true) => {
    let arr = new Array(length).fill(value);
    return arr;
};

const getRandomLayout = (dimension, value = true) => {
    let len = dimension * dimension;
    let layout = generateArray(len, false);
    layout[Math.floor(Math.random() * len)] = value;
    return layout;
}

export {
    selectRandom,
    getRandomLayout,
    generateArray,
    getRandomInt
};