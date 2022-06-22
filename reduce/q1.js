
const arr = [1,2,3,4]

const calculateSum = (accumulator, currentValue) => {
    console.log('accumulator: ', accumulator);
    console.log('currentValue:', currentValue);
    return accumulator + currentValue;
};

//here we tell the reduce method to initialise the accumulator at 10
arr.reduce(calculateSum, 10)
