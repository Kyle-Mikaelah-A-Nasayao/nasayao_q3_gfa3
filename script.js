var num1, num2, num3;

function random() {
    num1 = Math.ceil(Math.random()*20);
    num2 = Math.ceil(Math.random()*20);
    num3 = Math.ceil(Math.random()*20);

    document.getElementById("fbNum").innerHTML = num1;
    document.getElementById("ytNum").innerHTML = num2;
    document.getElementById("igNum").innerHTML = num3;
}

function largest() {
    if (num1 > num2 && num1 > num3) {
        document.getElementById("biggestNum").innerHTML = "Facebook (" + num1 + ")";
    } else if (num2 > num1 && num2 > num3) {
        document.getElementById("biggestNum").innerHTML = "YouTube (" + num2 + ")";
    } else if (num3 > num1 && num3 > num2) {
        document.getElementById("biggestNum").innerHTML = "Instagram (" + num3 + ")";
    } else if (num1 == num2 && num1 > num3) {
        document.getElementById("biggestNum").innerHTML = "Facebook, YouTube (" + num1 + ")";
    } else if (num2 == num3 && num2 > num1) {
        document.getElementById("biggestNum").innerHTML = "YouTube, Instagram (" + num2 + ")";
    } else if (num1 == num3 && num1 > num2) {
        document.getElementById("biggestNum").innerHTML = "Facebook, Instagram (" + num1 + ")";
    } else if (num1 == num2 && num1 == num3) {
        document.getElementById("biggestNum").innerHTML = "Facebook, YouTube, Instagram (" + num1 + ")";
    }
}


function none() {
    var noUse = 60 - (num1 + num2 + num3);

    document.getElementById("noUse").innerHTML = noUse;
}

function letter() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (num1 == 0) {
        document.getElementById("nthLetter").innerHTML = "a";
    } else {
        document.getElementById("nthLetter").innerHTML = alphabet.charAt(num1 - 1);
    }
}

function time() {
    document.getElementById("timeMin").innerHTML = num2 * num3;
    document.getElementById("timeHrMin").innerHTML = Math.floor((num2 * num3)/60) + "hr " + (num2 * num3)%60 + "min";
}

random();
largest();
none();
letter();
time();
