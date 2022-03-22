#!/bin/bash

set -ue

corepack enable

node --version
npm -v

yarn && yarn check