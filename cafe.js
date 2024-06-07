function showEatListByDefault() {
  const eatList = document.getElementById('eatlist');
  const drinkList = document.getElementById('drinklist');

  eatList.style.display = 'block'; // Show the "Eat" list
  drinkList.style.display = 'none'; // Hide the "Drink" list
}

// Call the function when the page loads
window.onload = function() {
  showEatListByDefault();
};

// Function to toggle the menu
function toggleMenu(menuId) {
  const menu = document.getElementById(menuId);
  const allMenus = document.getElementsByClassName('menuelist');
  for (let i = 0; i < allMenus.length; i++) {
      if (allMenus[i] !== menu) {
          allMenus[i].style.display = 'none';
      }
  }
  // ternary operators
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}


  