/** declare the express  */ const express = require('express');const app = express();
const path = require('path');

/** pug is a template engine */
app.set('view engine', 'pug');

/** body parser  is used to convert the data into  readable data for the system  */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

const adminRoutes = require('./Routes/admin');
app.use('/admin', adminRoutes);

const shopRoutes = require('./Routes/shop');
app.use(shopRoutes);

/** adding static css */

app.use(express.static(path.join(__dirname, 'css')));

/** if there is no page then return 404 page */
app.use((req, res, next) => {
  res.status(404).sendfile(path.join(__dirname, 'views', '404.html'));
});
/* const http = require('http'); */

/** use() is a one of the middleware */
/** using use method has 8 types  */

// app.get('/add-product', (req, res, next) => {
//   res.send(
//     '<h1>Add Product</h1>  <form action="/store-product" method="post"><input type="text" name="title"><input type="submit" value="Submit"></form>'
//   );
// });

/** app.post means if the only works post method request  */
// app.post('/store-product', (req, res, next) => {
//   console.log('Form data : ', req.body);
//   res.send('<h1> form submitted</h1>');
// });

/** always use root path in last because root path takes always first whenever you but / */
// app.use('/', (req, res, next) => {
//   res.send('<h1> First Page </h1>');
//   console.log('First middle ware');
//   next();
//   /** next() middle ware is used to tell the server to move the next request here the next request is second middle ware  */
// });
// app.use((res, req, next) => {
//   console.log('Second Middle ware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Third Middle ware');
/** to send the response to the server using send method */
//   res.send('<h1> Hello world</h1>');
// });

/* 
     creating server using node js 
     
const server = http.createServer(app);
server.listen(3000); */

/** creating server in express js  no need to http*/
app.listen(3000);

/** middle ware is used to separate   the request  into small parts the every request can travel any number of middlewares */
