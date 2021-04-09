#! /bin/bash

PROJECT_ID=digital-ucdavis-edu
CONTAINER_NAME=intert-wine-leigh
DEPLOYMENT_NAME=intert-wine-leigh
IMAGE=gcr.io/$PROJECT_ID/$CONTAINER_NAME
APP_ENV=dev

BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
if [[ $BRANCH_NAME == 'main' ]]; then
  CONTAINER_NAME=intert-wine
  DEPLOYMENT_NAME=intert-wine
  APP_ENV=prod
  IMAGE=gcr.io/$PROJECT_ID/$CONTAINER_NAME
  APP_ENV=prod
fi

npm run dist

gcloud config set project digital-ucdavis-edu
gcloud builds submit --tag $IMAGE

gcloud beta run deploy $DEPLOYMENT_NAME \
  --image $IMAGE \
  --platform managed \
  --memory=1Gi \
  --region=us-central1 \
  --set-env-vars=APP_ENV=$APP_ENV,CLIENT_ENV=prod
