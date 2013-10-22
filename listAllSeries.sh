#!/bin/bash

SCRIPT_DIR=$(dirname $0)
cat ${SCRIPT_DIR}/les2MinutesData.js | grep series | sort | uniq | cut -f 4 -d "\""

