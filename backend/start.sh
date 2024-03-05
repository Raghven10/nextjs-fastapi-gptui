#!/usr/bin/env bash

python3 -m uvicorn main:app --host 0.0.0.0 --port 8080 --forwarded-allow-ips '*'
