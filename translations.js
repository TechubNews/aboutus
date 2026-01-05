// English translations configuration
const translations = {
    zh: {
        nav: {
            aboutUs: "关于我们",
            contact: "联系方式",
            platform: "平台背景",
            data: "数据展示",
            activities: "过往活动",
            interviews: "人物专访"
        },
        title: "Techub News - About Us",
        aboutUs: {
            title: "关于我们",
            content: [
                "Techub News 是一家立足香港、专注于前沿科技领域的本地领先 Web3 技术媒体平台，涵盖科技创新、区块链、Web3 及人工智能等核心领域。我们致力于打造\"香港领先、世界一流\"的科技媒体平台。",
                "自成立以来，Techub News与香港数码港、香港科学园等官方机构紧密合作，共同举办了一系列线上线下 Web3 科技活动。同时，我们与包括紫荆杂志社、香港卫视、香港01、香港商报、星岛日报、大公报等在内的多家本地主流媒体建立了合作伙伴关系，共同推动香港科技生态的发展。",
                "作为融合内容聚合与社交互动的创新平台，Techub News 借助人工智能与区块链技术，已迅速拓展覆盖海外多个重要市场，包括迪拜、韩国、越南、日本、泰国、新加坡、马来西亚、印度尼西亚等国。我们的股东、团队成员及伙伴均来自加密行业前沿，具备深厚的专业知识和全球化视野，能够持续输出高品质内容。"
            ]
        },
        contact: {
            title: "联系方式",
            labels: {
                website: "官方网站：",
                wechat: "微信视频号：",
                twitter: "X（推特）：",
                youtube: "YouTube：",
                business: "商务联系：",
                hr: "招聘邮箱：",
                logo: "Techub News Logo："
            },
            qrCodes: {
                wechat: "公众号",
                app: "App 下载"
            },
            download: {
                ios: "苹果 App 下载",
                android: "安卓 App 下载"
            }
        },
        platform: {
            title: "平台背景",
            platform: "平台",
            shareholders: "股东",
            products: "股东旗下产品"
        },
        data: {
            title: "数据展示",
            appRanking: "APP - 免费新闻榜排名",
            platformTraffic: "平台流量 - 80W+",
            space: "SPACE",
            rankings: {
                hk: "香港 TOP2",
                tw: "台湾 TOP8",
                sg: "新加坡 TOP4",
                my: "马来西亚 TOP6"
            }
        },
        activities: {
            title: "过往活动",
            labels: {
                theme: "活动主题：",
                time: "活动时间：",
                location: "活动地点：",
                poster: "活动海报："
            }
        },
        interviews: {
            title: "人物专访",
            labels: {
                time: "时间：",
                theme: "专访主题：",
                guest: "嘉宾名称：",
                poster: "专访海报："
            }
        },
        backToTop: "回到顶部"
    },
    en: {
        nav: {
            aboutUs: "About Us",
            contact: "Contact",
            platform: "Platform Background",
            data: "Data Display",
            activities: "Past Activities",
            interviews: "Interviews"
        },
        title: "Techub News - About Us",
        aboutUs: {
            title: "About Us",
            content: [
                "Techub News is a leading local Web3 technology media platform based in Hong Kong, focusing on cutting-edge technology fields including technological innovation, blockchain, Web3, and artificial intelligence. We are committed to building a 'Hong Kong-leading, world-class' technology media platform.",
                "Since its establishment, Techub News has closely collaborated with official institutions such as Hong Kong Cyberport and Hong Kong Science Park, jointly organizing a series of online and offline Web3 technology events. At the same time, we have established partnerships with multiple local mainstream media including Bauhinia Magazine, Hong Kong Satellite TV, Hong Kong 01, Hong Kong Commercial Daily, Sing Tao Daily, and Ta Kung Pao, jointly promoting the development of Hong Kong's technology ecosystem.",
                "As an innovative platform integrating content aggregation and social interaction, Techub News, with the help of artificial intelligence and blockchain technology, has rapidly expanded to cover multiple important overseas markets, including Dubai, South Korea, Vietnam, Japan, Thailand, Singapore, Malaysia, Indonesia, and other countries. Our shareholders, team members, and partners all come from the forefront of the crypto industry, with deep professional knowledge and global vision, capable of continuously producing high-quality content."
            ]
        },
        contact: {
            title: "Contact",
            labels: {
                website: "Official Website:",
                wechat: "WeChat Video:",
                twitter: "X (Twitter):",
                youtube: "YouTube:",
                business: "Business Contact:",
                hr: "Recruitment Email:",
                logo: "Techub News Logo:"
            },
            qrCodes: {
                wechat: "WeChat Official Account",
                app: "App Download"
            },
            download: {
                ios: "Apple Download",
                android: "Android Download"
            }
        },
        platform: {
            title: "Platform Background",
            platform: "Platform",
            shareholders: "Shareholders",
            products: "Shareholder Products"
        },
        data: {
            title: "Data Display",
            appRanking: "APP - Free News Ranking",
            platformTraffic: "Platform Traffic - 80W+",
            space: "SPACE",
            rankings: {
                hk: "Hong Kong TOP2",
                sg: "Singapore TOP4",
                my: "Malaysia TOP6",
                tw: "Taiwan TOP8"
            }
        },
        activities: {
            title: "Past Activities",
            labels: {
                theme: "Theme:",
                time: "Time:",
                location: "Location:",
                poster: "Poster:"
            }
        },
        interviews: {
            title: "Interviews",
            labels: {
                time: "Time:",
                theme: "Theme:",
                guest: "Guest:",
                poster: "Poster:"
            }
        },
        backToTop: "Back to Top"
    }
};

// Activity translations - English
const activityTranslations = {
    en: [
        {
            theme: "Global Web3 Developer Conference",
            time: "February 8, 2026",
            location: "Hong Kong, China",
            intro: "Hong Kong - As the Web3 wave sweeps across the globe, a grand event dedicated to developers is about to land! Hosted by Web3Labs, co-organized by CSDN and Techub News, with Cyberport and CONSEnsus as strategic partners, the 'Global Web3 Developer Conference' will be held in Hong Kong on February 8-9, 2026 (two days). This is not just a technology summit, but also a bridge connecting global top wisdom, capital, and developers, helping Builders shape the future internet era with their own hands. We stand at the entrance of a new internet era driven by code. Hong Kong, as an international financial center and policy innovation hub, is becoming a gravitational field for global Web3. This conference, themed 'Making the World Fun Again', brings together global mainstream public chains, top developers, investment institutions, and industry leaders to explore the integration of cutting-edge technology and real business applications. The conference will adopt a dual-core driving mode: the main venue focuses on industry trends, while the hackathon emphasizes practical development, achieving a perfect combination of trends and practice. It is expected to attract 100+ participants, 15+ technical seminars, 300+ global developers, generate 50+ innovative projects, and connect four major regions to ignite Web3 ecosystem vitality."
        },
        {
            theme: "Avalanche Team1 Connect HongKong",
            time: "November 5, 2025",
            location: "Tower 535, 17/F AWS Office, 535 Jaffe Road, Causeway Bay, Hong Kong",
            intro: "This event is hosted by Avalanche, co-hosted by AWS and Techub News, focusing on the digital wave of Real World Assets (RWA). Distinguished guests from Ava Labs, Chainlink, Gate, NUVA (RWA brand under Animoca Brands), zkMe, AWS and other industry leaders will jointly discuss how RWA reshapes the new landscape of asset digitization."
        },
        {
            theme: "RWA+AI Computing Power Empowers Global Medical Digital Industry Upgrade Summit Forum & BitHive & BTT Global Launch Event",
            time: "August 1, 2025",
            location: "Hong Kong, China",
            intro: "Hong Kong's 'Stablecoin Ordinance' officially came into effect, injecting new momentum into Hong Kong's consolidation of its position as a global Web3 financial center. Under this policy tailwind, the 'RWA-Driven Global Asset Liquidity Empowering Real Economy Summit Forum & China Digital Health Industry Trillion-Level Asset BTT Launch Event', hosted by BitHive, a pioneer in decentralized medical blockchain ecosystem, and organized by Techub News, was grandly held in Hong Kong. This event brought together global top technology companies, financial institutions, academic experts and investors, focusing on how Real World Assets (RWA), Artificial Intelligence (AI) and Decentralized Physical Infrastructure Network (DePIN) technologies promote the digital transformation of the medical industry, exploring the application of Web3 technology in medical data interconnection, computing power innovation and asset liquidity enhancement, opening a new chapter for the global digital health industry."
        },
        {
            theme: "Global RWA Data Industry Conference & Hong Kong RWA Global Industry Alliance Launch Ceremony",
            time: "July 30, 2025",
            location: "Hong Kong, China",
            intro: "The Global RWA Data Industry Conference & Hong Kong RWA Global Industry Alliance Launch Ceremony was grandly held at the Cyberport Conference Hall in Hong Kong, China. This conference is hosted by the Blockchain Professional Committee of China Communications Industry Association, the AI and Metaverse Industry Working Committee of China Mobile Communications Association, the Token Economy Working Committee of China International Economic and Technical Cooperation Promotion Association, Hong Kong RWA Global Industry Alliance, World Trade United Foundation and Listed Companies Top 100 Forum, co-hosted by Shengnar (Hong Kong) International Group Co., Ltd., co-organized by Zhuhai Fudan Innovation Research Institute, Hong Kong Blockchain Association, Hong Kong Belt and Road International Cooperation Promotion Association, Guangdong-Hong Kong-Macao Greater Bay Area Biotechnology Alliance, MINAX Brand Exchange and AIOT Research Institute, and organized by Digital Economy Community, Maiyou Cloud Chain (Shenzhen) Technology Co., Ltd., Techub News, Shanghai Jingzhi Information Technology Co., Ltd., etc. Under the guidance of China Mobile Communications Association, the event focuses on 'Real World Asset Tokenization (RWA)' as the core, bringing together global experts, entrepreneurs and policy makers to discuss the compliant development, technological innovation and international cooperation of RWA, aiming to promote the deep integration of real assets and digital economy, and create a pioneer platform for global RWA ecosystem exchange and implementation."
        },
        {
            theme: "DePIN EXPO HK 2025",
            time: "June 27, 2025",
            location: "Hong Kong, China",
            intro: "DePIN (Decentralized Physical Infrastructure Network) is rapidly rising and becoming one of the most practical and influential fields in the Web3 space. As the world's first flagship event dedicated to the DePIN ecosystem, DePIN Expo 2025 will be grandly held in Hong Kong from August 27 to 28. This conference is commissioned and guided by the Hong Kong Special Administrative Region Government, initiated by DeMall, and jointly organized by Techub News, Web3Labs, and MetaEra. In addition, it has established strategic partnerships with globally leading technology media such as Barron's and Bitcoin Magazine under Dow Jones, further demonstrating its global influence and industry leadership. The conference will focus on the integration of DePIN with AI, RWA, IoT, robotics, blockchain and other cutting-edge fields, building a complete platform covering ecosystem display, hardware experience, capital docking, and city demonstration."
        },
        {
            theme: "Hong Kong's First Web3 AI & RWA Industry Investment & Financing Ecosystem Summit",
            time: "June 21, 2025",
            location: "Hong Kong, China",
            intro: "Driven by the global digital economy wave, the deep integration of Web3 technology and artificial intelligence is gradually becoming a key force reshaping finance, technology and the real economy. In 2025, the world is at a critical point of deep integration of technology and capital: Web3 brings a new paradigm for asset circulation, AI promotes the reconstruction of decision-making, finance, identity and other systems, and RWA (Real World Assets on-chain) is becoming a bridge connecting trillions of off-chain assets and on-chain finance."
        },
        {
            theme: "Beyond Scaling: Founders Night Dubai",
            time: "April 30, 2025",
            location: "Building @11, Internet City, Hong Kong",
            intro: "'Beyond Scaling - Founders Night Dubai' will be officially held on April 30, 2025. As part of ScalingX's global event series, this grand event brings together Web3 entrepreneurs, field pioneers and visionary investors to celebrate the spirit of constantly breaking through limits. This event aims to pay tribute to all Web3 entrepreneurs for their hard work, determination and perseverance, and encourage more entrepreneurs to continue moving forward and break through their own boundaries. Sponsors include Huawei Cloud, Infini and Vanilla Finance, with strong support from projects such as Jsquare, Sharding Capital, UPay and Aladdin Cyber Security."
        },
        {
            theme: "Solana Ecosystem Builder Conference",
            time: "March 22, 2025",
            location: "Yidu Building, Qianhai, Shenzhen",
            intro: "As blockchain technology moves towards deep applications and the AI wave sweeps across global industries, an industry event focusing on Solana ecosystem's core value and future opportunities is about to begin - the Solana Ecosystem Builder Conference, sincerely inviting global blockchain practitioners, developers and investors to join this feast of ideas, explore new paths for ecosystem development, and build new engines for industry growth."
        },
        {
            theme: "Superchain Asia Gathering @Consensus: Bring a Billion People into the On-Chain Economy",
            time: "February 20, 2025",
            location: "17/F, 535 Jaffe Road, Causeway Bay, Hong Kong",
            intro: "Superchain Asia is a community initiative aimed at attracting Web3 developers in the Asian region to join the Superchain ecosystem, providing developers with a platform for practice and collaboration. Through cooperation with multiple project teams, this event will share technical insights, showcase ecosystem construction achievements, and explore Asia's core role in the Web3 field. The event will include keynote speeches from the Superchain team, helping developers seamlessly integrate into this permissionless open ecosystem; at the same time, roundtable discussions will be set up to review milestone events in 2024 and look forward to the vision for 2025."
        },
        {
            theme: "Proof Beyond Boundaries: Hong Kong zkNight",
            time: "February 19, 2025",
            location: "6/F, Vpoint, Causeway Bay, Hong Kong",
            intro: "The high-end themed event 'Proof Beyond Boundaries: Hong Kong zkNight' grandly opened at 6/F, Vpoint, Causeway Bay, Hong Kong. This event is hosted by ZEROBASE and organized by Techub News, attracting many industry elites, technical experts and cryptocurrency enthusiasts to participate. Particularly noteworthy is that the project parties participating in the speeches brought multiple wonderful speeches, and the in-depth analysis of 'Proof Beyond Boundaries: Hong Kong zkNight' added a strong technological color and sense of the future to the entire event, inspiring the audience's infinite imagination about the future intelligent interconnected world."
        },
        {
            theme: "Beyond Scaling: Shaping the Future with AI Agents",
            time: "February 17, 2025",
            location: "Hong Kong Island",
            intro: "Engage in deep dialogue with top AI Agent projects and explore innovative application scenarios of artificial intelligence in the crypto field. We will deeply discuss how AI Agents reshape the industry landscape and analyze the new Web3 model empowered by AI. Join us to look forward to the infinite possibilities of the integration of AI and blockchain technology!"
        },
        {
            theme: "Global Outstanding Chinese Summit & Digital Assets and Industry Empowerment High-End Forum",
            time: "August 30, 2024",
            location: "Royal Park Hotel, Hong Kong",
            intro: "On August 30, 2024, the 'Global Outstanding Chinese Summit & Digital Assets and Industry Empowerment High-End Forum', jointly hosted by Greater Bay Area Times Magazine, Techub News, and Asia Pacific First Satellite TV, and sponsored by DA AGE, was grandly held in Hong Kong. This high-end forum brought together global outstanding Chinese representatives, industry leaders and senior experts to conduct in-depth discussions around the core topic of 'Digital Assets and Industry Empowerment'. Through this event, participants not only deeply analyzed the current situation of digital assets and the Web3 industry, but also emphasized the importance of helping the popularization and application of digital assets. The forum is committed to helping traditional industry practitioners better understand digital assets and the Web3 industry, encouraging their active participation, aiming to promote more exchanges and interactions, collide new ideas, and create new opportunities."
        },
        {
            theme: "NovaX International Venture Capital Carnival 2024",
            time: "August 28-29, 2024",
            location: "Hall 3, AsiaWorld-Expo, Hong Kong",
            intro: "The grand event jointly hosted by Hong Kong Guangdong Community General Association, Hong Kong Young Scientists Association, Greater Bay Area Common Home Investment Co., Ltd., Techub News and Middle East Adbolan aims to build a platform to promote the development of innovation and entrepreneurship ecosystems in Hong Kong, mainland China and even globally, providing valuable opportunities for global innovative enterprises and investment institutions to connect and cooperate. Many internationally renowned investment institutions will join together to explore new opportunities for investment docking and jointly promote the deep integration of global technological innovation and business development."
        },
        {
            theme: "Tech, Fashion 'Back to the Street': Hong Kong Lan Kwai Fong Web3 Digital Fashion Carnival",
            time: "April 8-9, 2024",
            location: "Lan Kwai Fong, Hong Kong",
            intro: "'Back to the Street - Digital Fashion Carnival' brings together global top Web3 IPs and Web2 fashion brands, showcasing the seamless integration of technology and fashion, and exploring new lifestyles of the new era. This carnival is hosted by VertexLabs, Hape, MEET48, co-organized by TN Labs, LightCycle, Skytopia, H3 Entertainment, Wanlian Technology, MyLink, organized by COC (powered by Techub News & DA AGE), and supported by EDGESummit, with strong support from the Hong Kong government and Lan Kwai Fong Group. As Hong Kong's first large-scale digital fashion carnival, it attracted tens of thousands of participants to cross boundaries together and open a new digital fashion era."
        },
        {
            theme: "Southeast Asia's Premium Blockchain Night",
            time: "June 6, 2024",
            location: "Le Méridien Saigon",
            intro: "Hosted by Hong Kong's renowned Web3 media Techub News, this grand event brought together heavyweight co-organizers including iDom (iDom Capital), Game Space, and Audemars Piguet, with generous sponsorship from Staynex and strong support from RPC (Ready Player Club) and SNZ. This event aims to jointly promote innovation and growth in the WEB3 field through high-quality social and strategic cooperation, injecting new vitality into the development of blockchain technology in Southeast Asia."
        },
        {
            theme: "Edge Intelligence 2024 - AI Developer Summit",
            time: "May 9, 2024",
            location: "Cyberport",
            intro: "The grand event 'Edge Intelligence 2024 - AI Developer Summit' jointly hosted by HKAIIA and UtilityNet, co-organized by Cyberport, and organized by Techub News. This summit brought together global top AI developers, academic experts and leaders, and renowned chip manufacturers to jointly discuss the development trends, technological breakthroughs and application practices of distributed AI. The core purpose of this summit is to gather global wisdom, focus on the deep integration of edge computing intelligence and distributed AI, in order to promote the innovation and application of related technologies."
        },
        {
            theme: "Bitcoin Devcon",
            time: "May 7, 2024",
            location: "Hong Kong Science Park",
            intro: "Bitcoin Devcon is hosted by UTXO Management, co-hosted by Satoshi Lab, supported by Yakihonne and Web3port, and organized by Techub News. This conference brought together global Bitcoin developers, engineers, researchers, designers, artists and investors, aiming to jointly explore the future development trends of Bitcoin and inject new vitality into the global Bitcoin ecosystem."
        },
        {
            theme: "Asia's First Hack.summit() 2024 Blockchain Developer Conference",
            time: "April 9-10, 2024",
            location: "Cyberport",
            intro: "The grand event hosted by renowned venture capital institution Hack VC, organized by Techub News, and supported by leading enterprises such as Solana Foundation, Chainlink Labs, Cyberport, 0G, Manta Network, MANTLE, HUAWEI, Vertex, Google Cloud, AUROS, J17, SNZ, JDI, Blockchain, ScalingX, BeL2, Chakra Chain, Web3MQ, dappOS, Axiomesh, Jasper Vault, CUSTONOMY, zk.Link, PublicAI, bringing together elites from the global blockchain field. The two-day conference not only provided a communication platform for developers, blockchain technology enthusiasts, renowned venture capital institutions and industry guest founders, but also became an important stage for inspiring innovative thinking and promoting technological innovation. Here, global top developers showcased the latest research results and shared the applications and prospects of blockchain technology in various fields."
        },
        {
            theme: "2024 DePIN Global Hardware Conference",
            time: "April 8, 2024",
            location: "Cyberport",
            intro: "The 2024 DePIN Global Hardware Conference successfully concluded on the glorious stage of Hong Kong Cyberport. This technology event organized by Techub News and hosted by JDI Global brought together the co-organizing forces of CGV and Web3Labs, as well as strong support from renowned institutions such as Cyberport, UWEB, CRYPTOMERIA CAPITAL, UtilityNet, Port3 Network, Azen, Deeper, X3Link, U2U Network, CYSIC, Network3, DeepBrain Chain, DeepLink, Titan Network, BOINC AI, DeAI, PowerPod, CESS, Hajime, successfully attracting global attention. After in-depth exchanges and wonderful displays, the conference not only painted a hopeful grand blueprint for the global hardware industry, but also conveyed the power and potential of hardware innovation to the world."
        },
        {
            theme: "Big Demo Day",
            time: "May 2023 - May 2024",
            location: "Cyberport",
            intro: "Big Demo Day has participated in a total of 13 sessions, attracting more than 300-400 Web3 companies to register. More than 200 high-quality Web3 companies showcased their companies and projects at the events. These events attracted the active participation of more than 100 investment institutions and individual investors, who worked hand in hand with on-site enterprises to jointly explore the infinite opportunities in the Web3 field. The influence of Big Demo Day also far exceeded the on-site, receiving coverage from more than 100 online and offline media and platforms, with cumulative exposure exceeding 100 million times."
        },
        {
            theme: "\"Drone Flight Night Crypto Dream\"",
            time: "September 11, 2023",
            location: "Singapore",
            intro: "This event was conducted simultaneously online and offline, with more than 1,000 on-site viewers. Mars Finance, Chafang Blockchain, Caihua Society Finmeta, TokenDance, MetaEra, Yanglian Zhibo, Cuimian Master, TinTinLand, Bilibili and others together with Techub News conducted live broadcasts, with more than 10,000 live viewers. Golden Finance, METAERA, Mars Finance, Planet Daily, followin, Caihua Society, Cointime, Rhythm, Coin Xiaobai, Tuoluo Finance, Chafang Blockchain, Shilian Finance, Whale Ship and others served as cooperative media for follow-up reports. During the event, BUIDL representatives from projects such as Techub News, Skylink, DA AGE, ColdLar (COLDLAR), CREGIS, and Ubox shared their Web3 projects and Web3 dreams."
        },
        {
            theme: "Entering Hong Kong Web3: Digital Finance Study Tour",
            time: "October 25, 2023",
            location: "K11, 18 Salisbury Road, Tsim Sha Tsui, Kowloon, Hong Kong",
            intro: "On October 25, 2023, Techub News and HKVAC jointly hosted the AI & Web3 Hong Kong Free Science Popularization Class 'Entering Hong Kong 100 Institutions' event, which was successfully held at K11, 18 Salisbury Road, Tsim Sha Tsui, Kowloon, Hong Kong. This event aims to gather the world's highest quality project resources, the top venture capital institutions, strengthen communication and exchange with Hong Kong's localized Web3 community, and improve people's interest, awareness and safety awareness of AI and Web3. In addition, the entry of more high-quality resources will also help Hong Kong build a technology and innovation city."
        },
        {
            theme: "Huawei Cloud Releases Multiple Web3.0 Innovative Service Technologies to Promote Hong Kong's Digital Economy Prosperity",
            time: "August 10, 2023",
            location: "Hong Kong",
            intro: "The 'TechWave Web3.0 Special Day' hosted by Huawei Cloud, co-organized by Hong Kong Cyberport, Hong Kong Web3.0 Association, and Techub News, was successfully held at Hong Kong Cyberport, China. During the event, Huawei Cloud officially released Web3.0 Node Engine Service NES, QingTian Enclave confidential computing and other blockchain services, and launched the Huawei Cloud Store Web3.0 zone, with dozens of partner applications joining in the first batch. This event invited Ren Jingxin, CEO of Hong Kong Cyberport, Wang Yang, Vice President of Hong Kong University of Science and Technology, and Gao Jianghai, President of Huawei Cloud Public Cloud Business Department to deliver speeches, and joined hands with hundreds of Web3.0 field enterprise representatives, professionals and industry leaders from around the world to exchange views on Web3.0 industry development, infrastructure, application compliance, digital-real integration and other fields."
        }
    ],
    zh: []
};

// Interview translations - English
const interviewTranslations = {
    en: [
        {
            time: "December 26, 2025",
            theme: "Quantum Threat May Appear Within 15 Years, Bitcoin Migration to Post-Quantum Addresses Requires 20 Years Without Changing Block Size",
            guest: "Professor Ding Jintai, Dean of the School of Mathematical Physics, Xi'an Jiaotong-Liverpool University, Global Pioneer in Quantum Cryptography",
            intro: "At the end of 2025, quantum computing technology is developing rapidly. The latest report from the German Federal Office for Information Security (BSI) shows that major breakthroughs in quantum error correction were achieved in 2024, conservatively estimating that cryptography-related quantum computers may appear within 15 years. This makes the 'quantum threat' facing Bitcoin and the entire digital financial system change from a distant assumption to an imminent reality: once large-scale quantum computers mature, the current public key cryptography system will be broken, and all encrypted assets will face the risk of 'naked exposure'. In this interview, Alma, founder of Techub News, had an in-depth dialogue with Professor Ding Jintai, an international authority in the field of post-quantum cryptography and Dean of the School of Mathematical Physics at Xi'an Jiaotong-Liverpool University. Professor Ding analyzed the impact of quantum threats on Bitcoin from the underlying principles, emphasized the urgency and difficulty of migration, and shared the current response status of the global financial system."
        },
        {
            time: "December 12, 2025",
            theme: "Strategic Transformation from Exchange to Crypto Private Bank",
            guest: "Tim, COO of New Huo Technology",
            intro: "Tim demonstrated deep insights into the crypto industry. New Huo's transformation is not only a business adjustment, but also a response to the wave of compliance and traditional capital entry. Facing the follow-up of giants like Binance, New Huo is confident with its Hong Kong local advantages and onshore operations. As one of the industry leaders, New Huo's crypto private banking services may reshape the asset allocation pattern of high-net-worth individuals. Techub News will continue to follow this dynamic and look forward to New Huo's new progress in 2025."
        },
        {
            time: "September 16, 2025",
            theme: "Analyzing the 'Ecosystem Co-construction' Approach of Taiwan's Virtual Asset Association",
            guest: "Lin Shanglun, Deputy Secretary-General of Taiwan Bitcoin and Virtual Asset Development Association, Lawyer at Hengye Law Firm",
            intro: "Regarding the current situation and dynamics of 'builders' in Taiwan's virtual asset industry, Lawyer Lin Shanglun reviewed the impact of market cycles. In the previous bull market (2021-2022), Taiwan's blockchain builders were extremely active, with a large number of GameFi and NFT projects emerging. Celebrities such as Jay Chou, Chiang Youbo, and Huang Licheng also participated in NFT issuance, pushing the industry to set off an innovation boom. However, in this bull market, affected by stricter regulations, the industry's focus has shifted to financial compliance areas, such as exchange compliance operations, asset custody services, and corporate 'treasury' strategies. The activity level at the technical development level has relatively slowed down. However, new development directions have gradually emerged. Lawyer Lin Shanglun stated that the RWA (Real World Assets) field is beginning to attract attention from Taiwan practitioners, and some teams hope to combine blockchain technology with real assets such as real estate to eliminate the negative impression of the NFT field and explore more practical application scenarios."
        },
        {
            time: "September 16, 2025",
            theme: "Taiwan's Virtual Asset Regulation 'Breakthrough' in Progress: Full Picture from ETF Relaxation to Stablecoin Exploration",
            guest: "Lin Hongyu, Founding Chairman of Taiwan Bitcoin and Virtual Asset Development Association, Director of Fintech Department at Hengye Law Firm",
            intro: "As a senior lawyer in the virtual asset field, Lawyer Lin Hongyu frankly stated that the main problem facing current clients is compliance challenges. Especially after the local Financial Supervisory Commission raised review standards, many smaller exchanges were delisted due to insufficient user volume. In addition, international virtual asset platforms still face policy uncertainty when landing compliance in Taiwan. Currently, the compliance list is mainly composed of local exchanges. For Taiwan listed companies adopting 'treasury' strategies to invest in virtual assets, local regulations do not prohibit it, so the practices of Dafeng TV and Zhitong Technology are legal. The Financial Supervisory Commission maintains a neutral stance on this, neither encouraging nor prohibiting it."
        },
        {
            time: "September 5, 2025",
            theme: "From Traditional VC to Web3: Exploring the Future of RWA and DAT",
            guest: "Paolo, Ecosystem Partner of Victory Securities",
            intro: "Paolo's sharing provided an in-depth analysis of the current situation and potential of Hong Kong's digital financial market, from RWA's compliance exploration to DAT's global trends, and then to the entry paths of traditional enterprises and investors. The content is comprehensive and professional. Victory Securities and VDX's first-mover advantages in Hong Kong's virtual asset field, as well as Paolo's deep insights into the industry, provide valuable perspectives for understanding the integration of Web3 and traditional finance. Hong Kong is steadily moving towards becoming a global digital financial center through policy support and technological innovation. We look forward to more breakthroughs and cooperation in the future!"
        },
        {
            time: "September 5, 2025",
            theme: "Building a Digital Asset Ecosystem: Zhang Huachen on Guofu Quantum's Web3 Strategy",
            guest: "Zhang Huachen, Co-CEO of Guofu Quantum Innovation Co., Ltd.",
            intro: "Mr. Zhang Huachen demonstrated Guofu Quantum's deep accumulation and forward-looking vision in the Web3 field. From early investment in stablecoins and exchange operations, to acquiring Southern Dongying and upgrading virtual asset licenses, to deploying RWA tokenization and quantum computing, Guofu Quantum has built a complete digital asset ecosystem covering incubation, investment, trading and asset management with compliance as the core. Zhang Huachen emphasized that Guofu Quantum's transformation is a continuation of a ten-year strategy, aimed at bridging traditional finance and digital assets, seizing Hong Kong's policy dividends, and promoting healthy industry development."
        },
        {
            time: "August 12, 2025",
            theme: "Hong Kong Web3 Compliance Track: Give Regulation More 'Love'",
            guest: "Wu Chen, Co-founder of EX.IO",
            intro: "With her cross-border experience in traditional finance and Web3 fields, Wu Chen led EX.IO to find a breakthrough in a strict regulatory environment, especially in the innovative practice of the RWA market, providing an efficient path for traditional capital to enter Web3. She deeply understands the delicate balance between industry and regulation, calling on society to give regulatory agencies more understanding and support, emphasizing that they are important cornerstones for protecting wealth entering Web3."
        },
        {
            time: "August 1, 2025",
            theme: "Where Will OTC Stores Go After Hong Kong's Stablecoin Ordinance Takes Effect?",
            guest: "Roger Li, Founder and CEO of One Satoshi",
            intro: "In this long conversation with Roger Li, we see a local OTC company with extremely strong compliance awareness actively adapting to regulatory changes and exploring new paths for Hong Kong as a global Web3 hub. One Satoshi's choice is a microcosm of many practitioners. As Roger said: 'Sticking to the bottom line is a reflection of long-termism.'"
        },
        {
            time: "June 25, 2025",
            theme: "New Digital Asset Regulatory Policies and RWA Future Potential",
            guest: "Wu Jiezhuang, Hong Kong Legislative Council Member and National Committee Member of CPPCC",
            intro: "This interview showcased Hong Kong's ambitions and strategic layout in the digital asset field. Legislative Council Member Wu Jiezhuang has insight into global trends, proposing policy suggestions such as relaxing licenses, promoting offshore RMB stablecoins and RWA development, injecting new vitality into Hong Kong's crypto industry. At the same time, OTC regulation is about to land, youth education planning is increasing, and the possible return of TOKEN 2049 all mark Hong Kong's accelerated move towards global Web3 leadership."
        },
        {
            time: "June 24, 2025",
            theme: "US Dollar Stablecoins Will Reshape Financial Order, Bitcoin Enters Programmable Era",
            guest: "Du Jun, Founder of Vernal Capital",
            intro: "As a pioneer and long-term witness of the blockchain industry, Du Jun's name has almost run through every key wave: from co-founding Huobi in 2013, promoting the early popularization of Bitcoin in China; to creating Golden Finance, becoming a central node for industry information circulation; to being a founding partner of Node Capital, accurately capturing multiple cycle trends. He has written countless industry classic cases with his keen judgment of technology trends and long-termism in capital operations."
        },
        {
            time: "June 13, 2025",
            theme: "From Traditional Brokerage to Crypto Pioneer",
            guest: "Kennix from Victory Securities",
            intro: "As the third-generation successor of a family business, Kennix continued Victory Securities' 54-year financial genes, opening up a new world of Crypto with youthful sharpness and persistence in compliance. His feelings for Hong Kong - the sense of mission to bring liquidity back to Hong Kong through innovative products - runs through the conversation, which is touching. From personal lessons from FTX's collapse to unique insights into RWA and stablecoins, Kennix demonstrated the infinite possibilities of integrating traditional finance and Crypto."
        },
        {
            time: "March 12, 2025",
            theme: "What Do You Think About Crypto?",
            guest: "Wang Feng, Editor-in-Chief of Financial Times Chinese Website",
            intro: "Financial market bubbles are not accidental, but the intersection of technological innovation, capital promotion, human greed and regulatory lag. Cryptocurrencies, AI, and the internet - the development paths of these industries are remarkably similar: new technologies bring imagination, capital adds fuel to the fire, information asymmetry creates arbitrage opportunities, and regulatory lag allows market frenzy to continue. Technology itself is not a bubble, but the market's forward pricing of technology often creates irrational prosperity. Bubbles can last five years, ten years or even longer, and geopolitics and capital games make the market even more unpredictable. But history tells us that everything will eventually return to rationality."
        },
        {
            time: "January 21, 2025",
            theme: "Analyzing Crypto's Future Direction from Taiko's Technical Perspective",
            guest: "Brecht Devos, CTO of Taiko",
            intro: "As the first Based Rollup, Taiko is at the forefront of crypto technology development. Based Rollup is an upgraded version of shared sequencers represented by Astria. Unlike shared sequencers like Astria that introduce third parties as sequencers, Based Rollup directly uses Layer1 validators as sequencers for Rollup, further increasing the neutral credibility of decentralized sequencing."
        },
        {
            time: "November 21, 2024",
            theme: "Two Years of Hong Kong Web3 Declaration",
            guest: "Anna Liu, General Manager of HashKey Tokenisation",
            intro: "As one of Asia's top crypto asset companies, HashKey Group has always been at the forefront of Web3 ecosystem development. From Hong Kong to Singapore, to Japan and Bermuda, HashKey has established a globally covered high-compliance digital asset ecosystem network. In the rapid development of Hong Kong's Web3 ecosystem, HashKey has not only built a compliant exchange, but also promoted innovation in the asset tokenization field with its Tokenisation business as the core."
        },
        {
            time: "November 27, 2024",
            theme: "Two Years of Hong Kong Web3 Declaration",
            guest: "Wu Jiezhuang, Hong Kong Legislative Council Member",
            intro: "On October 31, 2022, Hong Kong officially released its virtual asset policy declaration, marking a solid step forward for Hong Kong in the Web3 and virtual asset fields. Since then, Hong Kong's development in this emerging field has been steadily progressing. As the second anniversary of this declaration approaches, Techub News conducted an in-depth exclusive interview with Hong Kong Legislative Council Member Wu Jiezhuang to jointly discuss the profound impact of virtual asset policy implementation on Hong Kong's banking, securities, exchange and other industries."
        },
        {
            time: "November 25, 2024",
            theme: "Two Years of Hong Kong Web3 Declaration",
            guest: "Legislative Council Member Qiu Dagen",
            intro: "On October 31, 2022, Hong Kong officially released the 'Policy Declaration on Hong Kong's Virtual Asset Development', marking a solid step forward for Hong Kong in the Web3 and virtual asset fields. Since then, Hong Kong's development in this emerging field has been steadily progressing. As the second anniversary of this declaration approaches, Techub News conducted an in-depth exclusive interview with Hong Kong Legislative Council Member Qiu Dagen to jointly discuss the latest trends and policies of Hong Kong's digital asset industry, as well as exchange licenses, tokenization, stablecoin-related policies and development prospects."
        },
        {
            time: "November 8, 2024",
            theme: "Two Years of Hong Kong Web3 Declaration",
            guest: "Zeng Baoji, Head of Sales and Trading at OSL Exchange",
            intro: "Since the release of the policy declaration on virtual asset development in Hong Kong on October 31, 2022, the Hong Kong government has continuously explored the compliance boundaries of Web3, laying the foundation for the healthy development of Hong Kong's virtual asset market and providing clear compliance guidance for industry participants. On the occasion of the 2nd anniversary, Techub News had the honor of interviewing Zeng Baoji, Head of Sales and Trading at OSL Exchange, to explore the development status and future possibilities of Hong Kong's compliant exchanges in the past two years from the perspective of Hong Kong's longest-established compliant virtual asset trading platform."
        }
    ],
    zh: []
};
