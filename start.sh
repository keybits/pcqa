#!/bin/sh

set -e

sqlite3 /data/questions.sqlite3 < schema.sql
node ./build
