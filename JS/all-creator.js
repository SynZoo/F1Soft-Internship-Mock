function renderTable() {
  // table.innerHTML = "";
  const creators = JSON.parse(localStorage.getItem("creators")) || [];

  creators.forEach((creator) => {
    const insertTable = table.insertRow();
    const creatorName = insertTable.insertCell(0);
    const creatorArtwork = insertTable.insertCell(1);
    const creatorRating = insertTable.insertCell(2);
    const button = insertTable.insertCell(3);

    creatorName.innerHTML = `<img class="user-display-image" src="Image/user8.png" alt="user profile picture">${creator.userName}`
    creatorArtwork.innerHTML = creator.artwork
    creatorRating.innerHTML = `<progress class="progress" value="${creator.rating}" max="100"></progress>`
    button.innerHTML = `<div class="button-group">
    <button title="Delete" class="delete-btn" onclick="deleteRow(this)" data-userid="${creator.id}">
    <svg class="active-svg delete-btn" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 -0.5 21 21" version="1.1" >

    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

    <g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1"  fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" > <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g>

    </svg>
    </button>
    <button class="update-btn" title="Edit" onclick="updateRow(this)" data-userid="${creator.id}">
    <svg class="active-svg update-btn" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 -0.5 21 21" version="1.1" >

    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

    <g id="SVGRepo_iconCarrier"> <title>edit [#1479]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1"  fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-99.000000, -400.000000)" > <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M61.9,258.010643 L45.1,258.010643 L45.1,242.095788 L53.5,242.095788 L53.5,240.106431 L43,240.106431 L43,260 L64,260 L64,250.053215 L61.9,250.053215 L61.9,258.010643 Z M49.3,249.949769 L59.63095,240 L64,244.114985 L53.3341,254.031929 L49.3,254.031929 L49.3,249.949769 Z" id="edit-[#1479]"> </path> </g> </g> </g> </g>

    </svg>
    </button>
    </div>`
    
    button.querySelector(".delete-btn").addEventListener("click", () => {
      const users = JSON.parse(localStorage.getItem("creators")) || [];
      const newUsers = users.filter((user) => user.id !== creator.id);
      localStorage.setItem("creators", JSON.stringify(newUsers));
      renderTable();
      location.reload()
    });

    button.querySelector(".update-btn").addEventListener("click", () => {
      localStorage.setItem("editId", creator.id);
      localStorage.setItem("fromUpdate", "true");
      localStorage.setItem("name", creator.userName);
      localStorage.setItem("artwork", creator.artwork);
      localStorage.setItem("rating", creator.rating);
      window.location.href = "add-creator.html";
    });
  });
}

renderTable();

// function deleteRow(e) {
//   if (confirm("Do you really want to delete this creator?")) {

//     creators.splice(e, 1)
//     localStorage.setItem("creators", JSON.stringify(creators))
//     renderTable()
//   }

//   window.location.href = "all-creators.html"
// }

// function updateRow(e) {
//   // const selectedRow = e.closest("tr");
//   // const name = selectedRow.children[0].innerText;
//   // const artwork = selectedRow.children[1].innerText;
//   // const rating = selectedRow.children[2].children[0].value;

//   console.log();

//   localStorage.setItem("fromUpdate", "true");
//   localStorage.setItem("name", name);
//   localStorage.setItem("artwork", artwork);
//   localStorage.setItem("rating", rating);

//   // creators.splice(e, 1)
//   // localStorage.setItem("creators", JSON.stringify(creators))

//   // window.location.href = "add-creator.html";
// }

