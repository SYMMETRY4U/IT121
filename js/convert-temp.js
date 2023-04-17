function convert() {

    // get the temperature in degrees centigrade IT 121 class
    var tempCent = parseFloat(document.getElementById("tempCent").value);
    // convert to degrees Fahrenheit
    var tempFahr = 9 / 5 * tempCent + 32;
    tempFahr = tempFahr.toFixed(2);

    // write the result to the page

    var result = document.getElementById("result");

    result.innerHTML = tempCent + " degrees centigrade is " + tempFahr + " degrees Fahrenheit.";

}
