module.exports = {
  siteTitle: 'Bidyashish Kumar | Software Engineer',
  siteDescription:
    'Bidyashish Kumar is a software Developer, who specializes in building exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Bidyashish Kumar, Bidyashish, Kumar, Full stack Developer, software engineer, front-end engineer, web developer, javascript, react js, typescript, Asp.net, Azure, Amazon AWS',
  siteUrl: 'https://bidyashish.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-67693524-2',
  googleVerification: 'Rtn00W6EqArggyPlPStVvbzHXomklftcJ04rkPs2DXI',
  name: 'Bidyashish Kumar',
  location: 'Canada',
  email: 'bidya@bidyashish.com',
  github: 'https://github.com/bidyashish',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/bidyashish',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/bidyashish',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
