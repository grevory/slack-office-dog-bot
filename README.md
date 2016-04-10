# Frisket 
## The Office Dog Chat Bot

Frisket is a [Slack](https://slack.com/) chat bot that listens to your conversations on Slack and responds or reacts like a dog. If you mention certain words he'll get excited. He'll talk back or fetch. He even knows how to use emoticons!

This bot is free to run but comes with limitations. If you plan to use the free tier on Heroku, the bot will sleep after an hour unless you actively ping the server.

Frisket is based on [Ein](https://github.com/jorydotcom/einbot "Original Ein Github repo"), which is a chat bot built off the [Hubot][hubot] framework intented to interact like a dog.

## Getting Started

### Dependencies
- [Git](https://git-scm.com/book/en/v2/Getting-Started-The-Command-Line)
- [Heroku Toolbelt](https://toolbelt.heroku.com/)

### Installation
Download a copy of the project. Open a terminal and change directory to where you wish to store the project.
```bash
git clone https://github.com/grevory/slack-office-dog-bot.git
cd slack-office-dog-bot
```

Install the projects dependecies
```bash
npm install
```

Test that Hubot is functioning as expected
```bash
bin/hubot
```

If it worked you should see "slacky> [Date]". There may be some errors and warnings but they may not be of consequence. Feel free to play with Hubot here.
```bash
slacky> slacky help
```

Exit out of Hubot (CTRL / CMD + C)

### Setup Server

If you are not already logged into Heroku on the command line
```bash
heroku login
```

### Deploy the Bot
```bash
git add .
git commit -am "Initial commite"
heroku create --stack cedar
heroku push heroku master
```

This will return the domain of your bot as hosted on Heroku. You will need to use this URL to wake your bot.

## Integrating the Bot with Slack

Login to Slack and got to https://slack.com/apps/build. Click on "Make a Custom Integration" and then "Bots".

Create a username for your bot. Might we recommend "@frisket"? Upload your photo. You can find one in this repo at ./frisket.png.

Copy the API Token and go back to your terminal window.

```bash
heroku config:set HUBOT_SLACK_TOKEN=xoxb-1234567890-XXXXXXXXXXXXXXXXXXX
```

Get the URL of your bot in case you forgot it.

```bash
heroku apps:info
```

To keep your bot from going to sleep

```bash
heroku config:set HUBOT_HEROKU_KEEPALIVE_URL=xxx-yyyy.herokuapp.com
```

## Troubleshooting

Look at `heroku logs` or try running `heroku restart`.

If you run into any problems, checkout the [Heroku docs](heroku-node-docs) or [Hubot docs](https://hubot.github.com/docs/).
