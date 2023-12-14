const tsConfigPaths = require('tsconfig-paths');

const baseUrl = './src'; // Replace with the correct path to your source code
const { paths } = require('./tsconfig.json').compilerOptions;

tsConfigPaths.register({
  baseUrl,
  paths,
});
