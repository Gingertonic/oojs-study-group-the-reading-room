class Queen {
    constructor(attrs){
        this.id = attrs.id,
        this.name = attrs.name,
        this.quote = attrs.quote,
        this.imageUrl = attrs.image_url
    }

    linkHTML = () => `<li class="queen-li" data-id="${this.id}">${this.name}</li>`
 }