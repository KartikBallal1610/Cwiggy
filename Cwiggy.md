The main reason I created the Cwiggy app was to learn New Relic and implement monitoring. Here's what I did:

First, I created a basic restaurant menu ordering system with multiple restaurant menus: Burger Singh, Coffee Ka Khauf, and Sardarbucks. Each restaurant has a list of items like burgers, coffee, and drinks that users can select from.

Then, I added login and signup functionality to make sure that only authenticated users can access the restaurant menus and place orders. I made sure that users must sign up first, log in, and then they can start selecting items from the menus.

For the order system, I enabled users to select items from the menu. Once they click the "Order" button, the selected items are stored in local storage and displayed on an "Order Successful" page.

To ensure that users can't access the restaurant menus without logging in, I implemented session management. After logging out, users are redirected to the login page, and they cannot access the menu or order pages without being logged in.

The main objective was to integrate New Relic for monitoring. I wanted to track key metrics like page load times, user interactions, and overall app performance. This helps in identifying potential issues and ensuring the app runs smoothly.

Finally, I deployed the app to GitHub Pages, making it easy to host, share, and manage the app.

This app serves as a practical project for learning about monitoring with New Relic and gives me a better understanding of how to track and optimize performance in real-world applications.
