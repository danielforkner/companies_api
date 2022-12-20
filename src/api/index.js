const fetchRegisterUser = async (data) => {
  try {
    const response = await fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return { response, result };
  } catch (error) {
    throw error;
  }
};

const fetchLoginUser = async (data) => {
  try {
    const response = await fetch('/api/users/login', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return { response, result };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchRegisterUser,
  fetchLoginUser,
};
