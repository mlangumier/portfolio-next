#!/bin/bash

# To allow deployment for branches main (production) and develop (preview) only.

echo "Current environment: ${ENV_NAME-undefined}"
echo "Vercel Environment: ${VERCEL_ENV-undefined}"

[[ "$ENV_NAME" == "production" || "$ENV_NAME" == "development" ]] || {
  echo "❌ Deployment cancelled. Missing or invalid environment variables."
  exit 0
}

echo "✅ Environment confirmed. Proceeding with deployment."
exit 1