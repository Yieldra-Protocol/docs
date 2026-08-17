// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {
    studio: false,
  },
  compatibilityDate: '2026-08-01',
  modules: ["nuxt-studio"],
  content: {
    database: {
      type: 'd1',
      bindingName: 'DB',
    },
  },
  site: {
    name: 'Yieldra',
    url: 'https://docs.yieldra.io',
  },
  studio: {
    repository: {
      provider: 'github',
      owner: 'yieldra-protocol',
      repo: 'docs',
      branch: 'main',
      private: false,
    },
  },
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      nodeCompat: true,
      deployConfig: true,
      wrangler: {
        account_id: '05cd3f209ea6ff22579021fec2523a6e',
        compatibility_date: '2026-08-01',
        name: 'yieldra-docs',
        workers_dev: true,
        d1_databases: [
          {
            binding: 'DB',
            database_name: 'yieldra-docs-content',
            database_id: '31fcc350-b8dd-496e-ac7d-2cff36881ffe',
          },
        ],
        routes: [
          {
            pattern: 'docs.yieldra.io',
            custom_domain: true,
          },
        ],
        observability: {
          enabled: true,
        },
      },
    },
  },
  routeRules: {
    '/overview': { redirect: '/getting-started/overview' }
  }
})