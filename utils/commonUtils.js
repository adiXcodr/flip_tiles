const selectRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const generateArray = (length, value = true) => {
    let arr = new Array(length).fill(value);
    return arr;
};

const getRandomLayout = (dimension) => {
    let len = dimension * dimension;
    let layout = generateArray(len, false);
    layout[Math.floor(Math.random() * len)] = true;
    return layout;
}

export {
    selectRandom,
    getRandomLayout,
    generateArray
};