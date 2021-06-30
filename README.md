# Overview
This repo is used as code for the ACC website. It is currently using HTML, CSS, and JS for versatility across all browsers.

# Navigation Instructions on Athena
Code is located on Athena, in a MIT locker which can be accessed by `ssh`. Make sure you're on acc-www@mit.edu Moira List in order to edit.

1. ssh into the Athena server:

2. ssh `<kerb>@athena.dialup.mit.edu`  

3. Navigate to our directory where our codebase is hosted:
`cd /mit/org/acc/www`

4. Clone this repo onto local and make changes as needed and push to repo. `git pull` on athena server

# Testing on local server

## Basic html viewing (no server)
- Download this repo
- Open `index.html` file from repo in any browser
- Website should be seen but transitions and animations may be a bit rough since it's not on a server

## http-server npm package installation
 - Download this repo
 - If you have npm installed, go inside repo and install the package http-server via `npm i http-server`.
- After installed, run `http-server -c-1` in same directory and navigate to `localhost:8080`. The website should be seen.
 - [http-server package documentation](https://www.npmjs.com/package/http-server)

## Python's simple http local server
- Download this repo
- go into repo directory and run `python3 -m http.server`

## [Additional resources and help](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server)

# Link to ACC Website
[MIT Website](web.mit.edu/acc/www)
