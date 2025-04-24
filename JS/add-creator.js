const user = document.getElementById("user")
const artworks = document.getElementById("artworks")
const rating = document.getElementById("rating")
const addBtn = document.getElementById("add-btn")
const buttonChange = document.getElementById("button-change")


window.addEventListener("DOMContentLoaded", function () {
  const fromUpdate = localStorage.getItem("fromUpdate");

  if (fromUpdate === "true") {
    user.value = localStorage.getItem("name");
    artworks.value = localStorage.getItem("artwork");
    rating.value = localStorage.getItem("rating");

    buttonChange.innerHTML = `<input type="button" value="Update" id="update-btn">`

    localStorage.removeItem("fromUpdate")
    localStorage.removeItem("name");
    localStorage.removeItem("artwork");
    localStorage.removeItem("rating");
  }
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault()
  const userName = user.value
  const artWorks = artworks.value
  const ratingValue = parseInt(rating.value)

  if (!userName || !artWorks || ratingValue === 0) {
    alert("Please fill every attribute")
    return
  } else if (!userName.startsWith("@")) {
    alert("Username must start with @")
    return
  }

  const newCreator = {
    id: Date.now().toString(),
    userName,
    artwork: artWorks,
    rating: ratingValue,
  };

  const creators = JSON.parse(localStorage.getItem("creators")) || [];
  creators.push(newCreator);
  localStorage.setItem("creators", JSON.stringify(creators));

  window.location.href = "dashboard.html";

})

updateBtn.addEventListener("click", (e) => {
  e.preventDefault()

  const updateBtn = document.getElementById("update-btn")

  const userName = user.value
  const artWorks = artworks.value
  const ratingValue = parseInt(rating.value)

  if (!userName || !artWorks || ratingValue === 0) {
    alert("Please fill every attribute")
    return
  } else if (!userName.startsWith("@")) {
    alert("Username must start with @")
    return
  }

  const editId = localStorage.getItem("editId");
  let creators = JSON.parse(localStorage.getItem("creators")) || [];

  creators = creators.map((creator) =>
    creator.id === editId
      ? { ...creator, userName, artwork: artWorks, rating: ratingValue }
      : creator
  );

  localStorage.setItem("creators", JSON.stringify(creators));
  localStorage.removeItem("editId");
  localStorage.removeItem("fromUpdate");
  localStorage.removeItem("name");
  localStorage.removeItem("artwork");
  localStorage.removeItem("rating");

  window.location.href = "all-creators.html";
})