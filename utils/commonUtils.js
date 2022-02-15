const selectRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomLayout = (dimension) => {
    let len = dimension * dimension;
    let layout = new Array(len).fill(false);
    layout[Math.floor(Math.random() * len)] = true;
    return layout;
}

export {
    selectRandom,
    getRandomLayout
};