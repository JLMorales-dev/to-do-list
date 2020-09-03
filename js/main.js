
//add eventlistener to add btn
document.getElementById("add-btn")
.addEventListener('click', addTask);

function deleteTask(e) {
  var button = e.target;
  button.parentNode.remove();
}

function addTask() {
// grab value from task input field
var task = document.getElementById("task").value;
    
    if(!task) {
        alert('please add a task');
        return false;
    } else {
        // create a div element
        var div = document.createElement('div');
        // create a p element
        var p = document.createElement('p');
        // create button
        var btn = document.createElement('button');
        // grab parent for new div element and append div
        document.getElementById("task-wrapper").appendChild(div);
        //add class name to new div
        div.className = "tasks";
        //add p tag to div
        div.appendChild(p);
        // add task to p tag
        p.innerHTML = task;
        // add button to div
        div.appendChild(btn);
        btn.innerHTML = 'Delete';
        btn.className = 'btn btn-danger';
        btn.addEventListener('click', deleteTask);
        // Clear form
        document.getElementById('myForm').reset();
            }
}






