let showSectionButtons = document.querySelectorAll('.showSectionButton');
let showDetailsButtons = document.querySelectorAll('.showDetailsButton');
showSectionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let section = button.parentElement.nextElementSibling;
    section.classList.toggle('showSection');
    if (section.classList.contains('showSection')) {
      section.style.height = section.scrollHeight + 'px';
    } else {
      section.style.height = 0;
    }
  });
});

showDetailsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let div = button.parentElement.nextElementSibling;
    let section = div.parentElement;
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
