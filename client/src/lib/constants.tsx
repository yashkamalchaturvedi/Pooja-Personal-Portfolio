import blockActionImage from "@/assets/image_1751764859130.png";

export const PROJECTS = [
  {
    id: 1,
    title: "Avarch LLC",
    description: "Founded in 2017, Avarch LLC focuses on blockchain awareness and education through multiple projects including EtherWorld, BlockAction, and EIPsInsight.",
    tags: ["Blockchain Education", "Company", "Multiple Projects"],
    link: "https://avarch.org/",
    github: "https://github.com/Avarch-org",
    image: "https://avarch.org/img/icons/Avarch.gif"
  },
  {
    id: 2,
    title: "EtherWorld",
    description: "One of the leading blockchain publishing websites, creating awareness about blockchain technology through technical content, project updates, and latest news since 2017.",
    tags: ["Publishing", "Technical Content", "Blockchain News"],
    link: "https://www.etherworld.co/",
    github: "https://github.com/etherworld-co",
    image: "https://etherworld.co/favicon.ico"
  },
  {
    id: 3,
    title: "Ethereum Cat Herders",
    description: "Decentralized project management group supporting Ethereum Protocol development. As Herder-in-Chief, coordinating network upgrades and protocol development.",
    tags: ["Protocol Coordination", "Project Management", "Network Upgrades"],
    link: "https://www.ethereumcatherders.com/",
    github: "https://github.com/ethereum-cat-herders",
    image: "/ech-logo.png"
  },
  {
    id: 4,
    title: "BlockAction Explorer",
    description: "Blockchain wallet and transaction platform by Avarch in association with BitsBeat, providing secure wallet creation, real-time transaction status, and simplified cryptocurrency transactions for Ethereum and Bitcoin.",
    tags: ["Blockchain Wallet", "Cryptocurrency", "Secure Transactions"],
    link: "https://avarch.org/blockaction.html",
    github: null,
    image: blockActionImage
  },

  {
    id: 5,
    title: "EIPsInsight",
    description: "Data analytics dashboard for EIPs, providing comprehensive statistics and insights for Ethereum Improvement Proposals. Publishing monthly EIPs statistics reports.",
    tags: ["Data Analytics", "EIP Statistics", "Dashboard"],
    link: "https://eipsinsight.com/",
    github: null,
    image: "/eipsinsight-logo.png"
  },

  {
    id: 6,
    title: "Women in Ethereum Protocol (WiEP)",
    description: "Initiative focused on increasing diversity and participation of women in Ethereum protocol development, fostering inclusive community building and mentorship programs.",
    tags: ["Diversity", "Community Building", "Mentorship"],
    link: "https://x.com/wiepteam",
    github: null,
    image: "/wiep-logo.png"
  }
];

export const CONTRIBUTIONS = [
  {
    id: 1,
    title: "Berlin Hard Fork",
    description: "Coordinated testing and community outreach for Berlin upgrade featuring gas cost optimizations and repricing of opcodes.",
    date: "April 2021",
    side: "left"
  },
  {
    id: 2,
    title: "London Hard Fork",
    description: "Led coordination efforts for EIP-1559 implementation, introducing the base fee mechanism and ETH burning to Ethereum mainnet.",
    date: "August 2021",
    side: "right"
  },
  {
    id: 3,
    title: "Altair Beacon Chain Upgrade",
    description: "Facilitated coordination between client teams for the first major Beacon Chain upgrade introducing sync committees.",
    date: "October 2021",
    side: "left"
  },
  {
    id: 4,
    title: "Arrow Glacier & Gray Glacier",
    description: "Coordinated difficulty bomb delays to provide additional time for thorough Merge preparation and testing.",
    date: "December 2021 - June 2022",
    side: "right"
  },
  {
    id: 5,
    title: "The Merge",
    description: "Project managed Ethereum's historic transition from Proof of Work to Proof of Stake, coordinating extensive testing and community preparation.",
    date: "September 2022",
    side: "left"
  },
  {
    id: 6,
    title: "Capella (Shanghai) Upgrade",
    description: "Coordinated the upgrade enabling validator withdrawals from the Beacon Chain, completing the Proof of Stake transition.",
    date: "April 2023",
    side: "right"
  },
  {
    id: 7,
    title: "Cancun-Deneb Upgrade",
    description: "Led coordination for proto-danksharding (EIP-4844) implementation, dramatically reducing Layer 2 transaction costs.",
    date: "March 2024",
    side: "left"
  },
  {
    id: 8,
    title: "Pectra Upgrade",
    description: "Currently coordinating the upcoming upgrade combining Prague and Electra, featuring account abstraction and validator experience improvements.",
    date: "2024-2025",
    side: "right",
    upcoming: true
  }
];

export const MEDIA_ITEMS = [
  {
    id: 1,
    title: "Protocol Coordination: Lessons from Ethereum Cat Herders",
    type: "Devcon VI - Bogotá",
    description: "Presentation on effective coordination strategies for decentralized protocol development and community management",
    date: "October 2022",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://archive.devcon.org/archive/watch/6/protocol-coordination-lessons-from-ethereum-cat-herders/?tab=YouTube"
  },
  {
    id: 2,
    title: "All Core Devs Meeting Facilitation",
    type: "Ethereum Protocol Development",
    description: "Regular hosting and coordination of Ethereum All Core Developers meetings for protocol development discussions",
    date: "Ongoing",
    url: "https://github.com/ethereum/pm",
    image: "https://github.com/ethereum.png"
  },
  {
    id: 3,
    title: "Women in Ethereum Protocol (WiEP) Panel",
    type: "EthCC Paris",
    description: "Panel discussion on increasing diversity and inclusion in Ethereum protocol development and core infrastructure",
    date: "July 2023",
    url: "https://www.youtube.com/ethcc",
    image: "https://ethcc.io/assets/img/ethcc-logo.png"
  },
  {
    id: 4,
    title: "EIP Process and Standards Development",
    type: "Ethereum Magicians",
    description: "Regular presentations and discussions about EIP standardization process and best practices for proposal authors",
    date: "Ongoing",
    url: "https://ethereum-magicians.org/",
    image: "https://ethereum-magicians.org/uploads/default/original/2X/c/c8b4b5b3b5b3b5b3b5b3b5b3b5b3b5b3b5b3b5b3.png"
  },
  {
    id: 5,
    title: "Ethereum Research Podcast Appearances",
    type: "Podcast Interviews",
    description: "Featured guest on various Ethereum and blockchain research podcasts discussing protocol upgrades and coordination",
    date: "Various",
    url: "https://etherworld.co/",
    image: "https://etherworld.co/favicon.ico"
  },
  {
    id: 6,
    title: "Hard Fork Coordination Webinars",
    type: "Community Education",
    description: "Educational webinars explaining upcoming Ethereum hard forks, their implications, and preparation requirements",
    date: "Regular",
    url: "https://www.ethereumcatherders.com/",
    image: "https://ethereum-cat-herders.github.io/assets/images/ECH_LogoPurple.svg"
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Ethereum's Cancun-Deneb Upgrade: A Comprehensive Guide",
    excerpt: "Deep dive into EIP-4844 proto-danksharding implementation, its impact on Layer 2 scaling, and what it means for Ethereum's future...",
    date: "March 2024",
    readTime: "8 min read",
    url: "https://etherworld.co/2024/03/ethereum-cancun-deneb-upgrade-guide"
  },
  {
    id: 2,
    title: "Coordinating Ethereum Hard Forks: Lessons from the Trenches",
    excerpt: "Insights from managing multiple Ethereum protocol upgrades, coordination challenges, and best practices for decentralized development...",
    date: "January 2024",
    readTime: "6 min read",
    url: "https://etherworld.co/2024/01/coordinating-ethereum-hard-forks"
  },
  {
    id: 3,
    title: "The EIP Process: A Guide for Contributors",
    excerpt: "Everything you need to know about proposing Ethereum Improvement Proposals, from initial draft to final implementation...",
    date: "November 2023",
    readTime: "10 min read",
    url: "https://etherworld.co/2023/11/eip-process-guide-contributors"
  },
  {
    id: 4,
    title: "Women in Ethereum Protocol: Building Inclusive Communities",
    excerpt: "Exploring initiatives to increase diversity in Ethereum protocol development and creating opportunities for underrepresented groups...",
    date: "September 2023",
    readTime: "5 min read",
    url: "https://etherworld.co/2023/09/women-ethereum-protocol-inclusive-communities"
  },
  {
    id: 5,
    title: "The Merge: Two Years of Preparation and Coordination",
    excerpt: "Behind-the-scenes look at coordinating Ethereum's transition to Proof of Stake and the challenges of managing such a complex upgrade...",
    date: "September 2022",
    readTime: "12 min read",
    url: "https://etherworld.co/2022/09/ethereum-merge-coordination-retrospective"
  }
];

export const SOCIAL_LINKS = [
  {
    name: "Twitter/X",
    url: "https://twitter.com/poojaranjan19",
    description: "Personal insights & updates",
    icon: "twitter",
    color: "bg-slate-900"
  },
  {
    name: "GitHub",
    url: "https://github.com/Avarch-org",
    description: "Avarch open source projects",
    icon: "github",
    color: "bg-gray-800"
  }
];
