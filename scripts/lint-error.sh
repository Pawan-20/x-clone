#!/bin/bash

# Run the format command
bun run format "$@"

# Check if the command succeeded
if [ $? -ne 0 ]; then
  echo
  echo "=================================================================="
  echo "|                                                                |"
  echo "|  ❌ COMMIT FAILED: Please fix the linting errors above         |"
  echo "|  ✅ Run 'bun run format' to automatically fix some issues      |"
  echo "|  🔎 Look for \"error\" in the output above to find critical issues|"
  echo "|                                                                |"
  echo "=================================================================="
  echo
  exit 1
fi

exit 0 