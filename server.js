const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const players = [
    {       
        id: 1,
        name: "Henrik Lundqvist",
        age:  38,
        position: "Goalkeeper",
        team: "New York Rangers",
    }, {
        id: 2,
        name: "Peter Forsberg",
        age:  46,
        position: "Center",
        team: "Colorado Avalanche",
    }, {
        id: 3,
        name: "Elias Pettersson",
        age:  21,
        position: "Center",
        team: "Vancouver Canucks",
    }, {
        id: 4,
        name: "Mats Sundin",
        age: 49,
        position: "Center",
        team: "Retired",
    }
]



// GET
app.get('/', (req, res) => {
    res.send('Welcome to the hockeyplayers database')
})

// GET all players
app.get('/players', (req, res) => {
    res.json(players)
})

// GET  a specific player by ID
app.get('/players/:playerId', (req, res) => {
    const specificPlayer = players.find((player) => {
        if(player.id.toString() === req.params.playerId) {
            return true
        } else {
            return false
        }
    })

    if(!specificPlayer) {
        res.status(404).send('No player found on the given ID')
    } else {
        res.send(specificPlayer)
    }
})

// POST Add a player
app.post('/players', (req, res) => {
    // if(!req.body.name || !req.body.age || !req.body.position || !req.body.team)
    //     return res.status(400).send('Name, age, position and team is required.')

    // const player = {
    //     id: players.length + 1,
    //     name: req.body.name,
    //     age: req.body.age,
    //     position: req.body.position,
    //     team: req.body.team,
    // }

    // players.push(player)
    // res.status(201).json(null)
    players.push(req.body).json
    res.status(201).json(null)
})

// PUT Update a specific player
app.put('/players/:playerId', (req, res) => {
    const specificPlayer = players.find((player) => {
        if(player.id.toString() === req.params.playerId) {
            return true
        } else {
            return false
        }
    })

    if(!specificPlayer) {
        res.status(404).json('No player found on the given ID')
    } else {
        player.name = req.body.name,
        player.age = req.body.age,
        player.position = req.body.position,
        player.team = req.body.team,
        res.send(specificPlayer)
    }
})

// DELETE a specific player
app.delete('/players/:playerId', (req, res) => {
    const specificPlayer = players.find((player) => {
        if(player.id.toString() === req.params.playerId) {
            return true
        } else {
            return false
        }
    })

    if (!specificPlayer) {
        res.status(404).send('No player found on the given ID')
    } else {
        const index = players.indexOf(specificPlayer)
        players.splice(index, 1)
        res.send(specificPlayer)
    }
})

app.listen(port, () => console.log(`Server is up and running! Listening on port ${port}.`))