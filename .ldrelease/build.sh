#!/bin/bash

set -ue

sudo npm i -g corepack
node --version
npm -v

yarn && yarn check