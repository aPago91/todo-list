 document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
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
		var listDiv = document.createElement ('div');
		listDiv.setAttribute("id","btn")
		var btnEdit = document.createElement("button");
		btnEdit.setAttribute("class","Edit")
		var btnDelete = document.createElement("button");
		btnDelete.setAttribute("class","Delete")
		var btnDone = document.createElement("button");
		btnDone.setAttribute("class","Done")
		
		listItem.appendChild(listText);
		listText.textContent = myItem;
		listText.appendChild(listDiv);
		listDiv.appendChild(btnEdit);
		btnEdit.textContent = 'Edit';
		listDiv.appendChild(btnDelete);
		btnDelete.textContent = 'Delete';
		listDiv.appendChild(btnDone);
		btnDone.textContent = 'Done';
		list.appendChild(listItem);
		
		var select = document.querySelector('todo');
		select.addEventListener('change', setButton);

		function setButton(event) {
			var choice = event.target.className;

			switch (choice) {
				case 'Edit':
					function myFunction() {
					listText.contentEditable = true;
					}
					break;
				case 'delete':
						
					break;
				case 'done':
					break;
				default:
			}
		} 
	}
		else {
			console.log('Brak tekstu');
		}
})
 });