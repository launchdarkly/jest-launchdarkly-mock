#!/bin/bash

set -ue

npm i -g corepack
node --version
npm -v

yarn && yarn check