#!/usr/bin/env bash

set -ev

node --version
npm -v
sudo npm i -g corepack

yarn && yarn check