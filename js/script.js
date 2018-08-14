document.getElementById("add").addEventListener("click", function () {
	var value = document.getElementById('item').value;
	if (value) {
		console.log('Dodano nowe zadanie!');
	} else {
		console.log('Brak tekstu');
	}
});