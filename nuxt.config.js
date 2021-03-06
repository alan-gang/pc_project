module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    server: {
        port: 5000, // default: 3000
    },
    router: {
        linkExactActiveClass: 'on',
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'custom',
                path: '*',
                component: resolve(__dirname, 'pages/404.vue')
            })
        },
        middleware: ['redirect'],
    },
    loading: { color: '#fff' },
    css: [
        'element-ui/lib/theme-chalk/index.css',
        './assets/font/iconfont.css',
        './static/css/reset.css'
    ],
    plugins: [
        { src: '@/plugins/element-ui', ssr: true },
        { src: '@/plugins/route', ssr: true },
        { src: '@/plugins/http', ssr: true },
    ],

    buildModules: [],
    modules: [
        '@nuxtjs/axios',
        "@nuxtjs/style-resources",
        '@nuxtjs/proxy'
    ],
    styleResources: {
        stylus: "./assets/css/mixin.styl"
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        proxy: true
    },
    proxy: {
        '/getAddress': {
            target: 'https://api.jisuapi.com',
            pathRewrite: {
                '^/getAddress': ''
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
        extractCSS: true
    }
}