class App {

    run = () => {
        this.getAllQueens();
        this.addEventListeners();
    }

    getAllQueens = () => {
        APIConnector.get(`queens?limit=25`).then(this.addQueensToSidebar)
    }

    addQueensToSidebar = queens => {
        queens.forEach(queenData => {
            const queen = new Queen(queenData)
            DOMElements.queenIndex.innerHTML += queen.linkHTML();
        })
    }
    
    addEventListeners = () => {
        DOMElements.sidebar.addEventListener('click', this.handleSideClick)
    }

    handleSideClick = e => {
        e.preventDefault()
        if (e.target.className === "queen-li"){
            this.getQueen(e.target.dataset.id)
        }
    }

    getQueen = id => {
        APIConnector.get(`queens/${id}`).then(this.showQueen)
    }

    showQueen = queenData => {
        const chosenQueen = new Queen(queenData)
        DOMElements.main.innerHTML = chosenQueen.showHTML()
    }
}