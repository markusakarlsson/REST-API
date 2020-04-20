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
        team: "New York Rangers"
    }, {
        id: 2,
        name: "Peter Forsberg",
        age:  46,
        position: "Center",
        team: "Retired"
    }, {
        id: 3,
        name: "Elias Pettersson",
        age:  21,
        position: "Center",
        team: "Vancouver Canucks"
    }, {
        id: 4,
        name: "Mats Sundin",
        age: 49,
        position: "Center",
        team: "Retired"
    }
]

// GET
app.get('/', (req, res) => {
    res.send('Welcome to the Hockeyplayer Database')
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
    const player = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        position: req.body.position,
        team: req.body.team,
    }

    if(!player) {
        res.status(404).send()
    } else {
        players.push(req.body).json
        res.status(201).send(player)
    }
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
        res.status(404).send('No player found on the given ID')
    } else {
        specificPlayer.name = req.body.name,
        specificPlayer.age = req.body.age,
        specificPlayer.position = req.body.position,
        specificPlayer.team = req.body.team,
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