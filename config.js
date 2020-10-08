const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://interviewprep.tiffanylea.com',
    gaTrackingId: 'UA-179487815-1',
    trailingSlash: false,
  },
  header: {
    logo: '/files/images/tiffany-lea__logo.svg',
    logoLink: 'https://interviewprep.tiffanylea.com/',
    title: '', // can be html
    githubUrl: 'https://github.com/tiffyzsmile/interviewprep-tiffanylea-com',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/tiffyzsmile" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='/files/images/twitter-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discord.gg/TJt3pBB" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='/files/images/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'interviewprep',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/algorithms', // add trailing slash if enabled above
      '/behavioral',
      '/coding',
      '/css',
      '/data-structures',
      '/dom',
      '/javascript',
      '/programming',
      '/random',
      '/react',
    ],
    links: [
      { text: 'Tiffany Lea', link: 'https://tiffanylea.com' },
      { text: 'Tiffany Lea - Docs', link: 'https://docs.tiffanylea.com' },
    ],
    frontline: false,
    ignoreIndex: true,
    title: 'Interview Prep',
    // "<a href='https://tiffanylea.com'>graphql </a><div class='greenCircle'></div><a href='https://tiffanylea.com'>react</a>",
  },
  siteMetadata: {
    title: 'Interview Prep | Tiffany Lea',
    description: 'Documentation to help ramp up for Tech Interviews.',
    ogImage: '/files/images/tiffany-lea__icon__black.svg',
    docsLocation: 'https://github.com/tiffyzsmile/interviewprep-tiffanylea-com/tree/master/content',
    favicon: '/files/images/tiffany-lea__icon__black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Interview Prep | Tiffany Lea',
      short_name: 'InterviewPrep',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
