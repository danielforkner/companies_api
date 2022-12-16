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

const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  let formData = new FormData(registerForm);
  let data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }
  console.log(JSON.stringify(data));
  document.getElementById('loadingRegister').innerText = 'Loading...';
  const response = await fetch('/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log(response);
  document.getElementById('loadingRegister').innerText = `${response.status} (${
    response.statusText
  }): ${response.status === 401 ? result.message : result.token}`;
});
