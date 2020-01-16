class Queen {
    constructor(attrs){
        this.id = attrs.id,
        this.name = attrs.name,
        this.quote = attrs.quote,
        this.imageUrl = attrs.image_url
    }

    linkHTML = () => `<li class="queen-li" data-id="${this.id}">${this.name}</li>`

    showHTML = () => {
       return ( `
            <div>
                <h2>${this.name}</h2>
                <p>${this.quote}</p>
                <div>
                    <img src="${this.imageUrl}" alt="${this.name}">
                <div>
            </div>
        `)
    }
}