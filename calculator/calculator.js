function dis(val) {
    document.getElementById("calc1").value += val
}
//function for evaluation
function solve() {
    let x = document.getElementById("calc1").value
    let y = eval(x)
    document.getElementById("calc1").value = y
}
//function for clearing the display
function clr() {
    document.getElementById("calc1").value = ""
}