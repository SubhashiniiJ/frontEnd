//selecting popupbox,popupoverlay,button


var popupoverlay = document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".pop-up")
var addpopupbutton=document.getElementById("add-popupbutton")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//selecting cancel button


var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(){
event.preventDefault()
popupoverlay.style.display="none"
popupbox.style.display="none"
})


//selecting container,add-book,booktitle,author,description

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var bookdescription = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h3>${bookauthor.value}</h3>
            <p>${bookdescription.value}</p>
            <button onclick="deleteitem(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//Deleting the container

function deleteitem(event)
{
    event.target.parentElement.remove()
}
