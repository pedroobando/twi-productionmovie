module.exports = {
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Tailwind - Movi Production Landing Page'
      return args
    })
  }
}