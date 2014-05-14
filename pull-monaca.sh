#!/bin/bash
WEBDAV_DIR=~/webdav/camereco/
rsync \
  $WEBDAV_DIR \
  monaca/ \
  -razv \
  --exclude 'lost+found' \
  --exclude '/.*'
