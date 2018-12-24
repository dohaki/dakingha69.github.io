export const PAGES = [
  {
    to: '/about',
    name: 'ABOUT'
  },
  {
    to: '/blog',
    name: 'BLOG'
  },
  {
    to: '/contact',
    name: 'CONTACT'
  },
  {
    to: '/projects',
    name: 'PROJECTS'
  }
];

export const CATEGORIES = [
  'Javascript',
  'Ethereum',
  'Tools',
]

export const SKILLS = [
  {
    category: 'Javascript',
    name: 'ES6+',
    level: 85
  },
  {
    category: 'Javascript',
    name: 'TypeScript',
    level: 85
  },
  {
    category: 'Javascript',
    name: 'React / React Native',
    level: 80
  },
  {
    category: 'Javascript',
    name: 'Node.js',
    level: 70
  },
  {
    category: 'Tools',
    name: 'Git',
    level: 75
  },
  {
    category: 'Tools',
    name: 'Travis CI',
    level: 60
  },
  {
    category: 'Tools',
    name: 'Docker',
    level: 60
  },
  {
    category: 'Ethereum',
    name: 'Solidity',
    level: 70
  },
  {
    category: 'Ethereum',
    name: 'Truffle Framework',
    level: 80
  },
  {
    category: 'Ethereum',
    name: 'web3.js',
    level: 85
  },
];

// keywords
const REACT = 'react'
const GATSBY = 'gatsby'

const TYPE_SCRIPT = 'typescript'

const ETHEREUM = 'ethereum'
const WEB3 = 'web3'
const TRUFFLE = 'truffle'
const SOLIDITY = 'solidity'

const SCIENTIFIC_PAPER = 'scientific paper'

export const PROJECTS = [
  {
    title: 'dongha.kim',
    description: 'My personal website built with react. I used gatsby for generating the static files.',
    keywords: [REACT, GATSBY],
    links: {
      github: 'https://github.com/dakingha69/dakingha69.github.io',
      url: 'dongha.kim',
    }
  },
  {
    title: 'trustlines.network clientlib',
    description: 'People powered money - Ethereum based social credit protocol, where I contributed a lot to the TypeScript client library.',
    keywords: [ETHEREUM, WEB3, TYPE_SCRIPT],
    links: {
      github: 'https://github.com/trustlines-network/clientlib'
    }
  },
  {
    title: 'CITES Blockchain Challenge',
    description: '',
    keywords: [ETHEREUM, WEB3, TRUFFLE, SOLIDITY],
    links: {
      github: 'https://github.com/cites-on-blocks/cites-on-blocks_dapp'
    }
  },
  {
    title: 'CITES Blockchain Challenge Paper',
    description: '',
    keywords: [ETHEREUM, SCIENTIFIC_PAPER],
    links: {
      file: ''
    }
  },
  {
    title: 'Chances and Challenges of DApps',
    description: 'My Bachelor thesis I wrote at the Technical University of Darmstadt. Unfortunately it is only available in german.',
    keywords: [ETHEREUM, SCIENTIFIC_PAPER],
    links: {
      file: ''
    }
  }
];
