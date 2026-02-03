const heights = [65, 66, 68, 72, 78, 98];

function getMax(numbers) {
    let max = numbers[0];
    for (num of numbers){
        if(num > max) {
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log('max value is: ', max);


// homework: min number
 function getMin(numbers) {
    let min = numbers[0];
    for(num of numbers) {
        if(num < min) {
            min = num;
        }
    }
    return min;
 }

const min = getMin(heights);
console.log('min value is: ', min);