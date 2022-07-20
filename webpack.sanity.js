module.exports = function (config, options) {
  config.module.rules[0].exclude =
    /(node_modules|bower_components)\/(?!your-package-name)/
  return config
}
