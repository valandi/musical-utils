function initializeDropdown() {
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownMenu = document.getElementById('dropdownMenu');

  if (dropdownButton && dropdownMenu) {
    dropdownButton.addEventListener('click', function (event) {
      event.stopPropagation();
      dropdownMenu.classList.toggle('hidden');
    });

    // Close dropdown if clicking outside the dropdown or button
    document.addEventListener('click', function (event) {
      if (
        !dropdownButton.contains(event.target) &&
        !dropdownMenu.contains(event.target)
      ) {
        dropdownMenu.classList.add('hidden');
      }
    });

    // Close dropdown when clicking any item inside the menu
    dropdownMenu.querySelectorAll('a, button').forEach((item) => {
      item.addEventListener('click', function () {
        dropdownMenu.classList.add('hidden');
      });
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeDropdown);
} else {
  initializeDropdown(); // DOM is already ready
}
