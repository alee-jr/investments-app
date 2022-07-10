import { NewsSentimentType } from '../news-sentiment/dto/news-sentiment.type';

export const newsSentimentMock: NewsSentimentType[] = [
  {
    title:
      'Techproof Express: A platform for custom travel | The Financial Express',
    url: 'https://www.financialexpress.com/opinion/techproof-express-a-platform-for-custom-travel/2585515/',
    time_published: '20220706T221500',
    authors: [],
    summary:
      'Travel industry needs to move from a provider-centric approach to a traveller-centric one ...',
    banner_image:
      'https://www.financialexpress.com/wp-content/uploads/2022/07/1-172.jpg',
    source: 'The Financial Express',
    category_within_source: 'n/a',
    source_domain: 'www.financialexpress.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '0.5',
      },
      {
        topic: 'Energy & Transportation',
        relevance_score: '0.5',
      },
    ],
    overall_sentiment_score: 0.056555,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'MMYT',
        relevance_score: '0.041726',
        ticker_sentiment_score: '0.031752',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.041726',
        ticker_sentiment_score: '0.031752',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'EXPE',
        relevance_score: '0.041726',
        ticker_sentiment_score: '0.031752',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title:
      'Microsoft Says it Supports Abortion Access but is Silent on Data Privacy',
    url: 'https://www.thestreet.com/investing/microsoft-says-it-supports-abortion-access-but-is-silent-on-data-privacy',
    time_published: '20220706T215000',
    authors: ['Ellen Chang'],
    summary:
      "Software giant hasn't said it will protect user data in wake of Supreme Court ruling overturning Roe.",
    banner_image:
      'https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTg5MDY0NTA4MTUxNDQxMjk5/r1s-rivian-2022.jpg',
    source: 'The Street',
    category_within_source: 'n/a',
    source_domain: 'www.thestreet.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: -0.124858,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'AAPL',
        relevance_score: '0.148334',
        ticker_sentiment_score: '-0.56382',
        ticker_sentiment_label: 'Bearish',
      },
      {
        ticker: 'MSFT',
        relevance_score: '0.582235',
        ticker_sentiment_score: '-0.064045',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.291586',
        ticker_sentiment_score: '-0.212316',
        ticker_sentiment_label: 'Somewhat-Bearish',
      },
      {
        ticker: 'MFCSF',
        relevance_score: '0.049701',
        ticker_sentiment_score: '-0.118641',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: 'Amazon Prime Grubhub Deal: What to Know',
    url: 'https://www.nytimes.com/2022/07/06/dining/amazon-prime-grubhub-plus-deal.html',
    time_published: '20220706T214756',
    authors: [],
    summary:
      'A deal between Amazon and the food distribution service Grubhub includes free delivery for Prime members.',
    banner_image:
      'https://static01.nyt.com/images/2022/07/06/dining/06Grubhub1/merlin_166923180_24498d64-1cc4-4ba2-80df-967461ec5d56-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    source: 'New York Times',
    category_within_source: 'Business',
    source_domain: 'www.nytimes.com',
    topics: [
      {
        topic: 'Retail & Wholesale',
        relevance_score: '0.333333',
      },
      {
        topic: 'Technology',
        relevance_score: '0.333333',
      },
      {
        topic: 'Earnings',
        relevance_score: '0.158519',
      },
      {
        topic: 'Manufacturing',
        relevance_score: '0.333333',
      },
    ],
    overall_sentiment_score: 0.024754,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'META',
        relevance_score: '0.127052',
        ticker_sentiment_score: '0.015001',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'NYT',
        relevance_score: '0.250902',
        ticker_sentiment_score: '0.015001',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'DROOF',
        relevance_score: '0.127052',
        ticker_sentiment_score: '0.126901',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'AMZN',
        relevance_score: '0.127052',
        ticker_sentiment_score: '0.107807',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.127052',
        ticker_sentiment_score: '0.015001',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'PINS',
        relevance_score: '0.127052',
        ticker_sentiment_score: '0.015001',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: 'Instagram Has Some Unwanted Crypto Surprises',
    url: 'https://www.thestreet.com/investing/cryptocurrency/instagram-has-some-unwanted-crypto-surprises',
    time_published: '20220706T210600',
    authors: ['Rob Lenihan'],
    summary:
      'There are some decidedly bad actors lurking around Instagram just waiting to pull a crypto scam.',
    banner_image:
      'https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTg2OTMwMzAzMjAwMTQyODQw/echo-show-15-1.jpg',
    source: 'The Street',
    category_within_source: 'n/a',
    source_domain: 'www.thestreet.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.316726',
      },
      {
        topic: 'Blockchain',
        relevance_score: '0.576289',
      },
    ],
    overall_sentiment_score: -0.428431,
    overall_sentiment_label: 'Bearish',
    ticker_sentiment: [
      {
        ticker: 'META',
        relevance_score: '0.371602',
        ticker_sentiment_score: '-0.428421',
        ticker_sentiment_label: 'Bearish',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.055122',
        ticker_sentiment_score: '-0.850001',
        ticker_sentiment_label: 'Bearish',
      },
      {
        ticker: 'MSTR',
        relevance_score: '0.164319',
        ticker_sentiment_score: '-0.850001',
        ticker_sentiment_label: 'Bearish',
      },
      {
        ticker: 'CRYPTO:BTC',
        relevance_score: '0.164319',
        ticker_sentiment_score: '-0.731302',
        ticker_sentiment_label: 'Bearish',
      },
    ],
  },
  {
    title:
      'VIDEO - Energy Fuels: Nuclear Power is Making a Comeback, Higher Uranium Prices Needed',
    url: 'https://investingnews.com/nuclear-power-comeback/',
    time_published: '20220706T210000',
    authors: [],
    summary:
      'Energy Fuels: Nuclear Power is Making a Comeback, Higher Uranium Prices Neededwww.youtube.com Uranium prices are back above the US$50 per pound level, and even though they have pulled back from their highest level hit this year at above US$60, market fundamentals remain strong.',
    banner_image:
      'https://investingnews.com/media-library/image.png?id=30068260&width=1200&height=690',
    source: 'Investing News Network',
    category_within_source: 'n/a',
    source_domain: 'investingnews.com',
    topics: [
      {
        topic: 'Economy - Fiscal',
        relevance_score: '0.158519',
      },
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.818451',
      },
    ],
    overall_sentiment_score: -0.17715,
    overall_sentiment_label: 'Somewhat-Bearish',
    ticker_sentiment: [
      {
        ticker: 'GOOG',
        relevance_score: '0.084098',
        ticker_sentiment_score: '0.028229',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title:
      'Reservoir Commends U.S. Copyright Royalty Board Phonorecords III Ruling',
    url: 'https://www.benzinga.com/pressreleases/22/07/g27978760/reservoir-commends-u-s-copyright-royalty-board-phonorecords-iii-ruling',
    time_published: '20220706T203631',
    authors: ['Globe Newswire'],
    summary:
      'NEW YORK, July 06, 2022 ( GLOBE NEWSWIRE ) -- Reservoir Media, Inc. RSVR ( "Reservoir" or the "Company" ) , an award-winning independent music company, today commended the U.S.',
    banner_image: '',
    source: 'Benzinga',
    category_within_source: 'News',
    source_domain: 'www.benzinga.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: -0.037475,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'RSVR',
        relevance_score: '0.133841',
        ticker_sentiment_score: '0.000648',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'SPOT',
        relevance_score: '0.067158',
        ticker_sentiment_score: '-0.046118',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.067158',
        ticker_sentiment_score: '-0.046118',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title:
      'Reservoir Commends U.S. Copyright Royalty Board Phonorecords III Ruling',
    url: 'https://www.globenewswire.com/news-release/2022/07/06/2475474/0/en/Reservoir-Commends-U-S-Copyright-Royalty-Board-Phonorecords-III-Ruling.html',
    time_published: '20220706T203600',
    authors: ['Inc.', 'Reservoir Media'],
    summary:
      "Copyright Royalty Board Upholds Increased Streaming Rates for Songwriters and Music Publishers, Denying Digital Service Providers' Appeal Copyright Royalty Board Upholds Increased Streaming Rates for Songwriters and Music Publishers, Denying Digital Service Providers' Appeal ...",
    banner_image:
      'https://ml.globenewswire.com/Resource/Download/e01bdce4-3f95-4fc2-9bdb-d4a632f6430d?size=1',
    source: 'GlobeNewswire',
    category_within_source: 'n/a',
    source_domain: 'www.globenewswire.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: -0.013159,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'RSVR',
        relevance_score: '0.1372',
        ticker_sentiment_score: '-0.000398',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'SPOT',
        relevance_score: '0.068856',
        ticker_sentiment_score: '-0.046118',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.068856',
        ticker_sentiment_score: '-0.046118',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: 'Why Pinterest Stock Got Cut in Half During the First Half of 2022',
    url: 'https://www.fool.com/investing/2022/07/06/why-pinterest-stock-got-cut-in-half-during-the-fir/',
    time_published: '20220706T202752',
    authors: ['Jon Quast'],
    summary:
      'It could be a good value stock if it can prove the doubters wrong.',
    banner_image:
      'https://media.ycharts.com/charts/86738b9efe5c825f1ccbf197108221fe.png',
    source: 'Motley Fool',
    category_within_source: 'n/a',
    source_domain: 'www.fool.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.108179',
      },
      {
        topic: 'Earnings',
        relevance_score: '0.266143',
      },
    ],
    overall_sentiment_score: -0.145031,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'PINS',
        relevance_score: '0.813694',
        ticker_sentiment_score: '-0.095247',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'SPGI',
        relevance_score: '0.080974',
        ticker_sentiment_score: '-0.593642',
        ticker_sentiment_label: 'Bearish',
      },
      {
        ticker: 'SHOP',
        relevance_score: '0.080974',
        ticker_sentiment_score: '0.020173',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.080974',
        ticker_sentiment_score: '-0.091734',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: 'Voyager Bankruptcy: Crypto Broker Crashes on LUNA Collapse',
    url: 'https://www.investors.com/news/voyager-bankruptcy-latest-crypto-casualty-faces-delisting/',
    time_published: '20220706T201800',
    authors: ["Investor's Business Daily", 'HARRISON MILLER'],
    summary:
      "Voyager Bankruptcy: The Latest Crypto Casualty Faces Delisting Investor's Business Daily ...",
    banner_image:
      'https://www.investors.com/wp-content/uploads/2021/04/Stock-bitcoindrop-01a-adobe.jpg',
    source: 'Investors Business Daily',
    category_within_source: 'n/a',
    source_domain: 'www.investors.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.858979',
      },
      {
        topic: 'Blockchain',
        relevance_score: '0.451494',
      },
    ],
    overall_sentiment_score: -0.196326,
    overall_sentiment_label: 'Somewhat-Bearish',
    ticker_sentiment: [
      {
        ticker: 'GOOG',
        relevance_score: '0.074622',
        ticker_sentiment_score: '-0.006929',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'CRYPTO:BTC',
        relevance_score: '0.292078',
        ticker_sentiment_score: '-0.027291',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title:
      'How online searches and texts can put you at risk in a post-Roe world, and how to protect yourself',
    url: 'https://www.cnbc.com/2022/07/06/how-online-searches-texts-can-put-you-at-risk-post-roe-v-wade.html',
    time_published: '20220706T185451',
    authors: ['Lauren Feiner'],
    summary:
      'Digital tools have made it easier to find reproductive healthcare information, but also created new legal risks for those who use them.',
    banner_image:
      'https://image.cnbcfm.com/api/v1/image/107029344-1647030486354-gettyimages-921231310-dsc_9777.jpeg?v=1647030510&w=1920&h=1080',
    source: 'CNBC',
    category_within_source: 'Top News',
    source_domain: 'www.cnbc.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: 0.135843,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'GOOG',
        relevance_score: '0.09989',
        ticker_sentiment_score: '0.135843',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: 'New Preferred Stock IPOs, June 2022',
    url: 'https://www.forbes.com/sites/dividendchannel/2022/07/06/new-preferred-stock-ipos-june-2022/',
    time_published: '20220706T182846',
    authors: ['Dividend Channel'],
    summary:
      'As June 2022 comes to a close, we look back at the new preferred stocks and ETDs introduced during the month, offering annual yields ranging from 6.25% to 13%.',
    banner_image:
      'https://imageio.forbes.com/specials-images/imageserve/62c5d397f446de92754f8ad6/0x0.jpg?format=jpg&width=1200',
    source: 'Forbes',
    category_within_source: 'Markets',
    source_domain: 'www.forbes.com',
    topics: [
      {
        topic: 'Finance',
        relevance_score: '0.25',
      },
      {
        topic: 'Technology',
        relevance_score: '0.25',
      },
      {
        topic: 'Real Estate & Construction',
        relevance_score: '0.25',
      },
      {
        topic: 'Retail & Wholesale',
        relevance_score: '0.25',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '1.0',
      },
      {
        topic: 'IPO',
        relevance_score: '0.310843',
      },
    ],
    overall_sentiment_score: 0.030403,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'PACW',
        relevance_score: '0.037604',
        ticker_sentiment_score: '0.001341',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'FATBP',
        relevance_score: '0.037604',
        ticker_sentiment_score: '0.001055',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'HCDI',
        relevance_score: '0.075125',
        ticker_sentiment_score: '0.001055',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'EIC',
        relevance_score: '0.075125',
        ticker_sentiment_score: '0.001055',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.037604',
        ticker_sentiment_score: '-0.013695',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'HRZN',
        relevance_score: '0.037604',
        ticker_sentiment_score: '-0.003041',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'NREF',
        relevance_score: '0.075125',
        ticker_sentiment_score: '0.001055',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'OXLC',
        relevance_score: '0.037604',
        ticker_sentiment_score: '-3.9e-05',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GEG',
        relevance_score: '0.075125',
        ticker_sentiment_score: '0.002623',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'SOHO',
        relevance_score: '0.075125',
        ticker_sentiment_score: '0.001055',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'NYCB',
        relevance_score: '0.075125',
        ticker_sentiment_score: '0.001055',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'CRYPTO:BTC',
        relevance_score: '0.075125',
        ticker_sentiment_score: '0.003869',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title:
      "Don't Be Surprised Joe Rogan Said He Doesn't Like Trump-Breaking Down Their Complicated History",
    url: 'https://www.forbes.com/sites/dereksaul/2022/07/06/dont-be-surprised-joe-rogan-said-he-doesnt-like-trump-breaking-down-their-complicated-history/',
    time_published: '20220706T180737',
    authors: ['Derek Saul'],
    summary:
      '"I don\'t want to help him," Joe Rogan said about Trump on a podcast this week.',
    banner_image:
      'https://imageio.forbes.com/specials-images/imageserve/62c5ceb5b30e52b462f0ad8c/0x0.jpg?format=jpg&crop=2771,1558,x355,y406,safe&width=1200',
    source: 'Forbes',
    category_within_source: 'Business',
    source_domain: 'www.forbes.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '0.5',
      },
      {
        topic: 'Manufacturing',
        relevance_score: '0.5',
      },
    ],
    overall_sentiment_score: -0.349075,
    overall_sentiment_label: 'Somewhat-Bearish',
    ticker_sentiment: [
      {
        ticker: 'SPOT',
        relevance_score: '0.166801',
        ticker_sentiment_score: '-0.317023',
        ticker_sentiment_label: 'Somewhat-Bearish',
      },
      {
        ticker: 'NYT',
        relevance_score: '0.166801',
        ticker_sentiment_score: '-0.162086',
        ticker_sentiment_label: 'Somewhat-Bearish',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.083862',
        ticker_sentiment_score: '-0.425816',
        ticker_sentiment_label: 'Bearish',
      },
    ],
  },
  {
    title: "Elon Musk Can't Wait to See Disney Lose an Iconic Character",
    url: 'https://www.thestreet.com/technology/elon-musk-cant-wait-to-see-disney-lose-an-iconic-character',
    time_published: '20220706T180600',
    authors: ['Luc Olinga'],
    summary:
      'The billionaire CEO of Tesla, Elon Musk, strongly supports limiting the rights protecting certain original works.',
    banner_image:
      'https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTkwNDk2NzMwNDk0NTQzMDk3/delivery-vans-in-loading-lot-area.jpg',
    source: 'The Street',
    category_within_source: 'n/a',
    source_domain: 'www.thestreet.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '0.5',
      },
      {
        topic: 'Manufacturing',
        relevance_score: '0.5',
      },
    ],
    overall_sentiment_score: -0.070724,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'DBX',
        relevance_score: '0.10933',
        ticker_sentiment_score: '-0.11489',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'TSLA',
        relevance_score: '0.163354',
        ticker_sentiment_score: '0.047875',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'TWTR',
        relevance_score: '0.268885',
        ticker_sentiment_score: '-0.03826',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.163354',
        ticker_sentiment_score: '-0.11489',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title:
      'Cumulus Media Debuts Talk Ville, A "Smallville" Television Show Re-Watch Podcast With Series Stars Tom Welling and Michael Rosenbaum',
    url: 'https://www.globenewswire.com/news-release/2022/07/06/2475399/9032/en/Cumulus-Media-Debuts-Talk-Ville-A-Smallville-Television-Show-Re-Watch-Podcast-With-Series-Stars-Tom-Welling-and-Michael-Rosenbaum.html',
    time_published: '20220706T180500',
    authors: ['Cumulus Media Inc.'],
    summary:
      'NEW YORK, July 06, 2022 ( GLOBE NEWSWIRE ) -- Cumulus Media ( NASDAQ: CMLS ) welcomes Talk Ville to the Cumulus Podcast Network on July 13, 2022. The podcast series will be hosted by Tom Welling, who starred as Clark Kent/Superman, and Michael Rosenbaum, who played Lex Luthor on the hit ...',
    banner_image:
      'https://ml.globenewswire.com/Resource/Download/a45183dc-adee-4e28-b706-eedd63e158ac?size=1',
    source: 'GlobeNewswire',
    category_within_source: 'n/a',
    source_domain: 'www.globenewswire.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: 0.086408,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'SPOT',
        relevance_score: '0.051898',
        ticker_sentiment_score: '0.003944',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'WBD',
        relevance_score: '0.051898',
        ticker_sentiment_score: '0.120554',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.051898',
        ticker_sentiment_score: '0.003944',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'CMLS',
        relevance_score: '0.351344',
        ticker_sentiment_score: '0.098791',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'ICNB',
        relevance_score: '0.051898',
        ticker_sentiment_score: '0.120554',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: 'Amazon May Have a Big Problem In Europe',
    url: 'https://www.thestreet.com/investing/amazon-has-big-european-problems-ahead',
    time_published: '20220706T180100',
    authors: ['Tony Owusu'],
    summary:
      'European countries have been cracking down on Silicon Valley, and now Amazon faces a double barrel of regulatory blasts from Germany and Britain.',
    banner_image:
      'https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTc2NTQ2ODY1OTY0MzI4NzE0/the-castle-of-magical-dreams-photo-hong-kong-disneyland.jpg',
    source: 'The Street',
    category_within_source: 'n/a',
    source_domain: 'www.thestreet.com',
    topics: [
      {
        topic: 'Retail & Wholesale',
        relevance_score: '0.5',
      },
      {
        topic: 'Technology',
        relevance_score: '0.5',
      },
    ],
    overall_sentiment_score: -0.344216,
    overall_sentiment_label: 'Somewhat-Bearish',
    ticker_sentiment: [
      {
        ticker: 'GOOG',
        relevance_score: '0.340071',
        ticker_sentiment_score: '-0.519178',
        ticker_sentiment_label: 'Bearish',
      },
      {
        ticker: 'AMZN',
        relevance_score: '0.747389',
        ticker_sentiment_score: '-0.433814',
        ticker_sentiment_label: 'Bearish',
      },
      {
        ticker: 'ATVI',
        relevance_score: '0.208226',
        ticker_sentiment_score: '-0.01683',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'MSFT',
        relevance_score: '0.208226',
        ticker_sentiment_score: '-0.007172',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'FOREX:EUR',
        relevance_score: '0.275169',
        ticker_sentiment_score: '-0.361164',
        ticker_sentiment_label: 'Bearish',
      },
    ],
  },
  {
    title: 'US July 4 Parade Gunman Considered Second Attack',
    url: 'https://www.barrons.com/amp/news/us-july-4-parade-gunman-considered-second-attack-01657127109',
    time_published: '20220706T175126',
    authors: ['Robin Legrand with Chris Lefkow in Washington'],
    summary:
      'Robert Crimo, the 21-year-old man arrested for a mass shooting at a July 4 parade in an affluent Chicago suburb, has confessed and admitted he considered a second attack while on the run, officials said Wednesday.',
    banner_image:
      'https://www.barrons.com/asset/external-media/afp/AFP4540018983267745548875386854453993020351-us-7-dead-after-shooting-at-fourth-of-july-parade-in-chicago-sub-1.jpg',
    source: 'Barrons',
    category_within_source: 'n/a',
    source_domain: 'www.barrons.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: -0.144243,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'GOOG',
        relevance_score: '0.053165',
        ticker_sentiment_score: '-0.054207',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title:
      'AI Eye Podcast 710: Stocks discussed:  ( OTCPINK: $GTCH )   ( NasdaqGS: $INTC ) ',
    url: 'https://www.investorideas.com/news/2022/artificial-intelligence/07061GTCH-INTC.asp',
    time_published: '20220706T174918',
    authors: [],
    summary: 'AI Eye Podcast 710: Stocks discussed: ...',
    banner_image: null,
    source: 'Investor Ideas',
    category_within_source: 'n/a',
    source_domain: 'www.investorideas.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '0.5',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.999499',
      },
      {
        topic: 'Blockchain',
        relevance_score: '0.158519',
      },
      {
        topic: 'Manufacturing',
        relevance_score: '0.5',
      },
    ],
    overall_sentiment_score: 0.020933,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'GTCH',
        relevance_score: '0.147186',
        ticker_sentiment_score: '0.020224',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'INTC',
        relevance_score: '0.036994',
        ticker_sentiment_score: '0.018282',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.073909',
        ticker_sentiment_score: '0.020183',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'SPOT',
        relevance_score: '0.036994',
        ticker_sentiment_score: '0.00133',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: "Who's afraid of TikTok?",
    url: 'https://www.economist.com/tiktokpod',
    time_published: '20220706T173251',
    authors: [],
    summary:
      "It's the fastest growing app in the world, filled with dance trends, cats misbehaving, and questionable financial advice. Teenagers love it; Western politicians are less convinced. Could TikTok's popularity be its downfall?",
    banner_image:
      'https://www.economist.com/img/b/1280/720/90/media-assets/image/20220709_PDP504.jpg',
    source: 'The Economist',
    category_within_source: 'BusinessGoogleRSS',
    source_domain: 'www.economist.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: -0.035251,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'META',
        relevance_score: '0.223248',
        ticker_sentiment_score: '-0.035251',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.223248',
        ticker_sentiment_score: '-0.035251',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title:
      'CANADA AND BRITISH-COLUMBIA FUND NEARLY 140 HOMES UNDER CONSTRUCTION IN ESQUIMALT',
    url: 'https://www.newswire.ca/news-releases/canada-and-british-columbia-fund-nearly-140-homes-under-construction-in-esquimalt-837897362.html',
    time_published: '20220706T173000',
    authors: ['Canada Mortgage and Housing Corporation'],
    summary:
      'ESQUIMALT, BC, July 6, 2022 /CNW/ - Construction is underway on new rental housing in Esquimalt that will deliver nearly 140 homes for low- and middle-income people in the community.',
    banner_image: '',
    source: 'Canada Newswire',
    category_within_source: 'n/a',
    source_domain: 'www.newswire.ca',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.87644',
      },
    ],
    overall_sentiment_score: 0.54355,
    overall_sentiment_label: 'Bullish',
    ticker_sentiment: [
      {
        ticker: 'META',
        relevance_score: '0.035518',
        ticker_sentiment_score: '0.684351',
        ticker_sentiment_label: 'Bullish',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.035518',
        ticker_sentiment_score: '0.684351',
        ticker_sentiment_label: 'Bullish',
      },
    ],
  },
  {
    title: "What's Next for Pinterest and Bed Bath & Beyond?",
    url: 'https://www.fool.com/investing/2022/07/06/whats-next-for-pinterest-and-bed-bath-beyond/',
    time_published: '20220706T171500',
    authors: ['Deidre Woollard'],
    summary:
      'Plus an interview with Ali Parsa, CEO of Babylon Holdings, a digital-first health services provider.',
    banner_image:
      'https://g.foolcdn.com/editorial/images/688197/digital-art-artist-nfts.jpg',
    source: 'Motley Fool',
    category_within_source: 'n/a',
    source_domain: 'www.fool.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '0.333333',
      },
      {
        topic: 'Manufacturing',
        relevance_score: '0.333333',
      },
      {
        topic: 'Retail & Wholesale',
        relevance_score: '0.333333',
      },
      {
        topic: 'Earnings',
        relevance_score: '0.796627',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.938793',
      },
      {
        topic: 'IPO',
        relevance_score: '0.682689',
      },
    ],
    overall_sentiment_score: 0.128626,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'WMT',
        relevance_score: '0.009369',
        ticker_sentiment_score: '0.26835',
        ticker_sentiment_label: 'Somewhat-Bullish',
      },
      {
        ticker: 'NKE',
        relevance_score: '0.065508',
        ticker_sentiment_score: '-0.038817',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.018736',
        ticker_sentiment_score: '-0.079933',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'DOCU',
        relevance_score: '0.018736',
        ticker_sentiment_score: '0.605873',
        ticker_sentiment_label: 'Bullish',
      },
      {
        ticker: 'PINS',
        relevance_score: '0.176543',
        ticker_sentiment_score: '0.198677',
        ticker_sentiment_label: 'Somewhat-Bullish',
      },
      {
        ticker: 'BBBY',
        relevance_score: '0.037462',
        ticker_sentiment_score: '0.466506',
        ticker_sentiment_label: 'Bullish',
      },
      {
        ticker: 'BBLN',
        relevance_score: '0.056167',
        ticker_sentiment_score: '-0.04951',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'TSLA',
        relevance_score: '0.018736',
        ticker_sentiment_score: '0.136213',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'PYPL',
        relevance_score: '0.018736',
        ticker_sentiment_score: '0.125267',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title:
      'Congo coffee Ltd successfully raised Cnd$7,000,000 of pre-seed funding from Angel investors.',
    url: 'https://www.newswire.ca/news-releases/congo-coffee-ltd-successfully-raised-cnd-7-000-000-of-pre-seed-funding-from-angel-investors--851845160.html',
    time_published: '20220706T170400',
    authors: ['Congo Coffee & Toronto Beignets'],
    summary:
      'TORONTO, July 6, 2022 /CNW/ - The Toronto based cult Canadian coffeehouse closed a 1st round of pre-seed funding from Pittsford, New York Angel investors group. Spearheaded by its founder, Nia Bangala, plans on opening new retail locations for 2023, will help scale up The Congo Coffee brand.',
    banner_image: '',
    source: 'Canada Newswire',
    category_within_source: 'n/a',
    source_domain: 'www.newswire.ca',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: 0.540768,
    overall_sentiment_label: 'Bullish',
    ticker_sentiment: [
      {
        ticker: 'GOOG',
        relevance_score: '0.100308',
        ticker_sentiment_score: '0.121283',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: "Apple to add 'lockdown' safeguard on iPhones, iPads, Macs",
    url: 'https://apnews.com/article/technology-hacking-apple-inc-spyware-ad4fb8df901b525d6fddc359670ce3a9',
    time_published: '20220706T170155',
    authors: [],
    summary:
      'CUPERTINO, Calif. ( AP ) - Apple said it will roll out a "lockdown" option for iPhones, iPads and Mac computers intended to protect against spyware unleashed by state-sponsored hackers - although enabling that protection will also make these devices less useful.',
    banner_image:
      'https://storage.googleapis.com/afs-prod/media/2eae63949ae74440989ea185e5d3446e/3000.jpeg',
    source: 'Associated Press',
    category_within_source: 'Business',
    source_domain: 'apnews.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: -0.033052,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'GOOG',
        relevance_score: '0.12665',
        ticker_sentiment_score: '-0.033052',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: "Alphabet's  ( GOOGL )  Google TV to Woo Users With New Feature",
    url: 'https://www.zacks.com/stock/news/1948794/alphabets-googl-google-tv-to-woo-users-with-new-feature',
    time_published: '20220706T170000',
    authors: ['Zacks Investment Research'],
    summary:
      'Alphabet\'s (GOOGL) Google is offering the show titled "What to Watch on Google TV" from Entertainment Weekly to recommend shows to its users.',
    banner_image:
      'https://staticx-tuner.zacks.com/images/articles/main/aa/397.jpg',
    source: 'Zacks Commentary',
    category_within_source: 'n/a',
    source_domain: 'www.zacks.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '0.5',
      },
      {
        topic: 'Earnings',
        relevance_score: '0.576289',
      },
      {
        topic: 'Manufacturing',
        relevance_score: '0.5',
      },
    ],
    overall_sentiment_score: 0.128788,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'AMD',
        relevance_score: '0.290882',
        ticker_sentiment_score: '-0.030102',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'NKE',
        relevance_score: '0.059474',
        ticker_sentiment_score: '0.769297',
        ticker_sentiment_label: 'Bullish',
      },
      {
        ticker: 'AZPN',
        relevance_score: '0.290882',
        ticker_sentiment_score: '0.002728',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'AAPL',
        relevance_score: '0.290882',
        ticker_sentiment_score: '0.501839',
        ticker_sentiment_label: 'Bullish',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.864344',
        ticker_sentiment_score: '0.09005',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: 'Why Analysts Are Cutting Estimates On Meta, Alphabet',
    url: 'https://www.barrons.com/articles/meta-alphabet-analyst-estimates-ad-tiktok-51657126047',
    time_published: '20220706T164900',
    authors: ['Eric J. Savitz'],
    summary:
      'Wall Street continues to ratchet down estimates for Facebook parent Meta Platforms and Google parent Alphabet on growing conviction that a slowing economy is going to affect online advertising growth. The drumbeat is quickening with the wave of June quarter earnings reports now just a few weeks ...',
    banner_image: 'https://images.barrons.com/im-577058/social',
    source: 'Barrons',
    category_within_source: 'n/a',
    source_domain: 'www.barrons.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
      {
        topic: 'Earnings',
        relevance_score: '0.158519',
      },
    ],
    overall_sentiment_score: 0.0039,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'META',
        relevance_score: '0.95305',
        ticker_sentiment_score: '-0.310997',
        ticker_sentiment_label: 'Somewhat-Bearish',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.679474',
        ticker_sentiment_score: '-0.310997',
        ticker_sentiment_label: 'Somewhat-Bearish',
      },
    ],
  },
  {
    title: 'Alphabet Stock Is Setting Up for a Trade Ahead of Stock Split',
    url: 'https://www.thestreet.com/investing/trading-alphabet-stock-before-split-technical-analysis-july-2022',
    time_published: '20220706T160600',
    authors: ['Bret Kenwell'],
    summary:
      "Alphabet stock has an interesting setup before the tech giant splits the shares. Here's the trade to know.",
    banner_image:
      'https://www.thestreet.com/.image/t_share/MTkwNzA2MjU3NTIxMjg5MDg0/googl.png',
    source: 'The Street',
    category_within_source: 'n/a',
    source_domain: 'www.thestreet.com',
    topics: [
      {
        topic: 'Retail & Wholesale',
        relevance_score: '0.5',
      },
      {
        topic: 'Technology',
        relevance_score: '0.5',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.54554',
      },
    ],
    overall_sentiment_score: -0.198096,
    overall_sentiment_label: 'Somewhat-Bearish',
    ticker_sentiment: [
      {
        ticker: 'AMZN',
        relevance_score: '0.167729',
        ticker_sentiment_score: '0.066226',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.249276',
        ticker_sentiment_score: '-0.306336',
        ticker_sentiment_label: 'Somewhat-Bearish',
      },
    ],
  },
  {
    title: "Ubisoft Announces Tom Clancy's the Division® Resurgence",
    url: 'https://www.globenewswire.com/news-release/2022/07/06/2475327/0/en/Ubisoft-Announces-Tom-Clancy-s-the-Division-Resurgence.html',
    time_published: '20220706T160000',
    authors: ['UBISOFT ENTERTAINMENT'],
    summary:
      "Players Can Now Sign Up for a Chance to Participate in Upcoming Tests of the Franchise's First Mobile Game PARIS - July 6, 2022 - Today, Ubisoft announced Tom Clancy's The Division® Resurgence, a new free-to-play, third-person shooter RPG mobile game from the Tom Clancy's The Division franchise.",
    banner_image:
      'https://ml-eu.globenewswire.com/Resource/Download/f1ecaaa3-2a0f-46bf-8518-bccea1d729ee?size=1',
    source: 'GlobeNewswire',
    category_within_source: 'n/a',
    source_domain: 'www.globenewswire.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: 0.155412,
    overall_sentiment_label: 'Somewhat-Bullish',
    ticker_sentiment: [
      {
        ticker: 'UBSFF',
        relevance_score: '0.069234',
        ticker_sentiment_score: '0.003156',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.069234',
        ticker_sentiment_score: '0.010359',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: 'Raymond James Downgrades Rating On VMware - Read Why',
    url: 'https://www.benzinga.com/news/22/07/27973118/raymond-james-downgrades-rating-on-vmware-following-expiry-of-go-shop-period-with-no-other-bidders',
    time_published: '20220706T155140',
    authors: ['Anusuya Lahiri'],
    summary:
      'Raymond James analyst Simon Leopold downgraded VMware, Inc VMW from Outperform to Market Perform. The re-rating reflects the expiry of the "Go Shop" period with no other bidders. He expects Broadcom Inc AVGO deal to win approval but will take about a year to close.',
    banner_image:
      'https://cdn.benzinga.com/files/images/story/2022/07/06/abtech_9.png?optimize=medium&dpr=2&auto=webp&width=3840',
    source: 'Benzinga',
    category_within_source: 'News',
    source_domain: 'www.benzinga.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '0.5',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.108179',
      },
      {
        topic: 'Earnings',
        relevance_score: '0.158519',
      },
      {
        topic: 'Manufacturing',
        relevance_score: '0.5',
      },
    ],
    overall_sentiment_score: 0.022142,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'IBM',
        relevance_score: '0.273705',
        ticker_sentiment_score: '0.064932',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'NTNX',
        relevance_score: '0.273705',
        ticker_sentiment_score: '0.064932',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'AVGO',
        relevance_score: '0.706362',
        ticker_sentiment_score: '-0.078255',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.273705',
        ticker_sentiment_score: '0.351026',
        ticker_sentiment_label: 'Bullish',
      },
      {
        ticker: 'DELL',
        relevance_score: '0.273705',
        ticker_sentiment_score: '0.000419',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'CSCO',
        relevance_score: '0.400478',
        ticker_sentiment_score: '0.177671',
        ticker_sentiment_label: 'Somewhat-Bullish',
      },
      {
        ticker: 'VMW',
        relevance_score: '0.838557',
        ticker_sentiment_score: '0.037253',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: "Building Solo: Combating Founder's Paradox | The Financial Express",
    url: 'https://www.financialexpress.com/jobs/building-solo-combating-founders-paradox/2585491/',
    time_published: '20220706T153528',
    authors: [],
    summary:
      "Circumstances and drive put me on the path as a solo founder with a massive vision to 'delay skin ageing' globally and understand the effects of climate change on skin ageing and global skincare consumption patterns.",
    banner_image:
      'https://www.financialexpress.com/wp-content/uploads/2022/07/productivity-1200-pixabay.jpg',
    source: 'The Financial Express',
    category_within_source: 'n/a',
    source_domain: 'www.financialexpress.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: 0.161659,
    overall_sentiment_label: 'Somewhat-Bullish',
    ticker_sentiment: [
      {
        ticker: 'GOOG',
        relevance_score: '0.032325',
        ticker_sentiment_score: '0.161659',
        ticker_sentiment_label: 'Somewhat-Bullish',
      },
    ],
  },
  {
    title: "Here's Why Heartcore Shares Are Trading Higher Today",
    url: 'https://www.benzinga.com/news/22/07/27971823/heres-why-heartcore-shares-are-trading-higher-today',
    time_published: '20220706T153233',
    authors: ['Anusuya Lahiri'],
    summary:
      'Leading software development company Heartcore Enterprises, Inc HTCR launched "truRes-12K", the world\'s first 12k-compatible real-time 360° virtual reality camera.',
    banner_image:
      'https://cdn.benzinga.com/files/images/story/2022/07/06/abtech_7.png?optimize=medium&dpr=2&auto=webp&width=3840',
    source: 'Benzinga',
    category_within_source: 'Trading',
    source_domain: 'www.benzinga.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
      {
        topic: 'Blockchain',
        relevance_score: '0.158519',
      },
    ],
    overall_sentiment_score: -0.03647,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'HTCR',
        relevance_score: '0.478494',
        ticker_sentiment_score: '0.019669',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.1692',
        ticker_sentiment_score: '0.002713',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title:
      'Set-top Boxes Market Gains Attractive Business Avenues with Rising Global Trend of Using Smart TVs, States TMR Study',
    url: 'https://www.prnewswire.com/news-releases/set-top-boxes-market-gains-attractive-business-avenues-with-rising-global-trend-of-using-smart-tvs-states-tmr-study-301580715.html',
    time_published: '20220706T153000',
    authors: ['Transparency Market Research'],
    summary:
      '• The global set-top boxes market is projected to gain a valuation of by 2031 • Increase in demand for high-resolution video quality and high-quality sound is generating sizable business opportunities for set-top boxes manufacturers',
    banner_image:
      'https://mma.prnewswire.com/media/1682871/TMR_Logo_Logo.jpg?p=facebook',
    source: 'PR Newswire',
    category_within_source: 'n/a',
    source_domain: 'www.prnewswire.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: 0.017871,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'NFLX',
        relevance_score: '0.044877',
        ticker_sentiment_score: '0.018509',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.089612',
        ticker_sentiment_score: '0.017871',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: '8 ways the metaverse can change inclusion at work',
    url: 'https://www.fastcompany.com/90766687/8-ways-the-metaverse-can-change-inclusion-at-work',
    time_published: '20220706T151001',
    authors: [],
    summary: "The metaverse's effect on workplace inclusion Fast Company ...",
    banner_image:
      'https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2022/07/p-1-ways-the-metaverse-has-transformed-workplace-inclusion.jpg',
    source: 'Fast Company',
    category_within_source: 'n/a',
    source_domain: 'www.fastcompany.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
      {
        topic: 'Blockchain',
        relevance_score: '0.158519',
      },
    ],
    overall_sentiment_score: 0.045257,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'GOOG',
        relevance_score: '0.027282',
        ticker_sentiment_score: '0.13336',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'MSFT',
        relevance_score: '0.054532',
        ticker_sentiment_score: '0.028114',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: 'T. ROWE PRICE ANNOUNCES STRATEGIC PROMOTIONS IN CANADA',
    url: 'https://www.newswire.ca/news-releases/t-rowe-price-announces-strategic-promotions-in-canada-872678526.html',
    time_published: '20220706T150000',
    authors: ['Inc.', 'T. Rowe Price Group'],
    summary:
      "Lauren Bloom Promoted to Head of Canada; Samantha Cleyn Promoted to Head of Institutional for Canada BALTIMORE, July 6, 2022 /CNW/ -- T. Rowe Price announced that Lauren Bloom has been named head of Canada. Bloom is responsible for leading and executing T. Rowe Price's distribution business ...",
    banner_image: '',
    source: 'Canada Newswire',
    category_within_source: 'n/a',
    source_domain: 'www.newswire.ca',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.503496',
      },
    ],
    overall_sentiment_score: 0.200357,
    overall_sentiment_label: 'Somewhat-Bullish',
    ticker_sentiment: [
      {
        ticker: 'META',
        relevance_score: '0.055403',
        ticker_sentiment_score: '0.026683',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.055403',
        ticker_sentiment_score: '0.026683',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: 'T. ROWE PRICE ANNOUNCES STRATEGIC PROMOTIONS IN CANADA',
    url: 'https://www.prnewswire.com/news-releases/t-rowe-price-announces-strategic-promotions-in-canada-301581570.html',
    time_published: '20220706T150000',
    authors: ['Inc.', 'T. Rowe Price Group'],
    summary:
      'Lauren Bloom Promoted to Head of Canada; Samantha Cleyn Promoted to Head of Institutional for Canada BALTIMORE, July 6, 2022 /PRNewswire/ -- T. Rowe Price announced that Lauren Bloom has been named head of Canada. Bloom is responsible for leading and executing T.',
    banner_image: '',
    source: 'PR Newswire',
    category_within_source: 'n/a',
    source_domain: 'www.prnewswire.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.503496',
      },
    ],
    overall_sentiment_score: 0.200357,
    overall_sentiment_label: 'Somewhat-Bullish',
    ticker_sentiment: [
      {
        ticker: 'META',
        relevance_score: '0.055313',
        ticker_sentiment_score: '0.026683',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.055313',
        ticker_sentiment_score: '0.026683',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title:
      "Gaming Stock News: Tiidal Gaming's  ( CSE: TIDL )  Sportsflare Division to Sign Live In-Game Data License with Bayes Esports",
    url: 'https://www.investorideas.com/news/2022/gaming/07061CSE-TIDL.asp',
    time_published: '20220706T145319',
    authors: [],
    summary:
      "Gaming Stock News: Tiidal Gaming's ( CSE: TIDL ) Sportsflare Division to Sign Live In-Game Data License with Bayes ...",
    banner_image: null,
    source: 'Investor Ideas',
    category_within_source: 'n/a',
    source_domain: 'www.investorideas.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.310843',
      },
    ],
    overall_sentiment_score: 0.044941,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'GOOG',
        relevance_score: '0.042503',
        ticker_sentiment_score: '0.211893',
        ticker_sentiment_label: 'Somewhat-Bullish',
      },
    ],
  },
  {
    title:
      "Bitcoin is the 'Holy Grail' of accounting, says Core Scientific founder",
    url: 'https://www.theblock.co/post/155969/bitcoin-is-the-holy-grail-of-accounting-says-core-scientific-founder',
    time_published: '20220706T144238',
    authors: [],
    summary:
      "Episode 61 of Season 4 of The Scoop was recorded remotely with The Block's Frank Chaparro and Darin Feinstein, founder of Core Scientific. Listen below, and subscribe to The Scoop on Apple, Spotify, Google Podcasts, Stitcher or wherever you listen to podcasts.",
    banner_image:
      'https://www.tbstat.com/wp/uploads/2022/04/SOMA_THE-BLOCK-ads_450x450.png',
    source: 'The Block Crypto',
    category_within_source: 'n/a',
    source_domain: 'www.theblock.co',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
      {
        topic: 'Blockchain',
        relevance_score: '0.310843',
      },
    ],
    overall_sentiment_score: 0.02197,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'SPOT',
        relevance_score: '0.098014',
        ticker_sentiment_score: '0.006712',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.098014',
        ticker_sentiment_score: '0.006712',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'CORZ',
        relevance_score: '0.194554',
        ticker_sentiment_score: '0.002053',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'CRYPTO:BTC',
        relevance_score: '0.288214',
        ticker_sentiment_score: '0.002404',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: 'AVGO: 4 Top Stocks with High Scores for Growth',
    url: 'https://stocknews.com/news/avgo-crus-rnecf-xper-4-top-stocks-with-high-scores-for-growth/',
    time_published: '20220706T142915',
    authors: [],
    summary:
      "The stock market has witnessed a massive sell-off on worries over the Federal Reserve's aggressive interest rate hikes to tame the high inflation. Amid efforts to bring down the rising inflationary pressure, the central bank raised the interest rates by 75 basis points last month.",
    banner_image:
      'https://stocknews.com/wp-content/uploads/2020/01/business-growth-1-1057028-1-scaled.jpg',
    source: 'Stocknews.com',
    category_within_source: 'n/a',
    source_domain: 'stocknews.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '0.333333',
      },
      {
        topic: 'Manufacturing',
        relevance_score: '0.333333',
      },
      {
        topic: 'Finance',
        relevance_score: '0.333333',
      },
      {
        topic: 'Earnings',
        relevance_score: '1.0',
      },
      {
        topic: 'Economy - Monetary',
        relevance_score: '0.576289',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.999612',
      },
    ],
    overall_sentiment_score: 0.046566,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'VMW',
        relevance_score: '0.067817',
        ticker_sentiment_score: '0.003017',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'CRUS',
        relevance_score: '0.22333',
        ticker_sentiment_score: '0.181395',
        ticker_sentiment_label: 'Somewhat-Bullish',
      },
      {
        ticker: 'AVGO',
        relevance_score: '0.24498',
        ticker_sentiment_score: '0.093957',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'XPER',
        relevance_score: '0.201505',
        ticker_sentiment_score: '0.07795',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.045241',
        ticker_sentiment_score: '0.08143',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'TTM',
        relevance_score: '0.02263',
        ticker_sentiment_score: '0.005284',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'RNECF',
        relevance_score: '0.179521',
        ticker_sentiment_score: '0.082981',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'MS',
        relevance_score: '0.02263',
        ticker_sentiment_score: '-0.909556',
        ticker_sentiment_label: 'Bearish',
      },
    ],
  },
  {
    title:
      "Looking For More Retirement Income? Here's Why A Reverse Mortgage May Be The Answer.",
    url: 'https://www.forbes.com/sites/joeljohnson/2022/07/06/looking-for-more-retirement-income-heres-why-a-reverse-mortgage-may-be-the-answer/',
    time_published: '20220706T142307',
    authors: ['Joel Johnson'],
    summary:
      'One way seniors aged 62 and older can access their home equity is with a federally insured reverse mortgage, known as a Home Equity Conversion Mortgage or HECM.',
    banner_image:
      'https://imageio.forbes.com/specials-images/imageserve/62c5980cc9297f98aff9d831/0x0.jpg?format=jpg&crop=2698,1518,x0,y139,safe&width=1200',
    source: 'Forbes',
    category_within_source: 'Money',
    source_domain: 'www.forbes.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: -0.002313,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'GOOG',
        relevance_score: '0.057106',
        ticker_sentiment_score: '0.306832',
        ticker_sentiment_label: 'Somewhat-Bullish',
      },
    ],
  },
  {
    title:
      'Worldwide Hyperscale Data Center Industry to 2027 - Rising Submarine Cable & Inland Connectivity is Driving Growth',
    url: 'https://www.prnewswire.com/news-releases/worldwide-hyperscale-data-center-industry-to-2027---rising-submarine-cable--inland-connectivity-is-driving-growth-301581365.html',
    time_published: '20220706T141500',
    authors: ['Research and Markets'],
    summary:
      'DUBLIN, July 6, 2022 /PRNewswire/ -- The "Hyperscale Data Center Market - Global Outlook and Forecast 2022-2027" report has been added to ResearchAndMarkets.com\'s offering.',
    banner_image:
      'https://mma.prnewswire.com/media/539438/Research_and_Markets_Logo.jpg?p=facebook',
    source: 'PR Newswire',
    category_within_source: 'n/a',
    source_domain: 'www.prnewswire.com',
    topics: [
      {
        topic: 'Retail & Wholesale',
        relevance_score: '0.5',
      },
      {
        topic: 'Technology',
        relevance_score: '0.5',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.77141',
      },
      {
        topic: 'Mergers & Acquisitions',
        relevance_score: '0.158519',
      },
    ],
    overall_sentiment_score: 0.011836,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'HTHIF',
        relevance_score: '0.023057',
        ticker_sentiment_score: '0.00092',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'QUCCF',
        relevance_score: '0.023057',
        ticker_sentiment_score: '0.00092',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'MSFT',
        relevance_score: '0.023057',
        ticker_sentiment_score: '0.020974',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.023057',
        ticker_sentiment_score: '0.020974',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'HPE',
        relevance_score: '0.023057',
        ticker_sentiment_score: '0.00092',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'HPQ',
        relevance_score: '0.023057',
        ticker_sentiment_score: '0.00092',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title:
      'Top Flight Anxiety Help App SkyGuru Announces API Platform for Third-Party Integration',
    url: 'https://www.benzinga.com/pressreleases/22/07/g27971471/top-flight-anxiety-help-app-skyguru-announces-api-platform-for-third-party-integration',
    time_published: '20220706T140500',
    authors: ['Globe Newswire'],
    summary:
      'San Jose, CA, July 06, 2022 ( GLOBE NEWSWIRE ) -- Aerophobia, or the fear of flying, is one of the most common fears, affecting an estimated 40% of U.S. adults. Around one in three people have some level of fear of flying.',
    banner_image: '',
    source: 'Benzinga',
    category_within_source: 'News',
    source_domain: 'www.benzinga.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '0.5',
      },
      {
        topic: 'Real Estate & Construction',
        relevance_score: '0.5',
      },
    ],
    overall_sentiment_score: -0.029486,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'APG',
        relevance_score: '0.181477',
        ticker_sentiment_score: '0.004677',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.091335',
        ticker_sentiment_score: '0.00503',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title:
      "Tinuiti's Board of Directors Injects Marketing and Business Growth Expertise with Industry Veteran Susan Vobejda as Newest Board Member",
    url: 'https://www.prnewswire.com/news-releases/tinuitis-board-of-directors-injects-marketing-and-business-growth-expertise-with-industry-veteran-susan-vobejda-as-newest-board-member-301581133.html',
    time_published: '20220706T140000',
    authors: ['Tinuiti'],
    summary:
      'Vobejda also currently serves on the Board of Directors for total-vision healthcare company, MyEyeDr., and previously sat on the Board of Directors for Cision, an earned media software company.',
    banner_image:
      'https://mma.prnewswire.com/media/1853895/Tinuiti___Susan_Vobejda___Newest_Board_Member.jpg?w=500',
    source: 'PR Newswire',
    category_within_source: 'n/a',
    source_domain: 'www.prnewswire.com',
    topics: [
      {
        topic: 'Retail & Wholesale',
        relevance_score: '0.5',
      },
      {
        topic: 'Technology',
        relevance_score: '0.5',
      },
    ],
    overall_sentiment_score: 0.117453,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'TTD',
        relevance_score: '0.088964',
        ticker_sentiment_score: '0.205182',
        ticker_sentiment_label: 'Somewhat-Bullish',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.044551',
        ticker_sentiment_score: '0.052534',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GPS',
        relevance_score: '0.044551',
        ticker_sentiment_score: '0.012614',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'RAMP',
        relevance_score: '0.044551',
        ticker_sentiment_score: '0.073496',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title:
      'SOCi Chosen by Rent-A-Center to Localize their Digital Marketing Presence in the Omnichannel Shopping Era',
    url: 'https://www.prnewswire.com/news-releases/soci-chosen-by-rent-a-center-to-localize-their-digital-marketing-presence-in-the-omnichannel-shopping-era-301581435.html',
    time_published: '20220706T140000',
    authors: ['SOCi'],
    summary:
      'Leading omnichannel lease-to-own company uses SOCi to unlock localized and franchise digital marketing SAN DIEGO, July 6, 2022 /PRNewswire/ -- , the leading dedicated lease-to-own retail channel for durable goods such as furniture, electronics, and appliances, named its localized marketing ...',
    banner_image:
      'https://mma.prnewswire.com/media/1766735/SOCi.jpg?p=facebook',
    source: 'PR Newswire',
    category_within_source: 'n/a',
    source_domain: 'www.prnewswire.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: 0.078938,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'META',
        relevance_score: '0.052409',
        ticker_sentiment_score: '0.055584',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.104591',
        ticker_sentiment_score: '0.055584',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'RCII',
        relevance_score: '0.530351',
        ticker_sentiment_score: '0.078938',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: 'TikTok drops e-commerce expansion plans in Europe, US, says report',
    url: 'https://www.business-standard.com/article/technology/tiktok-drops-e-commerce-expansion-plans-in-europe-us-says-report-122070600508_1.html',
    time_published: '20220706T135100',
    authors: ['IANS'],
    summary:
      'After unsuccessful attempts, short-video platform TikTok is scaling back its live commerce plans in Europe and the US, media reports say.',
    banner_image:
      'https://bsmedia.business-standard.com/_media/bs/img/article/2020-09/28/full/1601258328-276.jpg?im=Resize,width=640',
    source: 'Business Standard',
    category_within_source: 'Top Stories',
    source_domain: 'www.business-standard.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.158519',
      },
    ],
    overall_sentiment_score: -0.000908,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'GOOG',
        relevance_score: '0.141809',
        ticker_sentiment_score: '-0.000908',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: 'A Darkened Outlook for Britain',
    url: 'https://www.nytimes.com/2022/07/06/business/dealbook/uk-britain-economy-boris-johnson.html',
    time_published: '20220706T134807',
    authors: [],
    summary:
      'The political instability comes as Britain gears up for a difficult summer, amid surging energy prices and labor shortages.',
    banner_image:
      'https://static01.nyt.com/images/2022/07/06/multimedia/06db-johnson/06db-johnson-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    source: 'New York Times',
    category_within_source: 'Dealbook',
    source_domain: 'www.nytimes.com',
    topics: [
      {
        topic: 'Retail & Wholesale',
        relevance_score: '0.333333',
      },
      {
        topic: 'Technology',
        relevance_score: '0.333333',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.684621',
      },
      {
        topic: 'Economy - Monetary',
        relevance_score: '0.158519',
      },
      {
        topic: 'Manufacturing',
        relevance_score: '0.333333',
      },
    ],
    overall_sentiment_score: -0.359796,
    overall_sentiment_label: 'Bearish',
    ticker_sentiment: [
      {
        ticker: 'SPOT',
        relevance_score: '0.024506',
        ticker_sentiment_score: '-0.080848',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'ASML',
        relevance_score: '0.024506',
        ticker_sentiment_score: '-0.536175',
        ticker_sentiment_label: 'Bearish',
      },
      {
        ticker: 'GM',
        relevance_score: '0.024506',
        ticker_sentiment_score: '-0.777871',
        ticker_sentiment_label: 'Bearish',
      },
      {
        ticker: 'UBER',
        relevance_score: '0.024506',
        ticker_sentiment_score: '-0.080848',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.024506',
        ticker_sentiment_score: '-0.080848',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'NVDA',
        relevance_score: '0.024506',
        ticker_sentiment_score: '-0.106925',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'YNDX',
        relevance_score: '0.097794',
        ticker_sentiment_score: '-0.312298',
        ticker_sentiment_label: 'Somewhat-Bearish',
      },
      {
        ticker: 'WMT',
        relevance_score: '0.048989',
        ticker_sentiment_score: '0.004279',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'FOREX:EUR',
        relevance_score: '0.024506',
        ticker_sentiment_score: '-0.589423',
        ticker_sentiment_label: 'Bearish',
      },
      {
        ticker: 'FOREX:USD',
        relevance_score: '0.073426',
        ticker_sentiment_score: '-0.247106',
        ticker_sentiment_label: 'Somewhat-Bearish',
      },
      {
        ticker: 'FOREX:GBP',
        relevance_score: '0.024506',
        ticker_sentiment_score: '-0.021806',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'CRYPTO:BTC',
        relevance_score: '0.048989',
        ticker_sentiment_score: '-0.450979',
        ticker_sentiment_label: 'Bearish',
      },
    ],
  },
  {
    title: 'Best Penny Stocks To Buy? 2 Analysts Have High Hopes For These 3',
    url: 'https://pennystocks.com/featured/2022/07/06/best-penny-stocks-to-buy-2-analysts-have-high-hopes-for-these-3/',
    time_published: '20220706T133704',
    authors: ['J. Samuel'],
    summary:
      'Ready to buy penny stocks but not sure where to begin? Assuming you understand the basics of trading penny stocks, your next step is finding some to trade. The best place to start is by creating a watch list.',
    banner_image: null,
    source: 'PennyStocks.com',
    category_within_source: 'n/a',
    source_domain: 'pennystocks.com',
    topics: [
      {
        topic: 'Retail & Wholesale',
        relevance_score: '0.25',
      },
      {
        topic: 'Technology',
        relevance_score: '0.25',
      },
      {
        topic: 'Blockchain',
        relevance_score: '0.310843',
      },
      {
        topic: 'Manufacturing',
        relevance_score: '0.25',
      },
      {
        topic: 'Finance',
        relevance_score: '0.25',
      },
      {
        topic: 'Earnings',
        relevance_score: '0.538269',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.413559',
      },
    ],
    overall_sentiment_score: -0.049115,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'CAN',
        relevance_score: '0.116104',
        ticker_sentiment_score: '-0.192127',
        ticker_sentiment_label: 'Somewhat-Bearish',
      },
      {
        ticker: 'RFP',
        relevance_score: '0.077556',
        ticker_sentiment_score: '-0.584905',
        ticker_sentiment_label: 'Bearish',
      },
      {
        ticker: 'LVO',
        relevance_score: '0.229763',
        ticker_sentiment_score: '0.085346',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.038824',
        ticker_sentiment_score: '0.590956',
        ticker_sentiment_label: 'Bullish',
      },
      {
        ticker: 'INTR',
        relevance_score: '0.266703',
        ticker_sentiment_score: '-0.032327',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'CRYPTO:BTC',
        relevance_score: '0.116104',
        ticker_sentiment_score: '-0.213378',
        ticker_sentiment_label: 'Somewhat-Bearish',
      },
    ],
  },
  {
    title:
      'Street Washer Machine Market Attracts Sizable Business Opportunities with Increasing Product Use in Construction Areas, Notes TMR Study',
    url: 'https://www.prnewswire.com/news-releases/street-washer-machine-market-attracts-sizable-business-opportunities-with-increasing-product-use-in-construction-areas-notes-tmr-study-301580690.html',
    time_published: '20220706T133000',
    authors: ['Transparency Market Research'],
    summary:
      '• The street washer machine market in is projected to gain a value of by 2031 • Rise in the machine use for road sanitizations is propelling the street washer machine market',
    banner_image:
      'https://mma.prnewswire.com/media/1682871/TMR_Logo_Logo.jpg?p=facebook',
    source: 'PR Newswire',
    category_within_source: 'n/a',
    source_domain: 'www.prnewswire.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: 0.013544,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'GOOG',
        relevance_score: '0.039386',
        ticker_sentiment_score: '0.002947',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title:
      'McDonald\'s "Levels Up" Popular Gaming Collective OfflineTV as First Food and Beverage Sponsor',
    url: 'https://investingnews.com/mcdonald-s-levels-up-popular-gaming-collective-offlinetv-as-first-food-and-beverage-sponsor/',
    time_published: '20220706T132609',
    authors: [],
    summary:
      "Major deal opens the door for the minority-owned group to create more entertaining, genuine content and in-person experiences OfflineTV and McDonald's USA have joined forces to connect fans with their favorite gamers both online and IRL through a partnership that will come to life through ...",
    banner_image:
      'https://mma.prnewswire.com/media/1735201/East_Side_Games_Group_The_Office__Somehow_We_Manage_Mobile_Game.jpg',
    source: 'Investing News Network',
    category_within_source: 'n/a',
    source_domain: 'investingnews.com',
    topics: [
      {
        topic: 'Retail & Wholesale',
        relevance_score: '0.5',
      },
      {
        topic: 'Technology',
        relevance_score: '0.5',
      },
    ],
    overall_sentiment_score: 0.280391,
    overall_sentiment_label: 'Somewhat-Bullish',
    ticker_sentiment: [
      {
        ticker: 'META',
        relevance_score: '0.053665',
        ticker_sentiment_score: '0.294222',
        ticker_sentiment_label: 'Somewhat-Bullish',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.053665',
        ticker_sentiment_score: '0.073314',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'MCD',
        relevance_score: '0.65398',
        ticker_sentiment_score: '0.319089',
        ticker_sentiment_label: 'Somewhat-Bullish',
      },
    ],
  },
  {
    title:
      "UK antitrust officials investigate Microsoft's $68.7 billion Activision Blizzard acquisition | Business",
    url: 'https://www.cnn.com/2022/07/06/tech/microsoft-activision-uk-antitrust/index.html',
    time_published: '20220706T132000',
    authors: ['Brian Fung'],
    summary:
      "UK antitrust officials investigate Microsoft's $68.7 billion Activision Blizzard acquisition ...",
    banner_image:
      'https://media.cnn.com/api/v1/images/stellar/prod/220613142256-microsoft-us-store-0124.jpg?c=16x9&q=h_144,w_256,c_fill',
    source: 'CNN',
    category_within_source: 'Markets',
    source_domain: 'www.cnn.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: 0.102883,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'GOOG',
        relevance_score: '0.088734',
        ticker_sentiment_score: '0.029009',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'TCTZF',
        relevance_score: '0.088734',
        ticker_sentiment_score: '0.019609',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'SNEJF',
        relevance_score: '0.176373',
        ticker_sentiment_score: '0.019609',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'ATVI',
        relevance_score: '0.176373',
        ticker_sentiment_score: '0.002138',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'MSFT',
        relevance_score: '0.627355',
        ticker_sentiment_score: '0.116894',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: 'Amazon scores Ukrainian award for helping with the war',
    url: 'https://www.foxbusiness.com/politics/amazon-scores-ukrainian-award-helping-war',
    time_published: '20220706T132000',
    authors: [],
    summary:
      'Amazon on Wednesday was awarded the "Distinction of the World" by Ukrainian officials for its help in aiding Kyiv in its war against Russia.',
    banner_image:
      'https://cf-images.us-east-1.prod.boltdns.net/v1/static/854081161001/20ddab44-ca57-42a0-bb37-22a60444cfa7/7932af0c-7faa-4477-b4b5-462099d747d9/1280x720/match/image.jpg',
    source: 'Fox Business News',
    category_within_source: 'n/a',
    source_domain: 'www.foxbusiness.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '1.0',
      },
    ],
    overall_sentiment_score: -0.102994,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'FOX',
        relevance_score: '0.229257',
        ticker_sentiment_score: '-0.371747',
        ticker_sentiment_label: 'Bearish',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.115843',
        ticker_sentiment_score: '0.081828',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'MSFT',
        relevance_score: '0.115843',
        ticker_sentiment_score: '0.081828',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title:
      'Facebook, Instagram Fall Prey To Data Scraping; Indict Chinese Company',
    url: 'https://www.benzinga.com/news/22/07/27968543/facebook-insta-fall-prey-to-data-scraping-indicts-chinese-company',
    time_published: '20220706T131710',
    authors: ['Anusuya Lahiri'],
    summary:
      'Meta Platforms, Inc META prosecuted Octopus Data, the U.S. subsidiary of a Chinese national high-tech enterprise Shenzhen Vision Information Technology Co. Octopus Data allegedly offered data scraping services for Facebook and Instagram.',
    banner_image:
      'https://cdn.benzinga.com/files/images/story/2022/07/06/instagram_-_image_by_stocksnap_from_pixabay.jpg?optimize=medium&dpr=2&auto=webp&width=3840',
    source: 'Benzinga',
    category_within_source: 'News',
    source_domain: 'www.benzinga.com',
    topics: [
      {
        topic: 'Retail & Wholesale',
        relevance_score: '0.5',
      },
      {
        topic: 'Technology',
        relevance_score: '0.5',
      },
    ],
    overall_sentiment_score: -0.179599,
    overall_sentiment_label: 'Somewhat-Bearish',
    ticker_sentiment: [
      {
        ticker: 'META',
        relevance_score: '0.67522',
        ticker_sentiment_score: '-0.289951',
        ticker_sentiment_label: 'Somewhat-Bearish',
      },
      {
        ticker: 'BABA',
        relevance_score: '0.25726',
        ticker_sentiment_score: '-0.003318',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'MSFT',
        relevance_score: '0.377522',
        ticker_sentiment_score: '0.001414',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'AMZN',
        relevance_score: '0.377522',
        ticker_sentiment_score: '0.001414',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.377522',
        ticker_sentiment_score: '0.001414',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'TWTR',
        relevance_score: '0.25726',
        ticker_sentiment_score: '0.001414',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'SZIHF',
        relevance_score: '0.25726',
        ticker_sentiment_score: '-0.001585',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
  {
    title: 'Breakthroughs in 5G Tech Reshape the Data Connectivity Marketplace',
    url: 'https://www.prnewswire.com/news-releases/breakthroughs-in-5g-tech-reshape-the-data-connectivity-marketplace-301581418.html',
    time_published: '20220706T130000',
    authors: ['FinancialBuzz.com'],
    summary:
      'NEW YORK, July 6, 2022 /PRNewswire/ -- The global telecom market is highly fragmented. Generally, it consists of sales of telecom goods and services by entities that provide communication hardware equipment for the transmission of voice, data, text and video.',
    banner_image: '',
    source: 'PR Newswire',
    category_within_source: 'n/a',
    source_domain: 'www.prnewswire.com',
    topics: [
      {
        topic: 'Technology',
        relevance_score: '0.5',
      },
      {
        topic: 'Financial Markets',
        relevance_score: '0.990999',
      },
      {
        topic: 'Manufacturing',
        relevance_score: '0.5',
      },
    ],
    overall_sentiment_score: 0.044833,
    overall_sentiment_label: 'Neutral',
    ticker_sentiment: [
      {
        ticker: 'SWKS',
        relevance_score: '0.071779',
        ticker_sentiment_score: '0.066708',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'META',
        relevance_score: '0.017968',
        ticker_sentiment_score: '0.001699',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'AMD',
        relevance_score: '0.160621',
        ticker_sentiment_score: '0.040413',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'MRVL',
        relevance_score: '0.071779',
        ticker_sentiment_score: '0.049801',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'GOOG',
        relevance_score: '0.071779',
        ticker_sentiment_score: '0.050183',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'RNG',
        relevance_score: '0.142978',
        ticker_sentiment_score: '0.061397',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'SIMTF',
        relevance_score: '0.017968',
        ticker_sentiment_score: '0.261966',
        ticker_sentiment_label: 'Somewhat-Bullish',
      },
      {
        ticker: 'VOD',
        relevance_score: '0.053866',
        ticker_sentiment_score: '0.089683',
        ticker_sentiment_label: 'Neutral',
      },
      {
        ticker: 'UCL',
        relevance_score: '0.195656',
        ticker_sentiment_score: '0.025652',
        ticker_sentiment_label: 'Neutral',
      },
    ],
  },
];
