#!/bin/bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

source /home/vscode/.nvm/nvm.sh

nvm install 22

 npm install -g npm@11.2.0