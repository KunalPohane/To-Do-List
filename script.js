let dataarray = [];



const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');
const tasknumbers = document.querySelector('.tasknumber');
tasknumbers.innerHTML = `${dataarray.length} tasks left`


function numberoftasks() {

  tasknumbers.innerHTML = `${dataarray.length} tasks left`

}


function addtask() {
  if (inputbox.value === '') {
    alert("Write something!");
  } 
  else {
    let li = document.createElement('li');
    li.textContent = inputbox.value;
    let id = dataarray.length; // Assigning ids
    li.setAttribute('data-id', id);

    let span = document.createElement('span');
    span.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
    li.appendChild(span);

    listcontainer.appendChild(li);
    dataarray.push({ id: id, text: inputbox.value }); // Pushing object with id and text to array


  }
  inputbox.value = "";

  savelisttasks(dataarray);
  numberoftasks()
}

listcontainer.addEventListener("click", (event) => {
  if (event.target.tagName === "SPAN" || event.target.tagName === "I") {
    let id = event.target.parentElement.parentElement.dataset.id;

    console.log("id+ ===" + id)
    event.target.parentElement.parentElement.remove();
    removedata(id);
  } else {
    event.target.classList.toggle("checked");

    let crossIcon = event.target.querySelector('span');
    if (event.target.classList.contains('checked')) {
      crossIcon.style.display = 'none';
    } else {
      crossIcon.style.display = 'block';  //Visiblity of cross icon it can be inline- or inline block too
    }

    // console.log(event.target);
  }
}, false);

function savelisttasks(dataarray) {
  localStorage.setItem("dataarray", JSON.stringify(dataarray));
}

function removedata(id) {
  dataarray = dataarray.filter((item) => {
    return item.id != id;
  });
  numberoftasks();
  savelisttasks(dataarray);
}
