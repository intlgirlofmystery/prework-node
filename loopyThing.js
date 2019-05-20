// Your code here!
const loopyThing = function(num) {
    if (Number.isNaN(num)) {
        for (let i = 0; i < 4; i++) {
            console.log("Hey! That's not a number!");
        }
    }
    else if (num > 10) {
        console.log("Hey! That's a large number!");
    }
    else if (num < 10) {
        console.log("Hey! That's a small number!");
    }
};

loopyThing(12)
console.log("===========================")
loopyThing(5)