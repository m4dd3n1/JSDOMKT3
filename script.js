const menuItems = document.querySelectorAll('#menu li');
menuItems.forEach(item => {
  const subMenu = item.querySelector('ul');
  if (subMenu) {
    item.classList.add('has-submenu');
    const link = item.querySelector('a');
    link.addEventListener('click', (event) => {
      event.preventDefault();
      subMenu.classList.toggle('show');
    });
  }
});