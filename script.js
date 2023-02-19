let addbtn = document.getElementById('but1');
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    console.log(notesobj);
    shownotes();
})
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
            <div class="note">
                <div class="nn">Note ${index+1}</div>
                <div class="sn">
                    <p>${element}</p>
                </div>
                <div class="db">
                    <button id =${index} onclick="deletenote(this.id)">Delete Note</button>
                </div>
            </div >
            `;
    });

    let noteselem = document.getElementById('notes');
    if(notesobj.length !=0){
        noteselem.innerHTML = html;
        document.querySelector(".con2").innerHTML = null;
    }
}
function deletenote(index){
    console.log("I am deleting.");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}

let search = document.getElementById('searchtxt');
search.addEventListener("input",function(){
    let inputval = search.value.toLowerCase();
    let notecards = document.getElementsByClassName('note');
    Array.from(notecards).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})