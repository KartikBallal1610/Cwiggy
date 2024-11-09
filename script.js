function orderFood() {
    // Get selected items from each restaurant menu
    const selectedItems = [];

    // Burger Singh
    const burgerSinghItems = document.getElementsByName('burgerSinghItem');
    for (let i = 0; i < burgerSinghItems.length; i++) {
        if (burgerSinghItems[i].checked) {
            selectedItems.push(burgerSinghItems[i].value);
        }
    }

    // Coffee Ka Khauf
    const coffeeKaKhaufItems = document.getElementsByName('coffeeKaKhaufItem');
    for (let i = 0; i < coffeeKaKhaufItems.length; i++) {
        if (coffeeKaKhaufItems[i].checked) {
            selectedItems.push(coffeeKaKhaufItems[i].value);
        }
    }

    // Sardarbucks
    const sardarbucksItems = document.getElementsByName('sardarbucksItem');
    for (let i = 0; i < sardarbucksItems.length; i++) {
        if (sardarbucksItems[i].checked) {
            selectedItems.push(sardarbucksItems[i].value);
        }
    }

    // Display the selected items
    if (selectedItems.length > 0) {
        alert('Your order: ' + selectedItems.join(', '));
    } else {
        alert('Please select some items from the menu.');
    }
}
