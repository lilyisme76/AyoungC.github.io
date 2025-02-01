var billy; // variable declaration without definition

console.log(billy); // billy has the value undefine

billy = 13;
billy = 'billy is great'; //assigned billy string...
billy = 'billy said "hello"';

// keyword expression codeblock
if(true){
    console.log(billy);
}

if( 15 > 15 ){
    console.log('is it true?');
}

billy = "silly"
if(billy){  // coercion change string to a boolean
    console.log('billy is silly');
}

if(billy === 'silly'){ // === testing for equal value and same type
    console.log('really silly');
}

// == testing for equal value but allows for coercion
//billy == true
//billy gets coerced to a boolean and the epression is true

// typeof operator prededes a variable name or literal value

console.log(typeof "lfdsajhf");
console.log(typeof billy); 

if (typeof billy === "string"){
    billy = 'something else';
}else{
    billy = 42; 
}

/////////////
// for loop 

for(var i=0; i < 5; i++){ //i++가 아니면 그대로 한자리수이기때문에 무한한 수에서 멈춤
    console.log('hello')
}

for(var i = 0; i< 10; i++){
    console.log(i);
}
console.log(i); // without putting {}, it does work... once more
///////////

// function declaration
function bob(){
    console.log('i am bob');
}

// function invokation
bob(); /// () function invokation operator


for(var i = 0; i < 1000; i++){
    bob();
}
// select lines and (command + /) is multiline comment

console.log( bob() );

function bailly(data){
    data = data+100;
    return data;
}
var mydata = bailly(50);
console.log(mydata);
console.log( typeof mydata);
