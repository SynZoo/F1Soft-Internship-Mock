
const name = localStorage.getItem('user-name')
const artwork = JSON.parse(localStorage.getItem('artworks'))
const rating = JSON.parse(localStorage.getItem('rating'))
const table = document.getElementById("table")
const emptyTable = document.getElementById("empty-table")

const creators = JSON.parse(localStorage.getItem("creators")) || []

if (creators.length === 0) {
    table.remove()
    emptyTable.innerHTML = `<div class="empty-content" id="empty-table">No Creator available go to Add Creator section to
                                add creator or press the button below <br>
                                <button class="add-creator" onclick="addCreator(this)">Add Creator</button>
                            </div>`

    function addCreator(e) {
        window.location.href = "add-creator.html"
    }

} else {

    creators.forEach((creator, index) => {
        const insertTable = table.insertRow()
        const creatorName = insertTable.insertCell(0)
        const creatorArtwork = insertTable.insertCell(1)
        const creatorRating = insertTable.insertCell(2)

        creatorName.innerHTML = `<img class="user-display-image" src="Image/user8.png" alt="user profile picture">${creator.userName}`
        creatorArtwork.innerHTML = creator.artwork
        creatorRating.innerHTML = `<progress class="progress" value="${creator.rating}" max="100">`
    })
}


