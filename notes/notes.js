console.log('Welcome to notes app. This is app.js');

//If user adds a note, add it to the local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj =[];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.Value);
    localStorage.setItem("notes", JSON.stringify(notesObj
        ));
    addTxt.Value="";
    console.log(notesObj);
})