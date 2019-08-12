#!/usr/bin/env bash

#install Node
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

#install pm2
sudo npm install -g pm2 foxx-cli yarn
