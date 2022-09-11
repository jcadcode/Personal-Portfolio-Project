let one = document.getElementById('boxOne');
let two = document.getElementById('boxTwo');
let three = document.getElementById('boxThree');
let four = document.getElementById('boxFour');
let five = document.getElementById('boxFive');
let six = document.getElementById('boxSix');
let seven = document.getElementById('boxSeven');
let eight = document.getElementById('boxEight');
let nine = document.getElementById('boxNine');
let ten = document.getElementById('boxTen');
let eleven = document.getElementById('boxEleven');
let twelve = document.getElementById('boxTwelve');

let desOne = document.getElementById('htmlDes');
let desTwo = document.getElementById('cssDes');
let desThree = document.getElementById('javaScriptDes');
let desFour = document.getElementById('jQueryDes');
let desFive = document.getElementById('terminalDes');
let desSix = document.getElementById('gitDes');
let desSeven = document.getElementById('gitHubDes');
let desEight = document.getElementById('reactDes');
let desNine = document.getElementById('pythonDes');
let desTen = document.getElementById('phpDes');
let desEleven = document.getElementById('javaDes');
let desTwelve = document.getElementById('cSharpDes');

desOne.hidden = true;
desTwo.hidden = true;
desThree.hidden = true;
desFour.hidden = true;
desFive.hidden = true;
desSix.hidden = true;
desSeven.hidden = true;
desEight.hidden = true;
desNine.hidden = true;
desTen.hidden = true;
desEleven.hidden = true;
desTwelve.hidden = true;

one.onmouseover = function() {
    desOne.hidden = false; 
    one.onmouseout = function() {
        desOne.hidden = true;
    } 
}

two.onmouseover = function() {
    desTwo.hidden = false;
    two.onmouseout = function() {
        desTwo.hidden = true;
    }
}

three.onmouseover = function() {
    desThree.hidden = false;
    three.onmouseout = function() {
        desThree.hidden = true;
    }
}

four.onmouseover = function() {
    desFour.hidden = false;
    four.onmouseout = function() {
        desFour.hidden = true;
    }
}

five.onmouseover = function() {
    desFive.hidden = false;
    five.onmouseout = function() {
        desFive.hidden = true;
    }
}


six.onmouseover = function() {
    desSix.hidden = false;
    six.onmouseout = function() {
        desSix.hidden = true;
    }
}

seven.onmouseover = function() {
    desSeven.hidden = false;
    seven.onmouseout = function() {
        desSeven.hidden = true;
    }
}

eight.onmouseover = function() {
    desEight.hidden = false;
    eight.onmouseout = function() {
        desEight.hidden = true;
    }
}

nine.onmouseover = function() {
    desNine.hidden = false;
    nine.onmouseout = function() {
        desNine.hidden = true;
    }   
}

ten.onmouseover = function() {
    desTen.hidden = false;
    ten.onmouseout = function() {
        desTen.hidden = true;
    }
}

eleven.onmouseover = function() {
    desEleven.hidden = false;
    eleven.onmouseout = function() {
        desEleven.hidden = true;
    }
}

twelve.onmouseover = function() {
    desTwelve.hidden = false;
    twelve.onmouseout = function() {
        desTwelve.hidden = true;
    }
}
