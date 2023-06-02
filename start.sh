#!/bin/sh

set -e

sqlite3 /data/questions.sqlite3 < schema.sql
ORIGIN=https://pcqa.fly.dev node ./build
