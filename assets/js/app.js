var cl = console.log;
var str = "I Love JavaScript";

// reverse string

//we can convert array into string >> reverse that array >> converted into string

var arr = str.split("");
cl(arr);

//reverse array

var revarr = arr.reverse();
cl(revarr);

//converted into string

var str = revarr.join("");
cl(str);

//functions
function reverseString(info){ // info--parameter ..functions have own parameter
    //convert string into array
    var arr1 = info.split("");

    var re = arr1.join("");
   
    //reverse array
    var revstr1 = arr1.reverse();

   // covert array into string
   var result = revstr1.join("");
   return result;
    
}
cl(reverseString(str)) // str is an argumet

// function

function reverseString1(info){
    return info.split("").reverse().join("")
}
cl(reverseString(str));

var inform = "I Love Angular";
var result = "";
for(i = 0; i< inform.length; i++){
//    cl(inform.charAt(i));
   result = inform.charAt(i) + result;
} 
cl(result);

//2nd way

function reverseString2(str){  // >>str is a parameter
        var result4 = "";
    for(var i=0; i<inform.length; i++){
        // result4 = inform.charAt(i) + result4;
        result4 = inform[i] + result4;
    }
    return result4;
}
cl(reverseString2(inform))  //info is an argument


//3rd way
function reverseString3(str){
    var result5 ="";
    for(var i=inform.length-1; i>=0; i--){
        result5 = result5 + str[i];
        return result5;
    }
}
cl(reverseString3(inform));