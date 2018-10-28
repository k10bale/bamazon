var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon_DB"
  })

//   var start = function(){
  connection.connect(function(err) {
    if (err) throw err;
   
    start();
  });

  function start() {
    connection.query("SELECT * FROM products", function(err, res) {
        var table = new Table({
            head: ['ID', 'Product Name', 'Department', 'Price', 'Stock Quantity']
        });
    //   if (err) throw err;
    console.log("\n-----------------------------------------------------------------" 
    + "\nWelcome to Bamazon! Check out what we've got in store for you!\n" 
    + "-----------------------------------------------------------------\n");
      for (var i = 0; i < res.length; i++) {
        table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
    }
    //LOGS THE RESPONSE INTO A CLEAN CLI TABLE
        console.log(table.toString());
      
        inquirer.prompt([{
            name: "id",
            type: "input",
            message: "Which item (by ID) would you like to purchse?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                }
                return false;
            }
        },{   
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                return false;
            }

        }
        
    } ]).then(function(answer){
        var chosenId = (answer.id) - 1
            var chosenProduct = res[chosenId]
            var chosenQuantity = answer.quantity
            if (chosenQuantity < res[chosenId].stock_quantity) {
                console.log("Your total for " + "(" + answer.quantity + ")" + " - " + res[chosenId].product_name + " is: \$\ "+ res[chosenId].price.toFixed(2) * chosenQuantity);
                connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: (res[chosenId].stock_quantity) - chosenQuantity
                }, {
                    item_id: res[chosenId].item_id
                }], function(err, res) {
                    //console.log(err);
                    start();
                });
            } else {
                console.log("Sorry, insufficient Quanity at this time. All we have is " + res[chosenId].StockQuantity + " in our Inventory.");
                start();
            }
            })
    })
}
   

    
