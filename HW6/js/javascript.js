let btn = document.getElementById('addItem');
let getItem = document.getElementById('newItem');
let btnDelete = document.getElementsByClassName('btn-delete')


btn.addEventListener('click', function () {
    let inputValue = document.createTextNode(getItem.value);
    if (inputValue.nodeValue !== "") {
        let item = document.createElement('li');
        item.classList.add('item');
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn-delete');
        let checked = document.createElement('img');
        checked.setAttribute('src', 'img/tick.svg');
        let conteinerForDelBtn = document.createElement('div');
        conteinerForDelBtn.appendChild(deleteBtn);
        item.appendChild(checked);
        item.appendChild(inputValue);
        item.appendChild(conteinerForDelBtn);
        document.getElementById('list').appendChild(item);
        getItem.value = "";
    } else {
        alert('error');
    }
});


document.getElementById("list").addEventListener("click", function (e) {
    if (e.target && e.target.matches("li.item")) {
        console.log(e);
        e.path[0].style.background = "#3b3b3b";
        e.path[0].style.color = "#fff";
        e.path[0].style.textDecoration = "line-through";
        e.path[0].firstChild.style.opacity = 1;
        e.path[0].lastChild.children[0].classList.add('active');
    } else if (e.target.tagName === "BUTTON") {
        console.log(e);
        e.target.parentNode.parentNode.remove();
    }
});
