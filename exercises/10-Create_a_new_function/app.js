/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here
function generateRandom(){
    return Math.floor(Math.random() * 10);
}

const rndInt = generateRandom(1, 6)
console.log(rndInt)
