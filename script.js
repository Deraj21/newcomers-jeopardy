//////////////
// Functions

// onTileClick
function onTileClick(e){
    // console.log(e.target);
    e.target.parentNode.parentNode.classList.add("flipped");
}

function shuffle(arr){
    let m = arr.length
    let i
    let temp
  
    while (m){
        // choose random in arr
        i = Math.floor(Math.random() * m)
        m--
  
        // swap it with the back
        temp = arr[m]
        arr[m] = arr[i]
        arr[i] = temp
    }
}

// create flipside text
let totalTiles = DATA.categories.reduce((total, category) => {
    return total + category.topics.length
}, 0)

let flipsides = [ ...DATA.flipsides ]
let l = flipsides.length
for (let i = 0; i < totalTiles - l; i++){
    flipsides.push("");
}
shuffle(flipsides);

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

    let topicsBox = document.createElement("div");
    topicsBox.classList.add("topics-box")
    // create & append topics to topicsBox
    item.topics.forEach(topic => {
        // front
        let title = document.createElement("p")
        title.className = "title"
        title.innerHTML = topic        
        let front = document.createElement("div");
        front.className = "front tile side"
        front.appendChild(title)
        
        // back
        let text = document.createElement("p")
        text.innerHTML = flipsides.pop()
        text.className = "text"
        let back = document.createElement("div");
        back.className = "back tile side"
        back.appendChild(title.cloneNode(true))
        back.appendChild(text)

        // inner
        let topicInner = document.createElement("div");
        topicInner.classList.add("topic-inner")
        topicInner.appendChild(front)
        topicInner.appendChild(back)
        
        // outer
        let topicOuter = document.createElement("div");
        topicOuter.classList.add("topic-outer")
        topicOuter.addEventListener("click", onTileClick);
        topicOuter.appendChild(topicInner)

        topicsBox.appendChild(topicOuter);
    })

    // append topicsBox to column
    column.appendChild(topicsBox);

    // append column to gameBoard
    gameBoard.appendChild(column)
})
