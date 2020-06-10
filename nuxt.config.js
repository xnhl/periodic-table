export default {
  mode: 'universal',
  loading: { color: '#fff' },
  env: {
    baseURL: 'http://localhost:3000'
  },
  generate: {
    routes: [
			'/'
		]
  },
  modules: [
    '@nuxtjs/style-resources',
  ],
  
  styleResources: {
    sass: [
      './assets/*.sass'
    ],
  },
  build: {
    extend (config, ctx) {
    },
    build: {
      postcss: {
        plugins: {
          'postcss-url': false,
          'postcss-nested': {},
          'postcss-responsive-type': {},
          'postcss-hexrgba': {}
        },
        preset: {
          autoprefixer: {
            grid: true
          }
        }
      }
    }
  }
}
