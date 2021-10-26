const polyS = [];
const deg = [];

let outputText;

function poly() {
    let degree = window.prompt("enter the highest degree of the polynomial: ");
    for (i = 0; i <= (degree); i++) {
        polyS[i] = window.prompt("enter the coefficient for each degree");
        deg[i] = degree - i;
        console.log(deg);
        console.log(polyS);
        document.getElementById("p1").innerHTML = polyS[i] + "x&sup2";


    }

}


//output the results or errors
//document.getElementById("output_text").innerHTML = outputText;