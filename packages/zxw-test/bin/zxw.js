#!/usr/bin/env node
const cliFun = async (argv) => {
  const { printLog } = require('../lib');
  try {
    await printLog();
  } catch (err) {
    console.error(err);
  }
};

const argv = process.argv.slice(2);
cliFun(argv);
