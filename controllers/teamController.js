const express = require('express');
const router = express.Router();
const teams = require('../models/teams');
const db = require('../models');

////// current paths imply '/teams'

router.get('/', (req, res) => {
    console.log('hitting path');
    res.render('allTeams', {teams: teams});
})

router.get('/:team', (req, res) => {
    let team = req.params.team;
    res.render('showTeam', {
        team: team,
        teams: teams
    })
})

router.delete('/:team', (req, res) => {
    teams.splice(req.params.team, 1);
    res.redirect('/teams');
})

router.get('/:team/edit', (req, res) => {
    res.render('edit', {
        teams: teams,
        team: req.params.team
    })
})

module.exports = router;
