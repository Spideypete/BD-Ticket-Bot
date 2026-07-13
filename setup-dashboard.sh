#!/bin/bash
set -e
cd /home/container
if [ ! -d "settings" ]; then
  git clone --depth 1 https://github.com/discord-tickets/settings.git
fi
cd settings
npm install
npm run build
cd /home/container
mkdir -p BD-Ticket-Bot/node_modules/@discord-tickets/settings
cp -r settings/build/* BD-Ticket-Bot/node_modules/@discord-tickets/settings/
cd BD-Ticket-Bot
node index.js
