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

// section.classList.toggle('show-text')
