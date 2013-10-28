#!/bin/bash

SCRIPT_DIR=$(dirname $0)
cat ${SCRIPT_DIR}/les2MinutesData.js | grep series | cut -f 4 -d "\"" | sort | uniq -c
