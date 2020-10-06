const express = require('express');
const router = express.Router();
const teams = require('../models/teams');
const db = require('../models');

////// current paths imply '/teams'

// render list of teams
router.get('/', (req, res) => {
    res.render('allTeams', {teams: teams});
})

// render new team form
router.get('/new', (req, res) => {
    res.render('new', {})
})

// post team from 'new'
router.post('/', (req, res) => {
    console.log('firing')
    req.body.obnoxiousFans = !!req.body.obnoxiousFans;
    teams.push(req.body);
    res.redirect(`/teams/${teams.length - 1}`);
})

// render show team
router.get('/:team', (req, res) => {
    let teamIndex = req.params.team;
    res.render('showTeam', {
        teamIndex: teamIndex,
        team: teams[teamIndex]
    })
})

// delete team
router.delete('/:team', (req, res) => {
    teams.splice(req.params.team, 1);
    res.redirect('/teams');
})

// render edit team
router.get('/:team/edit', (req, res) => {
    let teamIndex = req.params.team;
    res.render('edit', {
        teams: teams,
        team: teams[req.params.team],
        teamIndex: teamIndex
    })
})

router.put('/:team', (req, res) => {
    req.body.obnoxiousFans = !!req.body.obnoxiousFans;
    teams.splice(req.params.team, 1, req.body);
    res.redirect(`/teams/${req.params.team}`);
})

module.exports = router;
