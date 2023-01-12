// COMPANIES
`create table companies (
	id VARCHAR(50) UNIQUE NOT NULL,
	company_name VARCHAR(255) UNIQUE NOT NULL,
	industry VARCHAR(255),
	market_cap VARCHAR(50),
	logo_img VARCHAR(255),
	street_address VARCHAR(255),
	state VARCHAR(50),
	phone VARCHAR(50)
);`;
const companies = [
  {
    id: '21ImC8IUCp19m&QEfdBbg',
    company_name: "Raynor, Dietrich and O'Hara",
    industry: 'EDP Services',
    market_cap: '$2.67B',
    logo_img: 'http://dummyimage.com/135x100.png/cc0000/ffffff',
    street_address: '1856 Grim Street',
    state: 'IA',
    phone: '515-265-8284',
  },
  {
    id: '739bStMZKr28j&IV4PGuj',
    company_name: 'Gorczany-Kuhic',
    industry: 'Biotechnology: Electromedical & Electrotherapeutic Apparatus',
    market_cap: '$385.8M',
    logo_img: 'http://dummyimage.com/243x100.png/5fa2dd/ffffff',
    street_address: '970 Northwestern Crossing',
    state: 'SC',
    phone: '843-733-6484',
  },
  {
    id: '53FyQxFNZe88o&KGeWrae',
    company_name: 'Kiehn, Leuschke and Sawayn',
    industry: 'Industrial Specialties',
    market_cap: '$1.8B',
    logo_img: 'http://dummyimage.com/108x100.png/ff4444/ffffff',
    street_address: '73813 Everett Park',
    state: 'TN',
    phone: '901-785-3677',
  },
  {
    id: '48jJZAVGXs57k&P9nPRif',
    company_name: 'Abernathy-Baumbach',
    industry: 'Savings Institutions',
    market_cap: '$231.87M',
    logo_img: 'http://dummyimage.com/247x100.png/dddddd/000000',
    street_address: '45 Mariners Cove Park',
    state: 'TX',
    phone: '512-192-3551',
  },
  {
    id: '22E0GiH81b92r&B2uk7vf',
    company_name: 'Lemke LLC',
    industry: 'Major Banks',
    market_cap: '$383.64M',
    logo_img: 'http://dummyimage.com/197x100.png/dddddd/000000',
    street_address: '012 Acker Point',
    state: 'TX',
    phone: '361-755-5994',
  },
  {
    id: '49phRJKT8t50v&ONnHfjq',
    company_name: 'Bins, Hane and Weimann',
    industry: 'Property-Casualty Insurers',
    market_cap: '$982.38M',
    logo_img: 'http://dummyimage.com/105x100.png/dddddd/000000',
    street_address: '6 Pennsylvania Crossing',
    state: 'FL',
    phone: '863-641-1216',
  },
  {
    id: '43t3T9X09v76t&BInmQtp',
    company_name: 'Murphy-McDermott',
    industry: 'Finance: Consumer Services',
    market_cap: '$358.5M',
    logo_img: 'http://dummyimage.com/163x100.png/cc0000/ffffff',
    street_address: '056 Pawling Way',
    state: 'CA',
    phone: '213-350-9634',
  },
  {
    id: '50ZcOIAL0u65y&JKVYgbu',
    company_name: 'Zulauf-Bashirian',
    industry: 'Steel/Iron Ore',
    market_cap: '$4.61B',
    logo_img: 'http://dummyimage.com/242x100.png/5fa2dd/ffffff',
    street_address: '74037 Pepper Wood Trail',
    state: 'OK',
    phone: '405-514-1434',
  },
  {
    id: '13DSSYNH7d10c&IONcLii',
    company_name: 'Williamson Group',
    industry: 'Life Insurance',
    market_cap: '$36.08B',
    logo_img: 'http://dummyimage.com/145x100.png/cc0000/ffffff',
    street_address: '5 Ilene Road',
    state: 'NV',
    phone: '702-855-3190',
  },
  {
    id: '083jSxV4Kn27m&PKAJxpg',
    company_name: "O'Hara Group",
    industry: 'Transportation Services',
    market_cap: '$6.87B',
    logo_img: 'http://dummyimage.com/164x100.png/cc0000/ffffff',
    street_address: '92229 Hoard Hill',
    state: 'CA',
    phone: '916-222-0227',
  },
  {
    id: '632gWmIW6r17i&EQNsenm',
    company_name: 'Shanahan-Johnson',
    industry: 'Life Insurance',
    market_cap: '$3.08B',
    logo_img: 'http://dummyimage.com/101x100.png/cc0000/ffffff',
    street_address: '9266 Roth Avenue',
    state: 'NY',
    phone: '212-566-6532',
  },
  {
    id: '19NeYUPUEr56e&JOGhDqv',
    company_name: 'Greenfelder-Crist',
    industry: 'Steel/Iron Ore',
    market_cap: '$17.52B',
    logo_img: 'http://dummyimage.com/112x100.png/ff4444/ffffff',
    street_address: '852 Becker Way',
    state: 'MS',
    phone: '601-806-5353',
  },
  {
    id: '14fbAJQ2Fp19m&ADscUuc',
    company_name: 'Schumm, Hilpert and Schuppe',
    industry: 'Telecommunications Equipment',
    market_cap: '$31.13B',
    logo_img: 'http://dummyimage.com/120x100.png/5fa2dd/ffffff',
    street_address: '26580 Havey Crossing',
    state: 'MS',
    phone: '601-143-3576',
  },
  {
    id: '53AUR0WASu35y&WV5lGit',
    company_name: 'Turcotte and Sons',
    industry: 'Broadcasting',
    market_cap: '$3.57B',
    logo_img: 'http://dummyimage.com/101x100.png/ff4444/ffffff',
    street_address: '77 Goodland Junction',
    state: 'MO',
    phone: '417-666-3126',
  },
  {
    id: '13vtH7JC5b60r&X4i6enh',
    company_name: 'Rempel Group',
    industry: 'Computer Software: Prepackaged Software',
    market_cap: '$42.01M',
    logo_img: 'http://dummyimage.com/200x100.png/dddddd/000000',
    street_address: '3 Walton Plaza',
    state: 'NV',
    phone: '702-343-5442',
  },
  {
    id: '59mPV2KFKl58r&SAc66do',
    company_name: 'Morar-Kuphal',
    industry: 'Electric Utilities: Central',
    market_cap: '$1.69B',
    logo_img: 'http://dummyimage.com/126x100.png/ff4444/ffffff',
    street_address: '66 Independence Point',
    state: 'ID',
    phone: '208-795-5158',
  },
  {
    id: '23J6TgD8Kg94o&EM457ae',
    company_name: 'Mertz, Mayer and Hayes',
    industry: 'EDP Services',
    market_cap: '$13.37M',
    logo_img: 'http://dummyimage.com/142x100.png/cc0000/ffffff',
    street_address: '05894 Esker Center',
    state: 'UT',
    phone: '801-189-3934',
  },
  {
    id: '02yWGrT2Xg21s&IWgRycf',
    company_name: 'Bartoletti-Roob',
    industry: 'Industrial Machinery/Components',
    market_cap: '$219.92M',
    logo_img: 'http://dummyimage.com/171x100.png/dddddd/000000',
    street_address: '896 Gulseth Plaza',
    state: 'NH',
    phone: '603-192-4675',
  },
  {
    id: '400IDTJKAd95v&UZqdqls',
    company_name: 'Walsh, Lehner and Batz',
    industry: 'Shoe Manufacturing',
    market_cap: '$2.57B',
    logo_img: 'http://dummyimage.com/250x100.png/5fa2dd/ffffff',
    street_address: '78672 Londonderry Plaza',
    state: 'LA',
    phone: '318-700-7759',
  },
  {
    id: '76J2I6WFZm61y&IBlT8jf',
    company_name: 'Breitenberg-Sauer',
    industry: 'Major Pharmaceuticals',
    market_cap: '$114.27M',
    logo_img: 'http://dummyimage.com/127x100.png/cc0000/ffffff',
    street_address: '4532 Moland Point',
    state: 'KS',
    phone: '785-703-5547',
  },
  {
    id: '97SsVUFKHd64f&YMNjTvq',
    company_name: 'Rath-Connelly',
    industry: 'Building Products',
    market_cap: '$558.63M',
    logo_img: 'http://dummyimage.com/246x100.png/cc0000/ffffff',
    street_address: '4384 Bayside Parkway',
    state: 'TX',
    phone: '281-325-3412',
  },
  {
    id: '45tVCWH9Rm76b&Q5bX3dx',
    company_name: 'Thompson-Carter',
    industry: 'Major Pharmaceuticals',
    market_cap: '$108.91M',
    logo_img: 'http://dummyimage.com/159x100.png/ff4444/ffffff',
    street_address: '72957 Waubesa Center',
    state: 'FL',
    phone: '321-732-3216',
  },
  {
    id: '577bJcR33f45p&Z5q3cpq',
    company_name: 'Lemke, Bogisich and Ernser',
    industry: 'Electric Utilities: Central',
    market_cap: '$24.6B',
    logo_img: 'http://dummyimage.com/126x100.png/cc0000/ffffff',
    street_address: '05 Melody Lane',
    state: 'MN',
    phone: '763-855-2348',
  },
  {
    id: '07ipYvIP7e64j&TGglpts',
    company_name: 'Braun LLC',
    industry: 'Beverages (Production/Distribution)',
    market_cap: '$2.19B',
    logo_img: 'http://dummyimage.com/123x100.png/dddddd/000000',
    street_address: '2 Bay Drive',
    state: 'OH',
    phone: '330-130-0745',
  },
  {
    id: '428pIbM5Ss76y&VJpvxjq',
    company_name: 'Herman and Sons',
    industry: 'Investment Bankers/Brokers/Service',
    market_cap: '$82.28B',
    logo_img: 'http://dummyimage.com/121x100.png/dddddd/000000',
    street_address: '2205 Waywood Lane',
    state: 'DC',
    phone: '202-536-3286',
  },
  {
    id: '868hAXNXQe78f&XS9PSgn',
    company_name: 'Boyer Inc',
    industry: 'Industrial Machinery/Components',
    market_cap: '$22.2B',
    logo_img: 'http://dummyimage.com/105x100.png/ff4444/ffffff',
    street_address: '405 Forster Alley',
    state: 'FL',
    phone: '561-222-8752',
  },
  {
    id: '70f7ZcNATt29c&QFvRzng',
    company_name: 'Gutmann Group',
    industry: 'Beverages (Production/Distribution)',
    market_cap: '$17.31B',
    logo_img: 'http://dummyimage.com/217x100.png/cc0000/ffffff',
    street_address: '501 Kenwood Avenue',
    state: 'MO',
    phone: '314-192-3718',
  },
  {
    id: '04okEhJSNt44u&HBXpzao',
    company_name: 'Reichert-Thompson',
    industry: 'Major Chemicals',
    market_cap: '$29.54M',
    logo_img: 'http://dummyimage.com/242x100.png/5fa2dd/ffffff',
    street_address: '4 Blackbird Point',
    state: 'AZ',
    phone: '520-703-2550',
  },
  {
    id: '62dtX9VX9l88z&YV0Uzoz',
    company_name: 'Ebert Group',
    industry: 'Major Banks',
    market_cap: '$8.73B',
    logo_img: 'http://dummyimage.com/238x100.png/dddddd/000000',
    street_address: '83738 Waxwing Hill',
    state: 'NE',
    phone: '402-661-5992',
  },
  {
    id: '910qTyP49b71q&MPlU6mr',
    company_name: 'Wyman-Christiansen',
    industry: 'Home Furnishings',
    market_cap: '$2.61B',
    logo_img: 'http://dummyimage.com/169x100.png/cc0000/ffffff',
    street_address: '351 Autumn Leaf Place',
    state: 'IN',
    phone: '812-722-2330',
  },
  {
    id: '08x4TaL28u78k&AJtTfsw',
    company_name: 'Bergstrom and Sons',
    industry: 'Major Banks',
    market_cap: '$400.41M',
    logo_img: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    street_address: '02 Village Trail',
    state: 'FL',
    phone: '941-562-6619',
  },
  {
    id: '309dFEHPPk45a&QDWxwqp',
    company_name: 'Nienow and Sons',
    industry: 'Consumer Electronics/Appliances',
    market_cap: '$510.83M',
    logo_img: 'http://dummyimage.com/214x100.png/ff4444/ffffff',
    street_address: '2969 Cordelia Trail',
    state: 'NY',
    phone: '212-534-7373',
  },
  {
    id: '331hJRPXYr79o&M7G2bfr',
    company_name: 'Romaguera-Block',
    industry: 'Real Estate Investment Trusts',
    market_cap: '$3.51B',
    logo_img: 'http://dummyimage.com/218x100.png/5fa2dd/ffffff',
    street_address: '6173 Forster Way',
    state: 'WA',
    phone: '360-801-9884',
  },
  {
    id: '62KzUgS82v99c&CAtvbch',
    company_name: 'Little, McGlynn and Grady',
    industry: 'Major Pharmaceuticals',
    market_cap: '$30.59M',
    logo_img: 'http://dummyimage.com/129x100.png/cc0000/ffffff',
    street_address: '8 Superior Court',
    state: 'DC',
    phone: '202-406-8482',
  },
  {
    id: '47kfPhGVLn25p&GT0k6pk',
    company_name: 'Weber LLC',
    industry: 'Major Banks',
    market_cap: '$300.24M',
    logo_img: 'http://dummyimage.com/132x100.png/5fa2dd/ffffff',
    street_address: '5819 Bartillon Pass',
    state: 'AL',
    phone: '205-598-7487',
  },
  {
    id: '04R7LXR6Ia65a&VZCGyih',
    company_name: 'Renner, Boyle and Homenick',
    industry: 'Hospital/Nursing Management',
    market_cap: '$11.13B',
    logo_img: 'http://dummyimage.com/227x100.png/ff4444/ffffff',
    street_address: '1561 Mifflin Parkway',
    state: 'TX',
    phone: '214-997-0755',
  },
  {
    id: '23tCDNIO6r20t&ATAVNof',
    company_name: 'Jast, Kerluke and Homenick',
    industry: 'Medical Specialities',
    market_cap: '$14.5B',
    logo_img: 'http://dummyimage.com/204x100.png/dddddd/000000',
    street_address: '9 Barby Pass',
    state: 'MO',
    phone: '314-902-9974',
  },
  {
    id: '25MAF3H85e61z&Z5XF6iv',
    company_name: 'Larkin and Sons',
    industry: 'Food Distributors',
    market_cap: '$387.37M',
    logo_img: 'http://dummyimage.com/139x100.png/dddddd/000000',
    street_address: '5 Dahle Crossing',
    state: 'WV',
    phone: '304-715-6168',
  },
  {
    id: '73umWxKTVi38d&J5mbqmx',
    company_name: 'Gusikowski LLC',
    industry: 'Real Estate Investment Trusts',
    market_cap: '$805.82M',
    logo_img: 'http://dummyimage.com/227x100.png/ff4444/ffffff',
    street_address: '72360 Florence Park',
    state: 'OK',
    phone: '405-230-6394',
  },
  {
    id: '67NNCAFZMz76g&JTWWEoi',
    company_name: 'Ortiz LLC',
    industry: 'Hotels/Resorts',
    market_cap: '$3.75B',
    logo_img: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    street_address: '27568 Lukken Park',
    state: 'NE',
    phone: '712-238-8004',
  },
  {
    id: '08r7D1L16m59w&UVWnqcy',
    company_name: 'Rohan Inc',
    industry: 'Business Services',
    market_cap: '$28.99M',
    logo_img: 'http://dummyimage.com/247x100.png/cc0000/ffffff',
    street_address: '3 Sunbrook Hill',
    state: 'AK',
    phone: '907-948-6152',
  },
  {
    id: '96GeBHQRDr38c&D0PgGlr',
    company_name: 'Konopelski-Schinner',
    industry: 'Automotive Aftermarket',
    market_cap: '$1.28B',
    logo_img: 'http://dummyimage.com/113x100.png/cc0000/ffffff',
    street_address: '462 Corscot Pass',
    state: 'TX',
    phone: '940-107-4664',
  },
  {
    id: '46knS6KGSv42k&M6Kysyi',
    company_name: 'Maggio, Brekke and Braun',
    industry: 'Major Chemicals',
    market_cap: '$477.6M',
    logo_img: 'http://dummyimage.com/158x100.png/cc0000/ffffff',
    street_address: '902 Ryan Parkway',
    state: 'MN',
    phone: '651-178-7187',
  },
  {
    id: '83LZWkH80z52j&N6qVGlj',
    company_name: "Dooley-O'Keefe",
    industry: 'Other Consumer Services',
    market_cap: '$1.83B',
    logo_img: 'http://dummyimage.com/232x100.png/dddddd/000000',
    street_address: '2 Carey Plaza',
    state: 'TX',
    phone: '806-322-7982',
  },
  {
    id: '27X1B7HT4h19s&HUZmXek',
    company_name: 'Schroeder, Senger and Lemke',
    industry: 'Major Pharmaceuticals',
    market_cap: '$48.4M',
    logo_img: 'http://dummyimage.com/126x100.png/ff4444/ffffff',
    street_address: '774 Russell Plaza',
    state: 'NC',
    phone: '704-114-6161',
  },
  {
    id: '51Z8EhVQEm53v&KYb7ied',
    company_name: 'Hills, Moore and Heathcote',
    industry: 'Investment Bankers/Brokers/Service',
    market_cap: '$14.98B',
    logo_img: 'http://dummyimage.com/176x100.png/5fa2dd/ffffff',
    street_address: '13 Daystar Trail',
    state: 'NY',
    phone: '212-956-8619',
  },
  {
    id: '59KjVfWVZv59g&JTaXorq',
    company_name: 'Haag-White',
    industry: 'Property-Casualty Insurers',
    market_cap: '$49.09M',
    logo_img: 'http://dummyimage.com/174x100.png/5fa2dd/ffffff',
    street_address: '7 Haas Court',
    state: 'KY',
    phone: '502-515-6821',
  },
  {
    id: '79xnY9ZSHw42x&OGcsmsz',
    company_name: 'Brakus, Dach and Yost',
    industry: 'Services-Misc. Amusement & Recreation',
    market_cap: '$40.17M',
    logo_img: 'http://dummyimage.com/154x100.png/5fa2dd/ffffff',
    street_address: '034 Crest Line Lane',
    state: 'TX',
    phone: '512-575-0461',
  },
  {
    id: '52FpTXTY4a98l&B3jbfde',
    company_name: 'Effertz Group',
    industry: 'Investment Bankers/Brokers/Service',
    market_cap: '$112.63M',
    logo_img: 'http://dummyimage.com/201x100.png/ff4444/ffffff',
    street_address: '12533 Hayes Drive',
    state: 'TX',
    phone: '956-560-0844',
  },
  {
    id: '08RkRmSV3s48w&DXngexw',
    company_name: 'Weber, Schuppe and Cummerata',
    industry: 'Banks',
    market_cap: '$153.96M',
    logo_img: 'http://dummyimage.com/217x100.png/5fa2dd/ffffff',
    street_address: '50 Northfield Trail',
    state: 'NY',
    phone: '585-733-4294',
  },
  {
    id: '50mfIHZTKm51o&K2JTTih',
    company_name: 'McGlynn and Sons',
    industry: 'Oilfield Services/Equipment',
    market_cap: '$141.67M',
    logo_img: 'http://dummyimage.com/174x100.png/dddddd/000000',
    street_address: '5 Spohn Alley',
    state: 'NY',
    phone: '518-673-9771',
  },
  {
    id: '01fsNyJEDs52b&X0kXMwm',
    company_name: 'Powlowski, Walter and Moore',
    industry: 'Industrial Specialties',
    market_cap: '$70.59M',
    logo_img: 'http://dummyimage.com/180x100.png/ff4444/ffffff',
    street_address: '4445 Grasskamp Park',
    state: 'IL',
    phone: '312-204-8382',
  },
  {
    id: '73idM7QP4o66t&JMmL4ai',
    company_name: 'Stamm LLC',
    industry: 'Industrial Machinery/Components',
    market_cap: '$204.83M',
    logo_img: 'http://dummyimage.com/211x100.png/5fa2dd/ffffff',
    street_address: '088 Shasta Trail',
    state: 'IN',
    phone: '765-479-0400',
  },
  {
    id: '93srUSL1Yt42j&KSlsVpb',
    company_name: 'Wunsch, Schmitt and Renner',
    industry: 'Industrial Machinery/Components',
    market_cap: '$708.76M',
    logo_img: 'http://dummyimage.com/220x100.png/5fa2dd/ffffff',
    street_address: '4948 Esker Point',
    state: 'MO',
    phone: '314-138-3222',
  },
  {
    id: '29CPLQZX7l27l&ATXLyth',
    company_name: 'Orn-Murphy',
    industry: 'Auto Parts:O.E.M.',
    market_cap: '$506.02M',
    logo_img: 'http://dummyimage.com/153x100.png/dddddd/000000',
    street_address: '38026 Aberg Avenue',
    state: 'GA',
    phone: '404-249-0574',
  },
  {
    id: '70EADpH7Hg39g&BUqA6cz',
    company_name: 'Stoltenberg Inc',
    industry: 'Restaurants',
    market_cap: '$6.31M',
    logo_img: 'http://dummyimage.com/238x100.png/ff4444/ffffff',
    street_address: '17 Village Point',
    state: 'AL',
    phone: '256-829-9266',
  },
  {
    id: '43h5VGVUEi65v&BNxpCtd',
    company_name: 'Hoppe Group',
    industry: 'Consumer Specialties',
    market_cap: '$1.51B',
    logo_img: 'http://dummyimage.com/171x100.png/5fa2dd/ffffff',
    street_address: '78 Straubel Pass',
    state: 'PA',
    phone: '814-372-8547',
  },
  {
    id: '87N2BZIELb65b&MOChEjy',
    company_name: 'Donnelly, Schroeder and Price',
    industry: 'Steel/Iron Ore',
    market_cap: '$790.37M',
    logo_img: 'http://dummyimage.com/236x100.png/5fa2dd/ffffff',
    street_address: '635 Springs Park',
    state: 'WI',
    phone: '608-744-3462',
  },
  {
    id: '50uwRmJP0r92g&XLGoIlf',
    company_name: 'Mraz LLC',
    industry: 'Radio And Television Broadcasting And Communications Equipment',
    market_cap: '$17.76M',
    logo_img: 'http://dummyimage.com/238x100.png/dddddd/000000',
    street_address: '44231 Fisk Way',
    state: 'TX',
    phone: '325-443-9717',
  },
  {
    id: '04CXGBD95p64j&GFsHzvf',
    company_name: 'Fay-Reilly',
    industry: 'Wholesale Distributors',
    market_cap: '$99.14M',
    logo_img: 'http://dummyimage.com/240x100.png/5fa2dd/ffffff',
    street_address: '0080 Oak Valley Crossing',
    state: 'TX',
    phone: '682-794-4375',
  },
  {
    id: '80IvXlPHJo49z&FHORuqr',
    company_name: 'Renner, Ernser and Bailey',
    industry: 'Real Estate Investment Trusts',
    market_cap: '$80.86M',
    logo_img: 'http://dummyimage.com/203x100.png/5fa2dd/ffffff',
    street_address: '16928 New Castle Circle',
    state: 'FL',
    phone: '786-558-4780',
  },
  {
    id: '85bSJLHJ5s79o&DDEMGej',
    company_name: 'Lemke-Doyle',
    industry: 'Motor Vehicles',
    market_cap: '$1.22B',
    logo_img: 'http://dummyimage.com/201x100.png/dddddd/000000',
    street_address: '95 Dunning Pass',
    state: 'PA',
    phone: '215-384-3715',
  },
  {
    id: '56FbAoF7Td09a&WO4mOlk',
    company_name: 'Padberg, Jakubowski and Wiza',
    industry: 'EDP Services',
    market_cap: '$2.26B',
    logo_img: 'http://dummyimage.com/118x100.png/cc0000/ffffff',
    street_address: '99 Portage Road',
    state: 'OH',
    phone: '216-355-3697',
  },
  {
    id: '04hlFAJB4f44l&BTr83se',
    company_name: 'Stracke, Volkman and Auer',
    industry: 'Electrical Products',
    market_cap: '$496.43M',
    logo_img: 'http://dummyimage.com/160x100.png/dddddd/000000',
    street_address: '646 Nova Lane',
    state: 'AL',
    phone: '334-549-5025',
  },
  {
    id: '83okZLL6Yw26b&X41lsvr',
    company_name: 'Sporer Inc',
    industry: 'Fluid Controls',
    market_cap: '$3.56B',
    logo_img: 'http://dummyimage.com/151x100.png/ff4444/ffffff',
    street_address: '152 Weeping Birch Park',
    state: 'GA',
    phone: '478-247-6546',
  },
  {
    id: '33QARoW9Jk32a&LWSjenb',
    company_name: 'Reichel Inc',
    industry: 'Major Banks',
    market_cap: '$45.79B',
    logo_img: 'http://dummyimage.com/124x100.png/5fa2dd/ffffff',
    street_address: '4490 Kim Terrace',
    state: 'NJ',
    phone: '862-833-0247',
  },
  {
    id: '42BRYEJNWl10r&N0WA7ol',
    company_name: 'Bosco, Beahan and Casper',
    industry: 'Restaurants',
    market_cap: '$14.34B',
    logo_img: 'http://dummyimage.com/235x100.png/ff4444/ffffff',
    street_address: '9849 Jenifer Pass',
    state: 'MI',
    phone: '313-752-3597',
  },
  {
    id: '056qHnE87u36l&KDxSwxn',
    company_name: 'Dickinson, Bosco and Runte',
    industry: 'Farming/Seeds/Milling',
    market_cap: '$222.06M',
    logo_img: 'http://dummyimage.com/241x100.png/dddddd/000000',
    street_address: '0 Carioca Junction',
    state: 'NC',
    phone: '704-776-3843',
  },
  {
    id: '79aZGAET2g29f&VJis6nj',
    company_name: 'Wiegand, Runolfsdottir and Waelchi',
    industry: 'Investment Managers',
    market_cap: '$637.26M',
    logo_img: 'http://dummyimage.com/156x100.png/5fa2dd/ffffff',
    street_address: '4418 Fallview Court',
    state: 'AZ',
    phone: '480-793-5782',
  },
  {
    id: '9986DuWY1j97c&U0GLgio',
    company_name: 'Gottlieb-Gerhold',
    industry: 'Real Estate',
    market_cap: '$2.15B',
    logo_img: 'http://dummyimage.com/218x100.png/cc0000/ffffff',
    street_address: '6934 Trailsway Pass',
    state: 'MN',
    phone: '651-517-6680',
  },
  {
    id: '37wmWQCCZp61x&TOjaIzn',
    company_name: 'Christiansen-Greenfelder',
    industry: 'Military/Government/Technical',
    market_cap: '$2.7B',
    logo_img: 'http://dummyimage.com/214x100.png/5fa2dd/ffffff',
    street_address: '521 Schurz Circle',
    state: 'AR',
    phone: '501-505-6479',
  },
  {
    id: '21IyLCU9Mj23n&YFs0zno',
    company_name: 'Blanda-Stanton',
    industry: 'Industrial Machinery/Components',
    market_cap: '$58.51M',
    logo_img: 'http://dummyimage.com/212x100.png/5fa2dd/ffffff',
    street_address: '109 Lakewood Trail',
    state: 'AZ',
    phone: '602-447-2517',
  },
  {
    id: '06gISyNBJz59v&KWDIAjb',
    company_name: 'Romaguera Inc',
    industry: 'Computer Software: Programming, Data Processing',
    market_cap: '$814.69M',
    logo_img: 'http://dummyimage.com/234x100.png/cc0000/ffffff',
    street_address: '29 Hintze Street',
    state: 'VA',
    phone: '540-121-0224',
  },
  {
    id: '46s1XpUKKn53u&XWT5vir',
    company_name: 'Strosin, Lebsack and Walter',
    industry: 'Restaurants',
    market_cap: '$1.38B',
    logo_img: 'http://dummyimage.com/127x100.png/cc0000/ffffff',
    street_address: '287 Arapahoe Alley',
    state: 'DC',
    phone: '202-841-0239',
  },
  {
    id: '92AWJaTG8d09a&V8MOTew',
    company_name: 'Altenwerth, Upton and Erdman',
    industry: 'Major Banks',
    market_cap: '$640.53M',
    logo_img: 'http://dummyimage.com/118x100.png/dddddd/000000',
    street_address: '18 Johnson Point',
    state: 'WV',
    phone: '304-134-5160',
  },
  {
    id: '94cWX6LWOf35e&IP5WRix',
    company_name: 'Keeling-Donnelly',
    industry: 'Major Pharmaceuticals',
    market_cap: '$64.12M',
    logo_img: 'http://dummyimage.com/208x100.png/cc0000/ffffff',
    street_address: '8 Northridge Court',
    state: 'MN',
    phone: '612-458-9606',
  },
  {
    id: '32uYVnR21e34g&CWi72go',
    company_name: 'Green-Connelly',
    industry: 'Oil & Gas Production',
    market_cap: '$22.46M',
    logo_img: 'http://dummyimage.com/243x100.png/ff4444/ffffff',
    street_address: '7348 Oak Court',
    state: 'TX',
    phone: '972-180-1203',
  },
  {
    id: '37zoFSZ0Qp21b&KIdHmia',
    company_name: 'Farrell-Dickens',
    industry: 'Major Pharmaceuticals',
    market_cap: '$725.05M',
    logo_img: 'http://dummyimage.com/140x100.png/5fa2dd/ffffff',
    street_address: '40 Rieder Plaza',
    state: 'NY',
    phone: '315-719-6918',
  },
  {
    id: '0196K6DELx87x&C16Mxue',
    company_name: 'Huel-Kulas',
    industry: 'Property-Casualty Insurers',
    market_cap: '$1.14B',
    logo_img: 'http://dummyimage.com/205x100.png/cc0000/ffffff',
    street_address: '9768 Garrison Pass',
    state: 'IN',
    phone: '765-245-9588',
  },
  {
    id: '49uTYIALKv36c&IMfFGho',
    company_name: 'Schmidt-Sporer',
    industry: 'Computer Software: Prepackaged Software',
    market_cap: '$1.61B',
    logo_img: 'http://dummyimage.com/205x100.png/dddddd/000000',
    street_address: '8 Johnson Way',
    state: 'GA',
    phone: '706-374-9639',
  },
  {
    id: '98TkZdFYDm27z&SEP61wf',
    company_name: 'Nader Inc',
    industry: 'Hospital/Nursing Management',
    market_cap: '$1.71B',
    logo_img: 'http://dummyimage.com/149x100.png/cc0000/ffffff',
    street_address: '442 Arizona Road',
    state: 'TX',
    phone: '512-745-8145',
  },
  {
    id: '75thXYSTSt13u&R9VIEtb',
    company_name: 'Kilback and Sons',
    industry: 'Pollution Control Equipment',
    market_cap: '$59.07M',
    logo_img: 'http://dummyimage.com/120x100.png/dddddd/000000',
    street_address: '50095 Waxwing Place',
    state: 'TX',
    phone: '512-434-7023',
  },
  {
    id: '01HaCOUE4u11b&G4NpYns',
    company_name: 'Windler-Heathcote',
    industry: 'Industrial Machinery/Components',
    market_cap: '$58.51M',
    logo_img: 'http://dummyimage.com/207x100.png/5fa2dd/ffffff',
    street_address: '63635 Center Court',
    state: 'PA',
    phone: '724-544-1555',
  },
  {
    id: '24ObOmV14d68x&CKRzzdu',
    company_name: 'Casper, Casper and Hayes',
    industry: 'Computer Software: Prepackaged Software',
    market_cap: '$10.41B',
    logo_img: 'http://dummyimage.com/150x100.png/5fa2dd/ffffff',
    street_address: '834 Killdeer Avenue',
    state: 'PA',
    phone: '215-728-0144',
  },
  {
    id: '78VLC4RK7u54c&E4cYDxs',
    company_name: 'Hahn-Mills',
    industry: 'Department/Specialty Retail Stores',
    market_cap: '$29.03B',
    logo_img: 'http://dummyimage.com/166x100.png/ff4444/ffffff',
    street_address: '2 Oxford Pass',
    state: 'MA',
    phone: '508-287-4425',
  },
  {
    id: '2721TSRQKs74b&ITIsPwk',
    company_name: 'MacGyver-Schuppe',
    industry: 'Business Services',
    market_cap: '$312.5M',
    logo_img: 'http://dummyimage.com/100x100.png/dddddd/000000',
    street_address: '49786 Acker Hill',
    state: 'DC',
    phone: '202-394-8114',
  },
  {
    id: '02iEPuHXUe30m&WAjyazb',
    company_name: 'Williamson-McGlynn',
    industry: 'Marine Transportation',
    market_cap: '$3.55M',
    logo_img: 'http://dummyimage.com/244x100.png/ff4444/ffffff',
    street_address: '6370 Dixon Lane',
    state: 'VA',
    phone: '804-730-1104',
  },
  {
    id: '62K5FzHLTz46t&MRCe0sm',
    company_name: 'Douglas-Wiegand',
    industry: 'Movies/Entertainment',
    market_cap: '$642.98M',
    logo_img: 'http://dummyimage.com/117x100.png/cc0000/ffffff',
    street_address: '1 Continental Pass',
    state: 'CA',
    phone: '213-806-4752',
  },
  {
    id: '98ZfSVVC8q34w&VJ36qcx',
    company_name: 'Sporer LLC',
    industry: 'Metal Fabrications',
    market_cap: '$1.49B',
    logo_img: 'http://dummyimage.com/167x100.png/ff4444/ffffff',
    street_address: '41956 Anderson Circle',
    state: 'CA',
    phone: '213-776-0197',
  },
  {
    id: '23rRVxB4Cg76j&J3dMyal',
    company_name: 'Larkin Group',
    industry: 'Military/Government/Technical',
    market_cap: '$5.08B',
    logo_img: 'http://dummyimage.com/121x100.png/cc0000/ffffff',
    street_address: '5 Thompson Drive',
    state: 'TX',
    phone: '915-454-2099',
  },
  {
    id: '87XnAhJDFp70e&Q4jwgxs',
    company_name: 'Boehm and Sons',
    industry: 'Major Banks',
    market_cap: '$20.32B',
    logo_img: 'http://dummyimage.com/223x100.png/dddddd/000000',
    street_address: '8 Fuller Place',
    state: 'CA',
    phone: '559-119-4104',
  },
  {
    id: '40v8F0NIYr72v&ZCQETgf',
    company_name: 'Crist-Shields',
    industry: 'Major Banks',
    market_cap: '$1.89B',
    logo_img: 'http://dummyimage.com/180x100.png/cc0000/ffffff',
    street_address: '802 Ludington Street',
    state: 'NY',
    phone: '716-648-8338',
  },
  {
    id: '39RpBmNQUi74u&MBAsNvn',
    company_name: 'Towne and Sons',
    industry: 'Industrial Specialties',
    market_cap: '$154.26M',
    logo_img: 'http://dummyimage.com/200x100.png/ff4444/ffffff',
    street_address: '87 Truax Lane',
    state: 'TX',
    phone: '214-109-9551',
  },
  {
    id: '72GQBpJOFv27j&FYQJLra',
    company_name: 'Hettinger and Sons',
    industry: 'Natural Gas Distribution',
    market_cap: '$4.55B',
    logo_img: 'http://dummyimage.com/145x100.png/cc0000/ffffff',
    street_address: '8165 Erie Terrace',
    state: 'TX',
    phone: '713-371-7746',
  },
  {
    id: '39ckZ3XONk29k&XBE15zr',
    company_name: 'Considine, Hane and Olson',
    industry: 'Railroads',
    market_cap: '$212.14M',
    logo_img: 'http://dummyimage.com/247x100.png/cc0000/ffffff',
    street_address: '5583 Center Avenue',
    state: 'AZ',
    phone: '602-734-1268',
  },
];
// FINANCIALS
// create table financials (
//     id SERIAL PRIMARY KEY,
//     company_id VARCHAR(50) REFERENCES companies(id),
//     quarter VARCHAR(50),
//     cogs VARCHAR(50),
//     profit_margin VARCHAR(50),
//     revenue VARCHAR(50),
// )
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('21ImC8IUCp19m&QEfdBbg','Q122', 87, 2.328, 89.02536);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('739bStMZKr28j&IV4PGuj','Q122', 85, 4.716, 89.0086);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('53FyQxFNZe88o&KGeWrae','Q122', 127, 10.479, 140.30833);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('48jJZAVGXs57k&P9nPRif','Q122', 132, 10.035, 145.2462);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('22E0GiH81b92r&B2uk7vf','Q122', 86, 3.575, 89.0745);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('49phRJKT8t50v&ONnHfjq','Q122', 14, 5.417, 14.75838);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('43t3T9X09v76t&BInmQtp', 'Q122', 97, 1.855, 98.79935);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('50ZcOIAL0u65y&JKVYgbu','Q122', 20, 10.723, 22.1446);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('13DSSYNH7d10c&IONcLii','Q122', 75, 0.164, 75.123);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('083jSxV4Kn27m&PKAJxpg', 'Q122', 120, 3.481, 124.1772);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('632gWmIW6r17i&EQNsenm', 'Q122', 72, 1.547, 73.11384);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('19NeYUPUEr56e&JOGhDqv', 'Q122', 126, 0.547, 126.68922);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('14fbAJQ2Fp19m&ADscUuc', 'Q122', 64, 9.386, 70.00704);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('53AUR0WASu35y&WV5lGit', 'Q122', 36, 10.299, 39.70764);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('13vtH7JC5b60r&X4i6enh', 'Q122', 82, 9.515, 89.8023);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('59mPV2KFKl58r&SAc66do','Q122', 28, 11.746, 31.28888);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('23J6TgD8Kg94o&EM457ae', 'Q122', 54, 7.7, 58.158);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('02yWGrT2Xg21s&IWgRycf', 'Q122', 44, 5.301, 46.33244);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('400IDTJKAd95v&UZqdqls', 'Q122', 111, 9.63, 121.6893);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('76J2I6WFZm61y&IBlT8jf', 'Q122', 17, 11.296, 18.92032);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('97SsVUFKHd64f&YMNjTvq', 'Q122', 127, 5.492, 133.97484);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('45tVCWH9Rm76b&Q5bX3dx', 'Q122', 13, 8.741, 14.13633);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('12JDCBN2Or68b&AAG11dg', 'Q122', 37, 5.149, 38.90513);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('577bJcR33f45p&Z5q3cpq','Q122', 26, 0.648, 26.16848);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('07ipYvIP7e64j&TGglpts', 'Q122', 153, 6.644, 163.16532);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('428pIbM5Ss76y&VJpvxjq', 'Q122', 148, 11.987, 165.74076);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('868hAXNXQe78f&XS9PSgn','Q122', 78, 2.013, 79.57014);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('70f7ZcNATt29c&QFvRzng', 'Q122', 52, 8.063, 56.19276);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('04okEhJSNt44u&HBXpzao', 'Q122', 69, 10.937, 76.54653);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('62dtX9VX9l88z&YV0Uzoz', 'Q122', 89, 4.403, 92.91867);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('910qTyP49b71q&MPlU6mr', 'Q122', 11, 2.547, 11.28017);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('08x4TaL28u78k&AJtTfsw', 'Q122', 52, 8.663, 56.50476);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('309dFEHPPk45a&QDWxwqp', 'Q122', 106, 4.91, 111.2046);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('331hJRPXYr79o&M7G2bfr', 'Q122', 23, 0.214, 23.04922);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('62KzUgS82v99c&CAtvbch','Q122', 117, 8.312, 126.72504);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('47kfPhGVLn25p&GT0k6pk', 'Q122', 87, 2.628, 89.28636);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('04R7LXR6Ia65a&VZCGyih', 'Q122', 80, 9.987, 87.9896);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('23tCDNIO6r20t&ATAVNof', 'Q122', 102, 7.861, 110.01822);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('25MAF3H85e61z&Z5XF6iv', 'Q122', 49, 2.054, 50.00646);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('73umWxKTVi38d&J5mbqmx', 'Q122', 114, 8.466, 123.65124);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('67NNCAFZMz76g&JTWWEoi', 'Q122', 11, 6.273, 11.69003);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('08r7D1L16m59w&UVWnqcy', 'Q122', 156, 5.447, 164.49732);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('96GeBHQRDr38c&D0PgGlr', 'Q122', 123, 10.073, 135.38979);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('46knS6KGSv42k&M6Kysyi', 'Q122', 69, 9.906, 75.83514);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('83LZWkH80z52j&N6qVGlj', 'Q122', 53, 0.299, 53.15847);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('27X1B7HT4h19s&HUZmXek','Q122', 57, 2.049, 58.16793);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('51Z8EhVQEm53v&KYb7ied','Q122', 50, 6.043, 53.0215);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('59KjVfWVZv59g&JTaXorq', 'Q122', 104, 7.519, 111.81976);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('79xnY9ZSHw42x&OGcsmsz', 'Q122', 119, 1.633, 120.94327);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('52FpTXTY4a98l&B3jbfde', 'Q122', 127, 10.994, 140.96238);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('08RkRmSV3s48w&DXngexw', 'Q122', 144, 4.072, 149.86368);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('50mfIHZTKm51o&K2JTTih', 'Q122', 95, 11.202, 105.6419);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('01fsNyJEDs52b&X0kXMwm','Q122', 128, 11.564, 142.80192);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('73idM7QP4o66t&JMmL4ai', 'Q122', 25, 3.763, 25.94075);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('93srUSL1Yt42j&KSlsVpb', 'Q122', 77, 4.083, 80.14391);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('70ayDADAXw95w&QGbVqon', 'Q122', 21, 1.062, 21.22302);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('29CPLQZX7l27l&ATXLyth', 'Q122', 98, 7.237, 105.09226);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('70EADpH7Hg39g&BUqA6cz', 'Q122', 102, 0.843, 102.85986);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('43h5VGVUEi65v&BNxpCtd', 'Q122', 51, 7.79, 54.9729);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('87N2BZIELb65b&MOChEjy', 'Q122', 116, 1.689, 117.95924);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('50uwRmJP0r92g&XLGoIlf', 'Q122', 94, 9.66, 103.0804);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('04CXGBD95p64j&GFsHzvf', 'Q122', 36, 4.046, 37.45656);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('80IvXlPHJo49z&FHORuqr', 'Q122', 39, 4.947, 40.92933);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('85bSJLHJ5s79o&DDEMGej', 'Q122', 154, 0.585, 154.9009);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('56FbAoF7Td09a&WO4mOlk', 'Q122', 19, 11.567, 21.19773);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('04hlFAJB4f44l&BTr83se', 'Q122', 46, 4.749, 48.18454);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('83okZLL6Yw26b&X41lsvr','Q122', 99, 9.198, 108.10602);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('33QARoW9Jk32a&LWSjenb',  'Q122', 44, 8.5, 47.74);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('42BRYEJNWl10r&N0WA7ol',  'Q122', 13, 11.47, 14.4911);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('056qHnE87u36l&KDxSwxn', 'Q122', 47, 8.323, 50.91181);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('79aZGAET2g29f&VJis6nj', 'Q122', 80, 5.526, 84.4208);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('9986DuWY1j97c&U0GLgio', 'Q122', 103, 6.485, 109.67955);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('37wmWQCCZp61x&TOjaIzn', 'Q122', 63, 4.908, 66.09204);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('21IyLCU9Mj23n&YFs0zno', 'Q122', 130, 8.722, 141.3386);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('06gISyNBJz59v&KWDIAjb', 'Q122', 142, 8.304, 153.79168);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('46s1XpUKKn53u&XWT5vir', 'Q122', 18, 4.452, 18.80136);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('92AWJaTG8d09a&V8MOTew','Q122', 143, 0.571, 143.81653);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('94cWX6LWOf35e&IP5WRix', 'Q122', 21, 5.374, 22.12854);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('32uYVnR21e34g&CWi72go', 'Q122', 54, 10.19, 59.5026);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('37zoFSZ0Qp21b&KIdHmia', 'Q122', 136, 0.644, 136.87584);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('0196K6DELx87x&C16Mxue', 'Q122', 132, 5.343, 139.05276);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('49uTYIALKv36c&IMfFGho', 'Q122', 119, 5.523, 125.57237);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('98TkZdFYDm27z&SEP61wf', 'Q122', 83, 0.848, 83.70384);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('75thXYSTSt13u&R9VIEtb', 'Q122', 128, 4.281, 133.47968);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('01HaCOUE4u11b&G4NpYns', 'Q122', 113, 11.558, 126.06054);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('24ObOmV14d68x&CKRzzdu', 'Q122', 106, 6.666, 113.06596);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('78VLC4RK7u54c&E4cYDxs', 'Q122', 53, 1.787, 53.94711);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('2721TSRQKs74b&ITIsPwk', 'Q122', 70, 10.849, 77.5943);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('02iEPuHXUe30m&WAjyazb', 'Q122', 136, 0.087, 136.11832);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('62K5FzHLTz46t&MRCe0sm', 'Q122', 100, 3.864, 103.864);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('98ZfSVVC8q34w&VJ36qcx','Q122', 23, 6.039, 24.38897);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('23rRVxB4Cg76j&J3dMyal', 'Q122', 83, 6.735, 88.59005);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('87XnAhJDFp70e&Q4jwgxs', 'Q122', 153, 7.758, 164.86974);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('40v8F0NIYr72v&ZCQETgf', 'Q122', 115, 9.279, 125.67085);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('39RpBmNQUi74u&MBAsNvn', 'Q122', 50, 2.664, 51.332);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('72GQBpJOFv27j&FYQJLra', 'Q122', 35, 2.447, 35.85645);
// insert into financials (company_id, quarter, cogs, profit_margin, revenue) values ('39ckZ3XONk29k&XBE15zr', 'Q122', 156, 9.985, 171.5766);

// create table employees (
// 	id SERIAL PRIMARY KEY,
// 	company_id VARCHAR(50) REFERENCES companies(id),
// 	first_name VARCHAR(255),
// 	last_name VARCHAR(255),
// 	email VARCHAR(255),
// 	avatar VARCHAR(255),
// 	department VARCHAR(255),
// 	title VARCHAR(255)
// );

// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Mahala', 'Walford', 'mwalford0@spotify.com', 'https://robohash.org/sitconsequaturconsequatur.png?size=50x50&set=set1', 'Legal', 'Quality Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Desirae', 'Pitkin', 'dpitkin1@pcworld.com', 'https://robohash.org/fugiatquiexplicabo.png?size=50x50&set=set1', 'Marketing', 'Database Administrator III', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Gordy', 'Salzberger', 'gsalzberger2@imageshack.us', 'https://robohash.org/velitabenim.png?size=50x50&set=set1', 'Engineering', 'Web Designer IV', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Annadiane', 'Hirsthouse', 'ahirsthouse3@irs.gov', 'https://robohash.org/reprehenderitautofficiis.png?size=50x50&set=set1', 'Legal', 'Financial Advisor', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Syman', 'Le Fevre', 'slefevre4@indiegogo.com', 'https://robohash.org/aspernaturaccusantiumet.png?size=50x50&set=set1', 'Research and Development', 'General Manager', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Willow', 'Dober', 'wdober5@abc.net.au', 'https://robohash.org/distinctioquibusdamillum.png?size=50x50&set=set1', 'Support', 'Senior Cost Accountant', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Maryann', 'Hourahan', 'mhourahan6@comsenz.com', 'https://robohash.org/eoseaet.png?size=50x50&set=set1', 'Engineering', 'Chemical Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Benoit', 'Terbrugge', 'bterbrugge7@myspace.com', 'https://robohash.org/occaecatinonsed.png?size=50x50&set=set1', 'Research and Development', 'Geological Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Cecilio', 'Crathern', 'ccrathern8@nasa.gov', 'https://robohash.org/molestiasitaquererum.png?size=50x50&set=set1', 'Engineering', 'Web Designer I', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Vaughan', 'Antonowicz', 'vantonowicz9@soundcloud.com', 'https://robohash.org/quiidaut.png?size=50x50&set=set1', 'Services', 'GIS Technical Architect', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Cyrillus', 'Brotherhead', 'cbrotherheada@cornell.edu', 'https://robohash.org/omnisestaut.png?size=50x50&set=set1', 'Business Development', 'Health Coach I', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Hamid', 'Renbold', 'hrenboldb@google.cn', 'https://robohash.org/rerumquilaudantium.png?size=50x50&set=set1', 'Sales', 'Software Test Engineer II', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Joceline', 'Dyhouse', 'jdyhousec@umn.edu', 'https://robohash.org/cumqueestdolor.png?size=50x50&set=set1', 'Services', 'Business Systems Development Analyst', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Bethena', 'Blakiston', 'bblakistond@google.it', 'https://robohash.org/nostrumsimiliquenecessitatibus.png?size=50x50&set=set1', 'Training', 'Media Manager II', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Frank', 'Kment', 'fkmente@tripadvisor.com', 'https://robohash.org/namquoomnis.png?size=50x50&set=set1', 'Human Resources', 'Paralegal', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Cecelia', 'Jepson', 'cjepsonf@princeton.edu', 'https://robohash.org/velmolestiaeipsam.png?size=50x50&set=set1', 'Sales', 'Design Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Cordula', 'Sokale', 'csokaleg@hud.gov', 'https://robohash.org/sednisivel.png?size=50x50&set=set1', 'Sales', 'Senior Sales Associate', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Rab', 'McAuslene', 'rmcausleneh@sitemeter.com', 'https://robohash.org/dolortemporaporro.png?size=50x50&set=set1', 'Accounting', 'Teacher', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Codi', 'Elton', 'celtoni@pen.io', 'https://robohash.org/debitisquoslabore.png?size=50x50&set=set1', 'Support', 'Mechanical Systems Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Korrie', 'Camidge', 'kcamidgej@free.fr', 'https://robohash.org/autvoluptasveniam.png?size=50x50&set=set1', 'Sales', 'Structural Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Arlinda', 'Markl', 'amarklk@answers.com', 'https://robohash.org/aliquamnumquamrerum.png?size=50x50&set=set1', 'Legal', 'Information Systems Manager', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Dave', 'Alker', 'dalkerl@ibm.com', 'https://robohash.org/illumaperiamexercitationem.png?size=50x50&set=set1', 'Accounting', 'Account Coordinator', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Lorain', 'Espie', 'lespiem@fema.gov', 'https://robohash.org/molestiasliberovel.png?size=50x50&set=set1', 'Accounting', 'Administrative Officer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Maryjane', 'Cartwight', 'mcartwightn@examiner.com', 'https://robohash.org/pariaturconsectetursimilique.png?size=50x50&set=set1', 'Services', 'Nuclear Power Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Andrea', 'Jeannin', 'ajeannino@shutterfly.com', 'https://robohash.org/admaioresratione.png?size=50x50&set=set1', 'Legal', 'Safety Technician IV', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Ame', 'Carrane', 'acarranep@nationalgeographic.com', 'https://robohash.org/utnondolorem.png?size=50x50&set=set1', 'Services', 'Programmer Analyst II', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Fax', 'Chritchley', 'fchritchleyq@si.edu', 'https://robohash.org/sitinventorequae.png?size=50x50&set=set1', 'Engineering', 'Help Desk Operator', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Mariam', 'Brandi', 'mbrandir@ucoz.com', 'https://robohash.org/magnamreiciendisreprehenderit.png?size=50x50&set=set1', 'Legal', 'Operator', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Rosaleen', 'Medhurst', 'rmedhursts@abc.net.au', 'https://robohash.org/occaecatietvero.png?size=50x50&set=set1', 'Business Development', 'Business Systems Development Analyst', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Lola', 'MacKnocker', 'lmacknockert@howstuffworks.com', 'https://robohash.org/evenietquiaut.png?size=50x50&set=set1', 'Training', 'Environmental Specialist', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Joey', 'Dunne', 'jdunneu@mac.com', 'https://robohash.org/suntnumquamest.png?size=50x50&set=set1', 'Business Development', 'Database Administrator III', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Teressa', 'Gauld', 'tgauldv@discovery.com', 'https://robohash.org/eaqueperspiciatisesse.png?size=50x50&set=set1', 'Engineering', 'Human Resources Assistant I', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Cullan', 'Reaper', 'creaperw@miibeian.gov.cn', 'https://robohash.org/atqueestitaque.png?size=50x50&set=set1', 'Product Management', 'Registered Nurse', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Francis', 'Giacobazzi', 'fgiacobazzix@chicagotribune.com', 'https://robohash.org/autemsitmollitia.png?size=50x50&set=set1', 'Marketing', 'Professor', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Creight', 'Crandon', 'ccrandony@dion.ne.jp', 'https://robohash.org/temporibusipsumqui.png?size=50x50&set=set1', 'Product Management', 'VP Sales', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Jard', 'Smallman', 'jsmallmanz@t-online.de', 'https://robohash.org/quasperspiciatisofficia.png?size=50x50&set=set1', 'Support', 'Staff Scientist', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Veronica', 'Stonner', 'vstonner10@about.com', 'https://robohash.org/quisnesciuntcumque.png?size=50x50&set=set1', 'Research and Development', 'Account Representative I', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Tamarra', 'Jedrysik', 'tjedrysik11@businesswire.com', 'https://robohash.org/illumauttenetur.png?size=50x50&set=set1', 'Legal', 'Analog Circuit Design manager', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Pacorro', 'Craker', 'pcraker12@fastcompany.com', 'https://robohash.org/sedipsumnon.png?size=50x50&set=set1', 'Business Development', 'Data Coordiator', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Bruis', 'Ricciardello', 'bricciardello13@technorati.com', 'https://robohash.org/sapienteomnisdebitis.png?size=50x50&set=set1', 'Accounting', 'Programmer I', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Emeline', 'Fullman', 'efullman14@simplemachines.org', 'https://robohash.org/solutanisised.png?size=50x50&set=set1', 'Research and Development', 'Geological Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Jareb', 'Froschauer', 'jfroschauer15@globo.com', 'https://robohash.org/insintlaborum.png?size=50x50&set=set1', 'Sales', 'Database Administrator IV', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Marcelle', 'Jeakins', 'mjeakins16@tamu.edu', 'https://robohash.org/veloditerror.png?size=50x50&set=set1', 'Human Resources', 'Developer IV', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Agnes', 'Aubury', 'aaubury17@github.com', 'https://robohash.org/suntrerumet.png?size=50x50&set=set1', 'Sales', 'Technical Writer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Dianne', 'Reiach', 'dreiach18@godaddy.com', 'https://robohash.org/modirationeeum.png?size=50x50&set=set1', 'Marketing', 'Mechanical Systems Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Georgianne', 'Widd', 'gwidd19@shutterfly.com', 'https://robohash.org/doloremvoluptatemmaxime.png?size=50x50&set=set1', 'Business Development', 'Structural Analysis Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Jacky', 'Brann', 'jbrann1a@businesswire.com', 'https://robohash.org/veniamiuresuscipit.png?size=50x50&set=set1', 'Sales', 'Physical Therapy Assistant', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Clarie', 'Haydn', 'chaydn1b@xinhuanet.com', 'https://robohash.org/nihilautminima.png?size=50x50&set=set1', 'Business Development', 'Administrative Officer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Wallas', 'Huddles', 'whuddles1c@bizjournals.com', 'https://robohash.org/autabquas.png?size=50x50&set=set1', 'Accounting', 'Accountant IV', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Gerrie', 'Florence', 'gflorence1d@umich.edu', 'https://robohash.org/officiaestcorporis.png?size=50x50&set=set1', 'Marketing', 'Sales Associate', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Evin', 'Crystal', 'ecrystal1e@patch.com', 'https://robohash.org/etreiciendisut.png?size=50x50&set=set1', 'Services', 'Electrical Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Jarvis', 'Redier', 'jredier1f@gnu.org', 'https://robohash.org/necessitatibusmaximefacere.png?size=50x50&set=set1', 'Sales', 'Nuclear Power Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Heath', 'Baccup', 'hbaccup1g@macromedia.com', 'https://robohash.org/quitotamdoloribus.png?size=50x50&set=set1', 'Business Development', 'Editor', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Modesta', 'Nash', 'mnash1h@facebook.com', 'https://robohash.org/magnamquodautem.png?size=50x50&set=set1', 'Business Development', 'Chemical Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Tirrell', 'Baitey', 'tbaitey1i@msn.com', 'https://robohash.org/quiaquimolestias.png?size=50x50&set=set1', 'Services', 'Chief Design Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Jilleen', 'Benjefield', 'jbenjefield1j@github.io', 'https://robohash.org/rerumoptioblanditiis.png?size=50x50&set=set1', 'Marketing', 'Statistician II', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Rhianon', 'Ropartz', 'rropartz1k@si.edu', 'https://robohash.org/etpariaturautem.png?size=50x50&set=set1', 'Sales', 'Administrative Officer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Kristoforo', 'Danell', 'kdanell1l@guardian.co.uk', 'https://robohash.org/temporibusutiusto.png?size=50x50&set=set1', 'Business Development', 'Technical Writer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Aymer', 'Scarff', 'ascarff1m@mozilla.org', 'https://robohash.org/laborerepellenduscorrupti.png?size=50x50&set=set1', 'Sales', 'Web Developer I', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Liza', 'Merrisson', 'lmerrisson1n@usa.gov', 'https://robohash.org/dictarerumrerum.png?size=50x50&set=set1', 'Engineering', 'Accountant IV', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Hubey', 'Drugan', 'hdrugan1o@bizjournals.com', 'https://robohash.org/molestiaeipsummolestiae.png?size=50x50&set=set1', 'Services', 'Structural Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Hunt', 'Rowlatt', 'hrowlatt1p@springer.com', 'https://robohash.org/dolorumquoaperiam.png?size=50x50&set=set1', 'Accounting', 'Actuary', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Georgia', 'Lindblad', 'glindblad1q@arizona.edu', 'https://robohash.org/expeditanequeet.png?size=50x50&set=set1', 'Sales', 'Design Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Jobina', 'Sive', 'jsive1r@xrea.com', 'https://robohash.org/autlaboriosamsit.png?size=50x50&set=set1', 'Training', 'Chief Design Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Morgun', 'Smitham', 'msmitham1s@eepurl.com', 'https://robohash.org/quidebitisnostrum.png?size=50x50&set=set1', 'Accounting', 'Database Administrator I', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Noellyn', 'Avison', 'navison1t@independent.co.uk', 'https://robohash.org/mollitiamolestiaeinventore.png?size=50x50&set=set1', 'Product Management', 'Pharmacist', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Darb', 'O''Dulchonta', 'dodulchonta1u@ning.com', 'https://robohash.org/undedoloremducimus.png?size=50x50&set=set1', 'Accounting', 'Teacher', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Eric', 'Lambell', 'elambell1v@virginia.edu', 'https://robohash.org/estprovidentoccaecati.png?size=50x50&set=set1', 'Human Resources', 'Biostatistician I', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Masha', 'Emsden', 'memsden1w@reverbnation.com', 'https://robohash.org/doloritaqueharum.png?size=50x50&set=set1', 'Support', 'VP Accounting', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Lars', 'Isitt', 'lisitt1x@infoseek.co.jp', 'https://robohash.org/earumabofficia.png?size=50x50&set=set1', 'Marketing', 'Software Test Engineer III', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Ezmeralda', 'Klimschak', 'eklimschak1y@furl.net', 'https://robohash.org/beataerecusandaerem.png?size=50x50&set=set1', 'Legal', 'Automation Specialist IV', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Tanney', 'Kneafsey', 'tkneafsey1z@bing.com', 'https://robohash.org/eumsuntexcepturi.png?size=50x50&set=set1', 'Training', 'Compensation Analyst', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Juliann', 'Fowles', 'jfowles20@google.nl', 'https://robohash.org/quoexercitationemfugit.png?size=50x50&set=set1', 'Accounting', 'General Manager', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Giustina', 'Armin', 'garmin21@networkadvertising.org', 'https://robohash.org/ametutquia.png?size=50x50&set=set1', 'Support', 'Nurse', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Pauline', 'Copello', 'pcopello22@latimes.com', 'https://robohash.org/remnonvoluptatibus.png?size=50x50&set=set1', 'Human Resources', 'Civil Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Randell', 'Mease', 'rmease23@uol.com.br', 'https://robohash.org/rerumdoloresaccusamus.png?size=50x50&set=set1', 'Accounting', 'Actuary', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Maribelle', 'While', 'mwhile24@google.ru', 'https://robohash.org/idvoluptatemodit.png?size=50x50&set=set1', 'Human Resources', 'Database Administrator III', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Etty', 'Tebbut', 'etebbut25@freewebs.com', 'https://robohash.org/nonvoluptatemut.png?size=50x50&set=set1', 'Legal', 'Librarian', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Cheslie', 'Dyton', 'cdyton26@desdev.cn', 'https://robohash.org/illooditsed.png?size=50x50&set=set1', 'Business Development', 'Statistician IV', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Leora', 'Truscott', 'ltruscott27@imdb.com', 'https://robohash.org/recusandaeetcumque.png?size=50x50&set=set1', 'Engineering', 'Geological Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Neila', 'Merrisson', 'nmerrisson28@comsenz.com', 'https://robohash.org/saepereiciendisfugit.png?size=50x50&set=set1', 'Accounting', 'Payment Adjustment Coordinator', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Osbourn', 'Storrar', 'ostorrar29@freewebs.com', 'https://robohash.org/quieosnam.png?size=50x50&set=set1', 'Business Development', 'Occupational Therapist', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Stace', 'Conkling', 'sconkling2a@bloomberg.com', 'https://robohash.org/quiseumut.png?size=50x50&set=set1', 'Research and Development', 'Environmental Specialist', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Grove', 'Hellmore', 'ghellmore2b@wikimedia.org', 'https://robohash.org/undecumquenam.png?size=50x50&set=set1', 'Support', 'Media Manager I', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Horatius', 'Loxley', 'hloxley2c@stanford.edu', 'https://robohash.org/omnisdoloraut.png?size=50x50&set=set1', 'Sales', 'Dental Hygienist', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Florette', 'Rosenbusch', 'frosenbusch2d@shop-pro.jp', 'https://robohash.org/etquisa.png?size=50x50&set=set1', 'Accounting', 'Financial Advisor', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Tedie', 'Elder', 'telder2e@domainmarket.com', 'https://robohash.org/estillorecusandae.png?size=50x50&set=set1', 'Engineering', 'Speech Pathologist', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Nicolina', 'Peach', 'npeach2f@washingtonpost.com', 'https://robohash.org/abaliquidnihil.png?size=50x50&set=set1', 'Training', 'Electrical Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Alyosha', 'Camilleri', 'acamilleri2g@spotify.com', 'https://robohash.org/accusamusvoluptatemsequi.png?size=50x50&set=set1', 'Human Resources', 'Software Engineer III', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Anders', 'Davidy', 'adavidy2h@canalblog.com', 'https://robohash.org/autodionobis.png?size=50x50&set=set1', 'Accounting', 'Editor', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Deina', 'Hatfield', 'dhatfield2i@miitbeian.gov.cn', 'https://robohash.org/evenietaliquidut.png?size=50x50&set=set1', 'Engineering', 'Systems Administrator IV', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Jobey', 'Manktelow', 'jmanktelow2j@usda.gov', 'https://robohash.org/laudantiumenimnecessitatibus.png?size=50x50&set=set1', 'Legal', 'Geologist I', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Hildy', 'Krolak', 'hkrolak2k@latimes.com', 'https://robohash.org/distinctiositet.png?size=50x50&set=set1', 'Support', 'Structural Analysis Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Uriel', 'Court', 'ucourt2l@trellian.com', 'https://robohash.org/explicaboassumendaquia.png?size=50x50&set=set1', 'Legal', 'Desktop Support Technician', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Rosabel', 'Chugg', 'rchugg2m@twitter.com', 'https://robohash.org/maximenequequo.png?size=50x50&set=set1', 'Product Management', 'Recruiting Manager', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Carolyn', 'Nannetti', 'cnannetti2n@va.gov', 'https://robohash.org/eosessesed.png?size=50x50&set=set1', 'Services', 'Help Desk Operator', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Carlen', 'Innman', 'cinnman2o@prlog.org', 'https://robohash.org/hiceaquenihil.png?size=50x50&set=set1', 'Engineering', 'Senior Quality Engineer', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Sarette', 'Rudiger', 'srudiger2p@mail.ru', 'https://robohash.org/idsolutanecessitatibus.png?size=50x50&set=set1', 'Engineering', 'Sales Associate', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Inez', 'Chisholme', 'ichisholme2q@weebly.com', 'https://robohash.org/fugalaborumdicta.png?size=50x50&set=set1', 'Legal', 'Paralegal', '21ImC8IUCp19m&QEfdBbg');
// insert into employees (first_name, last_name, email, avatar, department, title, company_id) values ('Alice', 'Niblock', 'aniblock2r@facebook.com', 'https://robohash.org/voluptateaerror.png?size=50x50&set=set1', 'Engineering', 'Actuary', '21ImC8IUCp19m&QEfdBbg');

// Get new queries for financials by replacing the company_id from mock data with allIds
// const allIds = [{"id":"21ImC8IUCp19m&QEfdBbg"},{"id":"739bStMZKr28j&IV4PGuj"},{"id":"53FyQxFNZe88o&KGeWrae"},{"id":"48jJZAVGXs57k&P9nPRif"},{"id":"22E0GiH81b92r&B2uk7vf"},{"id":"49phRJKT8t50v&ONnHfjq"},{"id":"43t3T9X09v76t&BInmQtp"},{"id":"50ZcOIAL0u65y&JKVYgbu"},{"id":"13DSSYNH7d10c&IONcLii"},{"id":"083jSxV4Kn27m&PKAJxpg"},{"id":"632gWmIW6r17i&EQNsenm"},{"id":"19NeYUPUEr56e&JOGhDqv"},{"id":"14fbAJQ2Fp19m&ADscUuc"},{"id":"53AUR0WASu35y&WV5lGit"},{"id":"13vtH7JC5b60r&X4i6enh"},{"id":"59mPV2KFKl58r&SAc66do"},{"id":"23J6TgD8Kg94o&EM457ae"},{"id":"02yWGrT2Xg21s&IWgRycf"},{"id":"400IDTJKAd95v&UZqdqls"},{"id":"76J2I6WFZm61y&IBlT8jf"},{"id":"97SsVUFKHd64f&YMNjTvq"},{"id":"45tVCWH9Rm76b&Q5bX3dx"},{"id":"12JDCBN2Or68b&AAG11dg"},{"id":"577bJcR33f45p&Z5q3cpq"},{"id":"07ipYvIP7e64j&TGglpts"},{"id":"428pIbM5Ss76y&VJpvxjq"},{"id":"868hAXNXQe78f&XS9PSgn"},{"id":"70f7ZcNATt29c&QFvRzng"},{"id":"04okEhJSNt44u&HBXpzao"},{"id":"62dtX9VX9l88z&YV0Uzoz"},{"id":"910qTyP49b71q&MPlU6mr"},{"id":"08x4TaL28u78k&AJtTfsw"},{"id":"309dFEHPPk45a&QDWxwqp"},{"id":"331hJRPXYr79o&M7G2bfr"},{"id":"62KzUgS82v99c&CAtvbch"},{"id":"47kfPhGVLn25p&GT0k6pk"},{"id":"04R7LXR6Ia65a&VZCGyih"},{"id":"23tCDNIO6r20t&ATAVNof"},{"id":"25MAF3H85e61z&Z5XF6iv"},{"id":"73umWxKTVi38d&J5mbqmx"},{"id":"67NNCAFZMz76g&JTWWEoi"},{"id":"08r7D1L16m59w&UVWnqcy"},{"id":"96GeBHQRDr38c&D0PgGlr"},{"id":"46knS6KGSv42k&M6Kysyi"},{"id":"83LZWkH80z52j&N6qVGlj"},{"id":"27X1B7HT4h19s&HUZmXek"},{"id":"51Z8EhVQEm53v&KYb7ied"},{"id":"59KjVfWVZv59g&JTaXorq"},{"id":"79xnY9ZSHw42x&OGcsmsz"},{"id":"52FpTXTY4a98l&B3jbfde"},{"id":"08RkRmSV3s48w&DXngexw"},{"id":"50mfIHZTKm51o&K2JTTih"},{"id":"01fsNyJEDs52b&X0kXMwm"},{"id":"73idM7QP4o66t&JMmL4ai"},{"id":"93srUSL1Yt42j&KSlsVpb"},{"id":"70ayDADAXw95w&QGbVqon"},{"id":"29CPLQZX7l27l&ATXLyth"},{"id":"70EADpH7Hg39g&BUqA6cz"},{"id":"43h5VGVUEi65v&BNxpCtd"},{"id":"87N2BZIELb65b&MOChEjy"},{"id":"50uwRmJP0r92g&XLGoIlf"},{"id":"04CXGBD95p64j&GFsHzvf"},{"id":"80IvXlPHJo49z&FHORuqr"},{"id":"85bSJLHJ5s79o&DDEMGej"},{"id":"56FbAoF7Td09a&WO4mOlk"},{"id":"04hlFAJB4f44l&BTr83se"},{"id":"83okZLL6Yw26b&X41lsvr"},{"id":"33QARoW9Jk32a&LWSjenb"},{"id":"42BRYEJNWl10r&N0WA7ol"},{"id":"056qHnE87u36l&KDxSwxn"},{"id":"79aZGAET2g29f&VJis6nj"},{"id":"9986DuWY1j97c&U0GLgio"},{"id":"37wmWQCCZp61x&TOjaIzn"},{"id":"21IyLCU9Mj23n&YFs0zno"},{"id":"06gISyNBJz59v&KWDIAjb"},{"id":"46s1XpUKKn53u&XWT5vir"},{"id":"92AWJaTG8d09a&V8MOTew"},{"id":"94cWX6LWOf35e&IP5WRix"},{"id":"32uYVnR21e34g&CWi72go"},{"id":"37zoFSZ0Qp21b&KIdHmia"},{"id":"0196K6DELx87x&C16Mxue"},{"id":"49uTYIALKv36c&IMfFGho"},{"id":"98TkZdFYDm27z&SEP61wf"},{"id":"75thXYSTSt13u&R9VIEtb"},{"id":"01HaCOUE4u11b&G4NpYns"},{"id":"24ObOmV14d68x&CKRzzdu"},{"id":"78VLC4RK7u54c&E4cYDxs"},{"id":"2721TSRQKs74b&ITIsPwk"},{"id":"02iEPuHXUe30m&WAjyazb"},{"id":"62K5FzHLTz46t&MRCe0sm"},{"id":"98ZfSVVC8q34w&VJ36qcx"},{"id":"23rRVxB4Cg76j&J3dMyal"},{"id":"87XnAhJDFp70e&Q4jwgxs"},{"id":"40v8F0NIYr72v&ZCQETgf"},{"id":"39RpBmNQUi74u&MBAsNvn"},{"id":"72GQBpJOFv27j&FYQJLra"},{"id":"39ckZ3XONk29k&XBE15zr"}]

// let newqueries = financialQueries.map((query, idx) => {
//     return query.substring(0, 82) + `('${allIds[idx].id}', ` + query.substring(83)
// })
// console.log(newqueries)

// create a users table
// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//   )
