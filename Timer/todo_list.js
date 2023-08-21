




const addBtn=document.querySelector("#addBtn");
const main=document.querySelector("#main");
addBtn.addEventListener("click",function(){
addNote();
})

//Self calling Function



const saveNotes=()=>{
const notes=document.querySelectorAll(".writin");
const data=[]
notes.forEach(
  (note)=>{
    data.push(note.value)
  }
)

// console.log(data)
if(data.length==0){
  localStorage.removeItem("notes")
}
else{
localStorage.setItem("notes",JSON.stringify(data))}
}

const addNote=(text="")=>{
  const Note=document.createElement("div");
  Note.classList.add("Note");
  Note.classList.add("card");
  Note.classList.add("my-4");
  Note.classList.add("mx-4");
  Note.style.width="18rem";
  Note.innerHTML=`
  <img src="https://source.unsplash.com/300x300/?notes" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title ml-4">Your Note</h5>
    <div class="input-group my-2">
      <div class="input-group-prepend updatenote" style="height: 200px;">
     
      <textarea class="ml-4 form-control writin" aria-label="With textarea"
      placeholder="Write Note Here" style="border:none; width: 100%; height: 100%; resize: none;">${text}</textarea>
    </div>
    </div>
   
    <div class="d-flex mx-4 justify-content-between">
      <a href="#" class="btn btn-primary save">Save</a>
      <a href="#" class="btn btn-primary trash">Delete</a>
    </div>

</div>
 `


Note.querySelector(".trash").addEventListener("click", function(){
  Note.remove();
  saveNotes();
})

Note.querySelector(".save").addEventListener("click", function(){
  saveNotes();
})

Note.querySelector(".writin").addEventListener("focusout", function(){saveNotes()})

main.appendChild(Note);
saveNotes();

}


function hi(){
  const lnotes=JSON.parse(localStorage.getItem("notes"));
  
  if(lnotes===null){
    addNote()
  }
  else{
    lnotes.forEach(
      (lsnote)=>{
   addNote(lsnote)
      }
    )
  }

}
hi();