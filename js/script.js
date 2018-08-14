document.getElementById("add").addEventListener("click", function () {
	var value = document.getElementById('item').value;
	var list = document.getElementById('todo');
	var input = document.querySelector('input');
	if (value) {
		console.log('Dodano nowe zadanie!');
		var myItem = input.value;
		input.value = '';
		        
		var listItem = document.createElement('li');
		var listText = document.createElement('span');
		
		listItem.appendChild(listText);
		listText.textContent = myItem;
		list.appendChild(listItem);
    
		
		
	} else {
		console.log('Brak tekstu');
	}
});