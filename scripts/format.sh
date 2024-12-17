#!/bin/bash

# For both Prettier and ESLint, we check that the files are correctly formatted. 
# If issues are found, we run the formatting script. If that fails, the stop the process.

# Prettier
echo ">>> 🔵 Prettier formatting verifications..."

npm run prettier-check || {
        echo ">>>❗Prettier has found code style issues. Solving them now..."

        npm run prettier-format || {
                echo ">>> ❌ Prettier formatting has failed. Aborting process. Please check the file list above and solve the code style issues."
                exit 1
        }

}
echo ">>> ✅ Prettier formatting successfull."


# ESLint
echo ">>> 🔵 ESLint formatting verifications..."

npm run eslint-check || {
        echo ">>>❗ESLint has found errors. Solving them now..."

        npm run eslint-format || {
                echo ">>> ❌ ESLint formatting has failed. Aborting process. Please check the list above and solve the detected problems."
                exit 1
        }

}
echo ">>> ✅ ESLint formatting successfull."
