const express = require('express');
const router = express.Router();
const db = require('../models');

////// current paths imply '/teams'

// render list of teams
router.get('/', (req, res) => {
    db.Team.find({}, (err, teams) => {
        err ? console.log(err) : res.render('allTeams', {teams: teams});
    })
})

// render new team form
router.get('/new', (req, res) => {
    res.render('new', {})
})

// post team from 'new'
router.post('/', (req, res) => {
    req.body.obnoxiousFans = !!req.body.obnoxiousFans;
    db.Team.create(req.body, (err, newTeam) => {
        err ? console.log(err) : res.redirect(`/teams/${newTeam.id}`);
    })
})

// render show team
router.get('/:team', (req, res) => {
    let teamIndex = req.params.team;
    db.Team.findById(teamIndex, (err, foundTeam) => {
        err ? console.log(err) : res.render('showTeam', {
            teamIndex: teamIndex,
            team: foundTeam
        })
    })
})

// delete team
router.delete('/:team', (req, res) => {
    db.Team.findByIdAndDelete(req.params.team, (err, dead) => {
        err ? console.log(err) : res.redirect('/teams');
    })
})

// render edit team
router.get('/:team/edit', (req, res) => {
    let teamIndex = req.params.team;
    db.Team.findById(teamIndex, (err, foundTeam) => {
        err ? console.log(err) : res.render('edit', {
            team: foundTeam,
            teamIndex: teamIndex
        })
    })
})

router.put('/:team', (req, res) => {
    req.body.obnoxiousFans = !!req.body.obnoxiousFans;
    db.Team.findByIdAndUpdate(req.params.team,
        req.body,
        {new: true},
        (err, team) => {
            err ? console.log(err) : res.redirect(`/teams/${req.params.team}`);
        })
})

module.exports = router;
