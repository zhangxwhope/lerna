export default {
  target: 'node',
  nodeVersion: 12,
  cjs: {
    type: 'babel',
    lazy: true
  },
  disableTypeCheck: true,
  pkgs: ['zxw-test']
};
