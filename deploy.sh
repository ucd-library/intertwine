#! /bin/bash

PROJECT_ID=digital-ucdavis-edu
CONTAINER_NAME=intert-wine
DEPLOYMENT_NAME=leigh-intert-wine
IMAGE=gcr.io/$PROJECT_ID/$CONTAINER_NAME

gcloud builds submit --tag $IMAGE

gcloud beta run deploy $DEPLOYMENT_NAME \
  --image $IMAGE \
  --platform managed \
  --memory=1Gi \
  --set-env-vars=APP_ENV=prod
