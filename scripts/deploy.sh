#!/bin/bash

# To allow deployment for branches main (production) and develop (preview) only.

env

echo "Vercel Environment: ${ENV_NAME-undefined}"
echo "Current environment: ${VERCEL_ENV-undefined}"

[[ "$ENV_NAME" == "production" || "$ENV_NAME" == "development" ]] || {
  echo ">>> ❌ Deployment cancelled. Missing or invalid environment variables."
  exit 0
}

echo ">>> ✅ All checks passed. Proceeding with deployment."
exit 1