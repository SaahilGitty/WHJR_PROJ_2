function margherita() {
    document.getElementById('marg').innerHTML = "$11.80";
}
function restore_margherita() {
    document.getElementById('marg').innerHTML = "More About Pizza Margherita";
}
function classic() {
    document.getElementById('clas').innerHTML = "$10.00";
}
function restore_classic() {
    document.getElementById('clas').innerHTML = "More about Classic Cheese Pizza";
}
function restore_bbq() {
    document.getElementById('bbq').innerHTML = "Make it home-made!";
}
function bbq() {
    document.getElementById('bbq').innerHTML = "$13.60";
}
function viewItems()
{
    var pizzaArray = ["Cheese Pizza", "Chicken BBQ Pizza", "Pepperoni Pizza", "Hawaiian Pizza"];
    var sidesArray = ["French Fries", "Garlic Bread"];
    var dessertsArray = ["Ice Cream", "Chocolate Cake", "Toffee Cake"];

    var sortedPArray = pizzaArray.sort();
    var sortedSArray = sidesArray.sort();
    var sortedDArray = dessertsArray.sort();

    document.getElementById('pizza1').innerHTML = sortedPArray[0]
    document.getElementById('pizza2').innerHTML = sortedPArray[1]
    document.getElementById('pizza3').innerHTML = sortedPArray[2]
    document.getElementById('pizza4').innerHTML = sortedPArray[3]

    document.getElementById('side1').innerHTML = sortedSArray[0]
    document.getElementById('side2').innerHTML = sortedSArray[1]
    
    document.getElementById('dessert1').innerHTML = sortedDArray[0]
    document.getElementById('dessert2').innerHTML = sortedDArray[1]
    document.getElementById('dessert3').innerHTML = sortedDArray[2]
}

function secret() {
    alert('You found the secret alert!')
}