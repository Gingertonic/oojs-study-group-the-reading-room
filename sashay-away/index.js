const sidebar = document.getElementById('sidebar')
const main = document.getElementById('main')
getAllQueens();
addEventListeners();


function getAllQueens(){
    fetch(`http://www.nokeynoshade.party/api/queens?limit=25`)
        .then(resp => resp.json())
        .then(addQueensToSidebar)
}

function addQueensToSidebar(queens){
    const queenIndex = document.getElementById("queen-index")
    queens.forEach(queen => {
        console.log(queen)
        queenIndex.innerHTML += `<li class="queen-li" data-id="${queen.id}">${queen.name}</li>`
    })
}
 
function addEventListeners(){
    console.log(`adding listeners`)
    sidebar.addEventListener('click', handleSideClick)
}

function handleSideClick(e) {
    console.log(`ouch!`)
    e.preventDefault()
    if (e.target.className === "queen-li"){
        getQueen(e.target.dataset.id)
    }
}

function getQueen(id){
    fetch(`http://www.nokeynoshade.party/api/queens/${id}`)
        .then(resp => resp.json())
        .then(showQueen)
}

function showQueen(queen){
    main.innerHTML = queenHTML(queen)
}

function queenHTML(queen){
    return (
        `
        <div>
            <h2>${queen.name}</h2>
            <p>${queen.quote}</p>
            <div>
                <img src="${queen.image_url}" alt="${queen.name}">
            <div>
        </div>
        `
    )
}