#!/bin/bash
cd /home/kavia/workspace/code-generation/recipevault-49131-f434922a/recipevault_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

