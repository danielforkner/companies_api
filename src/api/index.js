const fetchRegisterUser = async (data) => {
  const response = await fetch('/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return { response, result };
};

const fetchLoginUser = async (data) => {
  const response = await fetch('/api/users/login', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return { response, result };
};

module.exports = {
  fetchRegisterUser,
  fetchLoginUser,
};
