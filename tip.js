function calcTip() {
	var subtotalElem = document.getElementById('subtotal');
	var tipElem = document.getElementById('tip');
	var totalElem = document.getElementById('total');
	var subtotal = parseInt(subtotalElem.value);
	var tip = parseInt(tipElem.value);
	var total = (tip/100.0) * subtotal;
	totalElem.innerHTML = '$' + total;
}