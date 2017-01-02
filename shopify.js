
/* Lee Raj Jan 02 2017 */


//Retrive the json url
var request = require('request');
request('https://shopicruit.myshopify.com/admin/orders.json?page=1&access_token=c32313df0d0ef512ca64d5b336a0d7c6', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body) // Show the HTML for the Google homepage.
    console.log('success!')

    // Parse the JON URL into a Javascript Object
    var obj = JSON.parse(body);


    //This command will print out all the objects in the JSON File
    //console.log(obj);

    //This command will print out a specific object in the array of orders (a specific customer and his/her details)
    //console.log(obj.orders[2]);

    /* This command will print a specific value:key (customer) pair from the properties of objects for a particular customer.
       In this case, it's the email adress of the cusotomer stored in the array of object at location [0] */

    //console.log(obj.orders[0].email);

    //Variable to store the Revenue
    var sum = 0.0;
    //The command loops through the array in the JSON object
    for (i = 0; i < obj.orders.length; i++) {
        // The command prints out all the total_price (which includes discount, tax rates, shipping) for all the customers
        //console.log(obj.orders[i].total_price);
        var p = obj.orders[i].total_price;
        // Total sum of revenues is stored
        sum += +p;

    }
    console.log('Total Revenue: ' + sum);


  }
})
