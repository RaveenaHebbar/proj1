const next = require('next');
const express = require('express');
const wooConfig = require('./wooConfig');
const server=express();

const wooCommerceAPI=require('woocommerce-api');

const WooCommerce=new wooCommerceAPI({
    url:wooConfig.siteUrl,
    consumerKey:wooConfig.consumerKey,
    consumerSecret:wooConfig.consumerSecret,
    wpAPI: true,
    version: 'wc/v1'

});

const port=3000;
const dev=process.env.NODE_ENV !== 'production';
const app=next({dev});
const handle=app.getRequestHandler();


app.prepare()
   .then(onfulfilled=()=>{
      

server.get('/getProducts',(req,response)=>{
    WooCommerce.get(endpoint='products',callback=function(err,data,res){
          response.json(JSON.parse(res));
    });


});


       server.get( '*',(req,res)=>{
           return handle(req,res);
       });
       server.listen(port,err =>{
           if(err){
               throw err;
           }
           console.log(`Ready on ${port}`);
       })
   })
   .catch(onrejected=ex=>{
       console.error(ex.stack);
       process.exit(1);

   });
