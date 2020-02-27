// hoisting
addition(1, 1);

// hoisting

{
    test = 1;
    var test;
}
console.log(test)

function addition(a, b){
    return a + b;
}


var sum = addition(2, 5);

function pokeMe(){
    console.log("Meow");
}


function approachSomeone(someoneToPoke){
    console.log("tip tapping in my jordans");
}

approachSomeone(pokeMe);

/* function introduce(name){
    console.log("Hello my name is", name);
} */

/*
const introduce = (name) => {
    console.log("Hello my name is", name);
}



const prepareIntroduction = (introducerFunction, name) => {
    console.log("hmmsadsmad");
    introducerFunction(name);
}

// Call the function introduce and declare the variable
prepareIntroduction(introduce, "Test");
*/

const aboutMe = (me) =>{
    console.log("my hobby is", me.hobby);
}

const me = {
    hobby: "GangWeed"
};

aboutMe(me);


const callLater = {
    toCall: aboutMe

};

console.log(callLater);