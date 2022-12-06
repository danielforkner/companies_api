const BASE_URL = window.location.origin;

export const getCompanies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/companies`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

export const getIndustries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/industries`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

export const getFinancialsById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/api/financials/${id}`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
