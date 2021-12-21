import figlet from 'figlet';
import chalk from 'chalk';

export function printLog() {
  return new Promise((resolve, reject) => {
    const { version } = require('../package.json');
    figlet('WiNEX CLI', (err, data) => {
      if (err) {
        reject(err);
      }
      console.log(
        chalk.hex('#165dff').bold(
          `
                ${data}
                                              v${version}\n
        `
        )
      );
      resolve(true);
    });
  });
}
