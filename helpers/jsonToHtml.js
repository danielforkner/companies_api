function jsonToHtml(json) {
  return '<pre>' + JSON.stringify(json, null, 2) + '</pre>';
}

let result = jsonToHtml([
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
]);

console.log(result);
