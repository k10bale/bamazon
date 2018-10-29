# bamazon
An 'Amazon-like' app run in node using SQL, that takes in customers orders and depletes stock from the stores Inventory.

To first run the app, in your terminal, you will need to npm install: mysql , inquirer, & CLI tables.
  ClI tables was a cool node package I found that takes all the raw data from my database and prints it into a clean, pretty table in your terminal. 

Upon connection, a table with 20 items pops up- in categories ranging from electronics to pet supplies. The inventory is listed as well as the price.
The app will ask you which of these items (by ID number) you want, and how many of each.

It will then return your grand total, along with the name of the item and how many you want to purchase. The updated table also pops back up again with the updated inventory for that item. 

If the item is out of stock, you will recieve an "out of stock" message. 

Still to come:
  Manager side: where I can add, and check inventory. 
