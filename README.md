# tsc --init

#"scripts": {
    "clean": "rimraf dist",
    "build": "npm run clean && tsc && tsc-alias",
    "prod_start": "node --watch dist/index.js",
    "dev_start": "tsx --watch src/index.ts",
    "prod": "npm run build && npm run prod_start",
    "dev": "tsx --watch src/index.ts",
    "prepare": "husky"
  },

  dev
    "tsc-alias": "^1.8.16",
