const { fetchRegisterUser, fetchLoginUser } = require('./api');

// ACORDIAN FUNCTIONS
let showSectionButtons = document.querySelectorAll(
  '.showSectionButton, .categoryTitle'
);
let showDetailsButtons = document.querySelectorAll(
  '.showDetailsButton, .headingTitle'
);

showSectionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let section = button.parentElement.nextElementSibling;
    section.classList.toggle('showSection');
    if (section.classList.contains('showSection')) {
      if (button.classList.contains('showSectionButton')) {
        button.innerText = 'Collapse';
      } else {
        button.nextElementSibling.innerText = 'Collapse';
      }
      section.style.height = section.scrollHeight + 'px';
    } else {
      if (button.classList.contains('showSectionButton')) {
        button.innerText = 'Expand';
      } else {
        button.nextElementSibling.innerText = 'Expand';
      }
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

// FORM RESPONSES
const handleForm = async (event) => {
  event.preventDefault();
  let form = event.target;
  let loadingDiv = event.target.children[2].children[1];
  let responseContainer = event.target.nextElementSibling;
  let requestURL = responseContainer.children[1].children[0];
  let responseBody = responseContainer.children[3].children[0];
  let responseCode = responseContainer.children[5].children[0];
  let formData = new FormData(form);
  let data = {};
  let responseObj = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }
  loadingDiv.style.backgroundImage = "url('./images/loading.gif')";
  switch (form.id) {
    case 'registerForm':
      responseObj = await fetchRegisterUser(data);
      break;
    case 'loginForm':
      responseObj = await fetchLoginUser(data);
      break;
    default:
      console.log('default');
  }
  const { response, result } = responseObj;
  requestURL.innerText = response.url;
  responseCode.innerText = `${response.status} ${response.statusText}`;
  responseBody.innerText = result.message ? result.message : result.token;
  loadingDiv.style.backgroundImage = '';
};

const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  form.addEventListener('submit', handleForm);
});

// const registerAUser = async (event) => {
//   event.preventDefault();
//   let loadingDiv = event.target.children[2].children[1];
//   let responseContainer = event.target.nextElementSibling;
//   console.log(loadingDiv);
//   console.log(responseContainer);
//   let formData = new FormData(registerForm);
//   let data = {};
//   for (let [key, value] of formData.entries()) {
//     data[key] = value;
//   }
//   document.getElementById('loadingRegister').innerText = 'Loading...';
//   try {
//     const { response, result } = await fetchRegisterUser(data);
//     updateRegisterData({ response, result });
//   } catch (error) {
//     console.error(error);
//   }
//   document.getElementById('loadingRegister').innerText = '';
// };

// const loginAUser = async (event) => {
//   event.preventDefault();
//   let formData = new FormData(loginForm);
//   let data = {};
//   for (let [key, value] of formData.entries()) {
//     data[key] = value;
//   }
//   document.getElementById('loadingLogin').innerText = 'Loading...';
// const { response, result } = await fetchLoginUser(data);
// updateLoginData({ response, result });
//   document.getElementById('loadingLogin').innerText = '';
// };

// const registerForm = document.getElementById('registerForm');
// const loginForm = document.getElementById('loginForm');
// registerForm.addEventListener('submit', registerAUser);
// loginForm.addEventListener('submit', loginAUser);

// const updateRegisterData = ({ response, result }) => {
//   document.getElementById('registerUserRequestURL').innerText = response.url;
//   document.getElementById(
//     'registerUserResponseCode'
//   ).innerText = `${response.status} ${response.statusText}`;
//   document.getElementById('registerUserResponseBody').innerText = result.message
//     ? result.message
//     : result.token;
// };

// const updateLoginData = ({
//   response,
//   result,
//   requestURL,
//   responseBody,
//   responseCode,
// }) => {
// };
