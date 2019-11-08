function subtotal() {
	var UnpoppedQuantity = document.getElementById("unpopped").value;
	var UnpoppedCost= 3 * UnpoppedQuantity;
	var CaramelQuantity = document.getElementById("caramel").value;
	var CaramelCost= 3.5 * CaramelQuantity;

	var CaramelNutQuantity = document.getElementById("caramel-nut").value;
	var CaramelNutCost= 4.5 * CaramelNutQuantity;

	var ToffeyQuantity = document.getElementById("toffey").value;
	var ToffeyCost = 5 * ToffeyQuantity;

	var PopcornCost = UnpoppedCost + CaramelCost + CaramelNutCost + ToffeyCost;
	if (PopcornCost < 3){
		alert("You entered in an incorrect value");
	}
	document.getElementById("sub-total").value = PopcornCost;

// nested grandtotal() here so it works
	var grandtotal = PopcornCost + PopcornCost*.07;
	document.getElementById("grand-total").value = grandtotal;

}

// function to add credit charge if necessary
function finished() {
	var payMethod = document.getElementById("check").checked;
	var grandtotal = parseFloat(document.getElementById("grand-total").value);

	if (payMethod === false) {
		grandtotal = grandtotal + 2.50;
		var confirmation = confirm("Credit cards incur an extra charge of $2.50.");
		if (confirmation === false) {
			grandtotal = grandtotal - 2.5;
			document.getElementById("check").checked = true;
			return false;
			}
		};
	document.getElementById("grand-total").value = grandtotal;
}
