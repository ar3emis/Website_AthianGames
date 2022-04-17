module.exports = {
  plugins: [
    require("postcss-import")({
      path: ["assets/css"]
    }),
    require("cssnano")({
      preset: ['default', {
        discardComments: {
            removeAll: true
        },
        cssDeclarationSorter:{
          order: 'smacss'
        }
    }]
    }),
    require("autoprefixer")({
      grid: true,
      overrideBrowserslist: [
        "Android 2.3",
        "Android >= 4",
        "Chrome >= 20",
        "Firefox >= 24",
        "Explorer >= 8",
        "iOS >= 6",
        "Opera >= 12",
        "Safari >= 6"
      ]
    }),
       
  ]
};