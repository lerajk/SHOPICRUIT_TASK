# SHOPICRUIT_TASK
Shopify Task for Internship Application by Lee Raj 01/02/2017

Language Used: Node.js

Process for Calculating the Total Order Revenue 

Step 1: Parsing the JSON URL https://shopicruit.myshopify.com/admin/orders.json?page=1&access_token=c32313df0d0ef512ca64d5b336a0d7c6 into a Javascript Object 

Step 2: Retriving the correct Order Properties using the API Reference (https://help.shopify.com/api/reference/order)
        In this particular case, it is 'total_price' and 'total_price_usd'
        
Step 3: Calulating the total sum by adding the values for every customer. 

Note: Shopify.js contains revenue calulated based on total_price and Shopify_USD.js contains revenue based on total_price_usd.       The result.pdf shows the output (revenue calculated) by running the application. 
