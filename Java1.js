//first function using the id tag and a button
function lesOne() {
    document.getElementById("Les1").innerHTML = "I changed the content";
}

//second function using the id tage and a button and messes with style
function lesTwo() {
    document.getElementById("Les2").style.fontSize = "30px";
    document.getElementById("Les2").style.color = "red";
    document.getElementById("Les2").style.backgroundColor = "yellow";
}
//define the variables for the roots of the quadratic
let x1, x2;

function quad() {


    //get input from the user  isNaN()function is to check if value is not a number

    let a = prompt("enter the first coefficient: ");
    if (isNaN(a)) {
        alert("please enter a number");
        Number(a = prompt("enter the first coefficient: "));
    }
    let b = prompt("enter the second coefficient: ");
    if (isNaN(b)) {
        alert("please enter a number");
        Number(b = prompt("enter the second coefficient: "));
    }
    let c = prompt("enter the constant: ");
    if (isNaN(c)) {
        alert("please enter a number");
        Number(c = prompt("enter the first coefficient: "));
    }


    document.getElementById("standard").innerHTML = a + "x&sup2; + " + b + "x + " + c;

    // calculate the discriminant
    let disc = b ** 2 - 4 * a * c;

    // calculate the axis of symmetry
    let sym = (-b) / (2 * a);

    //condition for real and imaginary roots
    if (disc > 0) {
        x1 = (sym + Math.sqrt(disc)) / (2 * a);
        x2 = (sym - Math.sqrt(disc)) / (2 * a);
        document.getElementById("axis").innerHTML = sym;
        document.getElementById("root1").innerHTML = x1.toFixed(2);
        document.getElementById("root2").innerHTML = x2.toFixed(2);
    } else if (disc == 0) {
        x1 = x2 = sym;
    } else {
        disc = -disc;
        x1 = (sym + Math.sqrt(disc)) / (2 * a);
        x2 = (sym - Math.sqrt(disc)) / (2 * a);
        document.getElementById("axis").innerHTML = sym;
        document.getElementById("root1").innerHTML = x1.toFixed(2) + "i";
        document.getElementById("root2").innerHTML = x2.toFixed(2) + "i";
    }
}