function jsonToHtml(json) {
  return '<pre>' + JSON.stringify(json, null, 2) + '</pre>';
}

let result = jsonToHtml([
  {
    id: 77,
    company_id: '92AWJaTG8d09a&V8MOTew',
    quarter: 'Q122',
    cogs: '143',
    profit_margin: '0.571',
    revenue: '143.81653',
  },
]);

console.log(result);
