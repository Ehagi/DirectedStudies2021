let a, b, c;
let outputText;

function validate() {

    // get user input
    a = document.forms["input_form"]["aterm"].value;
    b = document.forms["input_form"]["bterm"].value;
    c = document.forms["input_form"]["cterm"].value;

    //validate a, b, and c
    if (a == 0) {
        outputText = "<em>a</em> cannot equal zero!!";
    } else if (isNaN(a)) {
        outputText = "<em>a</em> must be a number!!";
    } else if (isNaN(b)) {
        outputText = "<em>b</em> must be a number!!";
    } else if (isNaN(c)) {
        outputText = "<em>c</em> must be a number!!";
    } else {
        let sym = -b / (2 * a);
        let disc = (b ** 2 - 4 * a * c);
        if (disc < 0) {
            disc = -disc;
            let x1 = sym + Math.sqrt(disc) / (2 * a);
            let x2 = sym - Math.sqrt(disc) / (2 * a);
            outputText = "axis of symmetry x = " + sym + "<br>Root 1 = " + x1.toFixed(2) + "i and Root 2 = " + x2.toFixed(2) + "i";
        } else {
            let x1 = sym + Math.sqrt(disc) / (2 * a);
            let x2 = sym - Math.sqrt(disc) / (2 * a);
            outputText = "axis of symmetry x = " + sym + "<br>Root 1 = " + x1.toFixed(2) + " and Root 2 = " + x2.toFixed(2);
        }

    }



    //calculate the result using quadratic

    //output the results or errors
    document.getElementById("output_text").innerHTML = outputText;
}