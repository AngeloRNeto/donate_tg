#!/bin/bash
apt-get update -y
apt-get install curl -y
cd ~
curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
bash nodesource_setup.sh 
apt-get install nodejs -y
node -v
npm -v
apt-get install build-essential -y
apt-get install git -y
cd ~
git clone https://github.com/AngeloRNeto/donate.git
npm install pm2@latest -g
cd donate 
npm install
pm2 start --name donate-process npm -- start