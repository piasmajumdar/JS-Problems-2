function smallestName(names) {
    let smallest = names[0];
    for (let name of names) {
        if(name.length < smallest.length){
            smallest = name;
        }
    }
    return smallest;
}
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const small = smallestName(heights2);
console.log(small);