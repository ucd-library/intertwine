#! /bin/bash

PROJECT_ID=digital-ucdavis-edu
CONTAINER_NAME=intert-wine-leigh
DEPLOYMENT_NAME=intert-wine-leigh
IMAGE=gcr.io/$PROJECT_ID/$CONTAINER_NAME

gcloud builds submit --tag $IMAGE

gcloud beta run deploy $DEPLOYMENT_NAME \
  --image $IMAGE \
  --platform managed \
  --memory=1Gi \
  --region=us-central1 \
  --set-env-vars=APP_ENV=prod
  
