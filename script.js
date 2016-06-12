/*jslint browser: true*/
/*jslint for: true*/
/*global
document
*/

(function (document) {
    "use strict";
    var output = "";
    var i;

    function transformByDivisor(number) {
        var result = "";
        if (number % 3 === 0) {
            result += "Foo";
        }
        if (number % 5 === 0) {
            result += "Bar";
        }
        if (number % 7 === 0) {
            result += "Qix";
        }
        return result;
    }

    function transformByNumber(number) {
        var result = "";
        var j;
        number = number.toString().split("");
        for (j = 0; j < number.length; j += 1) {
            if (number[j] === "3") {
                result += "Foo";
            } else if (number[j] === "5") {
                result += "Bar";
            } else if (number[j] === "7") {
                result += "Qix";
            }
        }
        return result;
    }

    function transform(number) {
        var result = transformByDivisor(number) + transformByNumber(number);
        if (result === "") {
            return number.toString();
        } else {
            return result;
        }
    }
    output = "<table border='1'><thead><tr><th>Number</th><th>Result</th></tr></thead><tbody>";
    for (i = 1; i <= 100; i += 1) {
        output += "<tr><td>" + i + "</td><td>" + transform(i) + "</td></tr>";
    }
    output += "</tbody></table>";
    document.body.innerHTML = output;
}(document));
