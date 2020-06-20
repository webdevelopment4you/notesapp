showNotes();

let addBtn = document.getElementById("addBtn").addEventListener("click",function(e)
{

    let addTxt = document.getElementById("addTxt");

    let addTitle = document.getElementById("addTitle");

    let notes = localStorage.getItem("notes");

    let titles = localStorage.getItem("titles");


    if(notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }


    if(titles == null)
    {
        titlesObj = [];
    }
    else
    {
        titlesObj = JSON.parse(titles);
    }




    notesObj.push(addTxt.value);
    titlesObj.push(addTitle.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    localStorage.setItem("titles",JSON.stringify(titlesObj));
    addTxt.value = "";
    addTitle.value = "";
    
    // console.log(notesObj);

    showNotes();

    

});

function showNotes()
{

    let notes = localStorage.getItem("notes");

    let titles = localStorage.getItem("titles");


    if(notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    if(titles == null)
    {
        titlesObj = [];
    }
    else
    {
        titlesObj = JSON.parse(titles);
    }

    
    let html = "";

    notesObj.forEach(function(element,index)
    {

        let myelement = titlesObj[index];

        html += `
        <div class="card my-2 mx-2 noteCard" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"> ${myelement} </h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick = "deleteNotes(this.id)" class="btn btn-primary dltNote">Delete Note</button>
        </div>
        <p id="date">

        </p>
    </div>
    `

    });

    


    let notesElm = document.getElementById("notes")
    
    if (notesObj.length != 0)
    {
        notesElm.innerHTML = html;
    }
    else
    {
        notesElm.innerHTML = `Your notes will appear here...`;
    }

    

}


function deleteNotes(index)
{

    // console.log("You are pressing delete");
    notesObj.splice(index,1);
    titlesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    localStorage.setItem('titles',JSON.stringify(titlesObj));

    showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener('input',function()
{

    let inputVal = search.value;
    // console.log("searching is taking place",inputVal);

    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText.toLowerCase();

        // console.log(cardTxt);

        if(cardTxt.includes(inputVal.toLowerCase()))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }

    })

})