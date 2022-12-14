const BASE_URL = 'https://companies-api.onrender.com';

export const getCompanies = async (): Promise<Array<object>> => {
  try {
    const response = await fetch(`${BASE_URL}/api/companies`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

export const getIndustries = async (): Promise<Array<object>> => {
  try {
    const response = await fetch(`${BASE_URL}/api/industries`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

export const getFinancialsById = async (id: string): Promise<Array<object>> => {
  try {
    const response = await fetch(`${BASE_URL}/api/financials/${id}`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
