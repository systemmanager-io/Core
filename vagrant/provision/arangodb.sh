#!/usr/bin/env bash

#get the arangoDB release key
curl -O --silent https://download.arangodb.com/arangodb34/DEBIAN/Release.key
sudo apt-key add - < Release.key
sudo rm Release.key

#add arangoDB repo
echo 'deb https://download.arangodb.com/arangodb34/DEBIAN/ /' | sudo tee /etc/apt/sources.list.d/arangodb.list
sudo apt-get update

#prepare arangoDB installation
echo "arangodb3 arangodb3/password_again password root" | sudo debconf-set-selections
echo "arangodb3 arangodb3/password password root" | sudo debconf-set-selections
echo "arangodb3 arangodb3/upgrade boolean true" | sudo debconf-set-selections
echo "arangodb3 arangodb3/backup boolean false" | sudo debconf-set-selections
echo "arangodb3 arangodb3/storage_engine select auto" | sudo debconf-set-selections

#install arangoDB
sudo apt-get -y install arangodb3

#update arangoDB web interface
sudo sed -i "s/^endpoint.*/endpoint = tcp:\/\/0.0.0.0:8529/" /etc/arangodb3/arangod.conf
sudo systemctl restart arangodb3

