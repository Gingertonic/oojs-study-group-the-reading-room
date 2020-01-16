class APIConnector {

    static get = path => {
        return (
            fetch(`http://www.nokeynoshade.party/api/${path}`)
                .then(resp => resp.json())
        )
    }

}