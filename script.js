let txt_area = document.getElementById("text-area");
let saved_notes = document.getElementById("saved-notes");
let sav_btn = document.getElementById("save-btn");
let del_btn = document.getElementById("delete-btn");
let viewBtn = document.createElement('button');
let Notes = [];
var get_localStorage = JSON.parse(localStorage.getItem("myNotes"));

const render_notes = (notes) => {
  // alert("code works");
  let listItems = "";
  // document.appendChild(viewBtn);
  for (let i = 0; i < notes.length; i++) {
    listItems += `
    <div class="notes-el">
      <div contentEditable="true">${notes[i]}</div>
    </div>`;
    saved_notes.innerHTML = listItems;
  }
};

if (get_localStorage) {
  Notes = get_localStorage;
  render_notes(Notes);
}

const SAVEBTN = () => {
  if (txt_area.value === "") {
    Swal.fire("Where's the note   🤔")
  } else {
    6
    Notes.push(txt_area.value);
    txt_area.value = "";
    localStorage.setItem("myNotes", JSON.stringify(Notes));
    render_notes(Notes);
  }
};

sav_btn.addEventListener("click", () => {
  SAVEBTN();
  render_notes(Notes);
});

del_btn.addEventListener('click', () => {
  Swal.fire('Deleting.....')
  location.reload()
  localStorage.clear();
    Notes = [];
    render_notes(Notes)
    location.reload();
    txt_area.placeholder = 'notes have been cleared'
})