#!/usr/bin/env bash

for PACKAGE in \
  ng2-alfresco-core \
  ng2-alfresco-datatable \
  ng2-alfresco-documentlist \
  ng2-alfresco-login \
  ng2-alfresco-search \
  ng2-alfresco-upload \
  ng2-alfresco-viewer
do
  DESTDIR=././../ng2-components/${PACKAGE}
  echo "====== linking component: ${DESTDIR} ====="
  npm link ${DESTDIR} --access public
done

cd ./../demo-shell-ng2

for PACKAGE in \
  ng2-alfresco-core \
  ng2-alfresco-datatable \
  ng2-alfresco-documentlist \
  ng2-alfresco-login \
  ng2-alfresco-search \
  ng2-alfresco-upload \
  ng2-alfresco-viewer
do
  DESTDIR=././../ng2-components/${PACKAGE}
  echo "====== demo shell linking: ${PACKAGE} ====="
  npm link ${PACKAGE}
done