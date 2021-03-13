// Functions
// onTileClick
function onTileClick(e){
    e.target.classList.add("clicked");
}

// create flipsides
let totalTiles = DATA.categories.reduce((total, category) => {
    return total + category.topics.length
}, 0)
console.log(totalTiles);

// get board element
const gameBoard = document.getElementById("game-board");

// append columns
DATA.categories.forEach(item => {
    // create column
    let column = document.createElement('div');
    column.classList.add("column")

    // create & append category to column
    let category = document.createElement("div");
    category.classList.add("category", "tile")
    category.innerHTML = item.category
    column.appendChild(category)

    let topicBox = document.createElement("topic-box");
    // create & append topics to topicsBox
    item.topics.forEach(topic => {
        let topicTile = document.createElement("div");
        topicTile.classList.add("topic", "tile")
        topicTile.innerHTML = topic
        topicTile.addEventListener("click", onTileClick);

        topicBox.appendChild(topicTile);
    })

    // append topicBox to column
    column.appendChild(topicBox);

    // append column to gameBoard
    gameBoard.appendChild(column)
})
