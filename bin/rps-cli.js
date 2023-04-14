#!/usr/bin/env node

import minimist from "minimist"
import { rps } from "../lib/rpsls.js"

const argv = minimist(process.argv.slice(2))

if(argv.h||argv.help) {
    helpMessage();
    exit.process(0);
}

if(argv.r||argv.rules) {
    rulesMessage();
    exit.process(0);
}

function helpMessage() {
    console.log('Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}')
}

function rulesMessage() {
    console.log('Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors')
}

let playerShot = argv._[0];

try{
    console.log(JSON.stringify(rps(playerShot)))
} catch(e) {
    helpMessage();
    rulesMessage();
}