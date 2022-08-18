function $id(id) {
    return document.getElementById(id);
}
function CE() {
    $id('result').value = 0;
}
function less() {
    if ($id('result').value < 10 && $id('result').value > 0) {
        CE();
    }
    else if ($id('result').value == 0) {

    }
    else {
        $id('result').value = $id('result').value.slice(0, $id('result').value.length - 1);
    }
}
function input(nbr) {
    if ($id('result').value == 0) {
        $id('result').value = nbr
    }
    else if (nbr == "(") {
        if (!($id('result').value[$id('result').value.length - 1] == '+' || $id('result').value[$id('result').value.length - 1] == '-' || $id('result').value[$id('result').value.length - 1] == '/' || $id('result').value[$id('result').value.length - 1] == '*' || $id('result').value[$id('result').value.length - 1] == '(')) {
            $id('result').value += '*' + nbr;
        }
        else {
            $id('result').value += nbr;
        }
    }
    else if (nbr == ')') {
        $id('result').value += nbr;
    }
    else if (nbr == '+' || nbr == '-' || nbr == '*' || nbr == '/') {
        der = $id('result').value[$id('result').value.length - 1];
        if (der == '+' || der == '*' || der == '-' || der == '/') {
            less();
            $id('result').value += nbr;
        }
        else {
            $id('result').value += nbr;
        }
    }
    else {
        if ($id('result').value[$id('result').value.length - 1] == ')') {
            $id('result').value += '*' + nbr;
        }
        else {
            $id('result').value += nbr;
        }
    }
}
function egale() {
    document.getElementById('result').value = eval(document.getElementById('result').value);
}