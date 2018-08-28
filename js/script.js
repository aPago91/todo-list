document.addEventListener("DOMContentLoaded", function(event) {
	console.log("DOM fully loaded and parsed");
	document.getElementById("add").addEventListener("click", function addTodo() {
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
			listDiv.setAttribute("id","btn");
			var btnEdit = document.createElement("button");
			btnEdit.setAttribute("class","Edit");
			var btnDelete = document.createElement("button");
			btnDelete.setAttribute("class","Delete");
			var btnDone = document.createElement("button");
			btnDone.setAttribute("class","Done");
		
			listItem.appendChild(listText);
			listText.textContent = myItem;
			listItem.appendChild(listDiv);
			listDiv.appendChild(btnEdit).textContent = 'Edit';
			listDiv.appendChild(btnDelete).textContent = 'Delete';
			listDiv.appendChild(btnDone).textContent = 'Done';
			list.appendChild(listItem);
		  
			listItem.addEventListener('click', function setButton(event) {
				var choice = event.target.className;

				switch (choice) {
					case 'Edit':
						if (listText.contentEditable == "true") {
							listText.contentEditable = "false";
						} else {
							listText.contentEditable = "true";
						}
						break;
					case 'Delete':
						list.removeChild(listItem);
						break;
					case 'Done':
						document.getElementsByTagName("ul")[0].getElementsByTagName("li")[0].style.color = "green";
						document.getElementsByTagName("ul")[0].getElementsByTagName("li")[0].style.fontWeight = "bold";
						document.getElementById("btn").remove();
						break;
					default:
				}
			})
		}
		else {
			console.log('Brak tekstu');
		}
	})
});