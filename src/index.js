const { fetchRegisterUser, fetchLoginUser } = require('./api');

// ACORDIAN FUNCTIONS
let showSectionButtons = document.querySelectorAll('.showSectionButton');
let showDetailsButtons = document.querySelectorAll(
  '.showDetailsButton, .headingTitle'
);

showSectionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let section = button.parentElement.nextElementSibling;
    section.classList.toggle('showSection');
    if (section.classList.contains('showSection')) {
      button.innerText = 'Collapse';
      section.style.height = section.scrollHeight + 'px';
    } else {
      button.innerText = 'Expand';
      section.style.height = 0;
    }
  });
});

showDetailsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let div = button.parentElement.nextElementSibling;
    let section = div.parentElement.parentElement;
    div.classList.toggle('showSection');
    if (div.classList.contains('showSection')) {
      div.style.height = div.scrollHeight + 'px';
      section.style.height = section.scrollHeight + div.scrollHeight + 'px';
    } else {
      section.style.height = section.scrollHeight - div.scrollHeight + 'px';
      div.style.height = 0;
    }
  });
});

// REGISTER and LOGIN test results below
const registerAUser = async (event) => {
  event.preventDefault();
  let formData = new FormData(registerForm);
  let data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }
  document.getElementById('loadingRegister').innerText = 'Loading...';
  const { response, result } = await fetchRegisterUser(data);
  updateRegisterData({ response, result });
  document.getElementById('loadingRegister').innerText = '';
};

const loginAUser = async (event) => {
  event.preventDefault();
  let formData = new FormData(loginForm);
  let data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }
  document.getElementById('loadingLogin').innerText = 'Loading...';
  const { response, result } = await fetchLoginUser(data);
  updateLoginData({ response, result });
  document.getElementById('loadingLogin').innerText = '';
};

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
registerForm.addEventListener('submit', registerAUser);
loginForm.addEventListener('submit', loginAUser);

const updateRegisterData = ({ response, result }) => {
  document.getElementById('registerUserRequestURL').innerText = response.url;
  document.getElementById(
    'registerUserResponseCode'
  ).innerText = `${response.status} ${response.statusText}`;
  document.getElementById('registerUserResponseBody').innerText = result.message
    ? result.message
    : result.token;
};

const updateLoginData = ({ response, result }) => {
  document.getElementById('loginUserRequestURL').innerText = response.url;
  document.getElementById(
    'loginUserResponseCode'
  ).innerText = `${response.status} ${response.statusText}`;
  document.getElementById('loginUserResponseBody').innerText = result.message
    ? result.message
    : result.token;
};
