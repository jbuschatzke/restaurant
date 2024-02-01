export default function createMenu(){
    const menuItemOne = document.createElement('div');
    menuItemOne.setAttribute("class", "menu-item");
    menuItemOne.innerText = "Pepperoni Pizza";
    const menuItemOneFlavor = document.createElement('p');
    menuItemOneFlavor.setAttribute("class", "menu-text");
    menuItemOneFlavor.innerText = "A classic pepperoni pizza pie with a delicious blanket of melted cheese over large spicy pepperoni slices";
    menuItemOne.appendChild(menuItemOneFlavor);

    const menuItemTwo = document.createElement('div');
    menuItemTwo.setAttribute("class", "menu-item");
    menuItemTwo.innerText = "Meatball Sub";
    const menuItemTwoFlavor = document.createElement('p');
    menuItemTwoFlavor.setAttribute("class", "menu-text");
    menuItemTwoFlavor.innerText = "A meatball sub that's gonna have you sayin 'Holy Cow! That's one delicious meatball sub!'";
    menuItemTwo.appendChild(menuItemTwoFlavor);

    const menuItemThree = document.createElement('div');
    menuItemThree.setAttribute("class", "menu-item");
    menuItemThree.innerText = "Fried Ravioli";
    const menuItemThreeFlavor = document.createElement('p');
    menuItemThreeFlavor.setAttribute("class", "menu-text");
    menuItemThreeFlavor.innerText = "The beautiful, gorgeous sister to the average old mozzerella stick; this girly is gonna have you on your knees begging for more";
    menuItemThree.appendChild(menuItemThreeFlavor);

    const homeContainer = document.getElementById('content');
    homeContainer.appendChild(menuItemOne);
    homeContainer.appendChild(menuItemTwo);
    homeContainer.appendChild(menuItemThree);
};