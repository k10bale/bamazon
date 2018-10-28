DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(11) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Burts Bees Shampoo', 'Personal Care', 7.99, 600),
		('Burts Bees Conditioner', 'Personal Care', 8.99, 650),
		('Aveeno Lotion', 'Personal Care', 10.99, 300),
		('Dove Body Wash', 'Personal Care', 6.25, 500),
		('Crest Toothpaste', 'Personal Care', 4.25, 800),
		('Beats Wireless Headphones', 'Electronics', 249.95, 300),
		('Apple TV', 'Electronics', 199.99, 250),
		('Nikkon Camera', 'Electronics', 499.75, 200),
		('Samsung TV', 'Electronics', 2997.99, 450),
		('Amazon USB Cable', 'Electronics', 7.99, 800),
		('Wellness Dog Food', 'Pets', 52.75, 400),
		('Furbo Dog Camera', 'Pets', 199.99, 150),
		('Meowijuana Cat Nip', 'Pets', 30.60, 200),
		('Milkbone Dog Treats', 'Pets', 10.99, 900),
        ('Purina Cat Chow', 'Pet', 7.25, 500),
		('Folgers Coffee', 'Grocery', 7.50, 900),
		('Cheetos', 'Grocery', 2.88, 800),
		('Diet Coke', 'Grocery', 4.99, 550),
		('Ben & Jerry Ice Cream', 'Grocery', 3.25, 420),
        ('Cheerios', 'Grocery', 3.50, 850);