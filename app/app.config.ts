export default defineAppConfig({
  docus: {
    name: 'Yieldra',
    description: 'Full-stack DeFi solution - DEX, lending, launchpad, and more',
    url: 'https://docs.yieldra.io',
    socials: {
      github: 'https://github.com/yieldra-protocol',
      x: 'https://x.com/YieldraProtocol',
    },
    header: {
      logo: true
    },
    footer: {
      credits: {
        text: '© Yieldra Protocol',
        href: 'https://yieldra.io'
      },
      iconLinks: []
    }
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'zinc'
    }
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  }
})
