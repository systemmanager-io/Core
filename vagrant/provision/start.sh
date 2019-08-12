#!/usr/bin/env bash

sudo apt-get update
sudo apt-get -y upgrade
sudo apt-get -y autoremove

#install some basic stuff
sudo apt-get -y install curl debconf-utils zip net-tools nginx apt-transport-https
