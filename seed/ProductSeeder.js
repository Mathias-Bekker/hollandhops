var mongoose = require('mongoose');
var Product = require("../models/product");
// mongoose.connect("mongodb://localhost/hops");
mongoose.connect("mongodb://mathias:password@ds151909.mlab.com:51909/hops");

var products = [
new Product({
    imagePath:"https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2015/11/centennial-hop-plant.jpg",
    title:"Centennial",
    description:"Centennial is the third hop that makes up the trio known as the “Three Cs” hops; the other two being Cascade and Columbus, though many consider Chinook a “C” hop and have expanded the grouping to include it. These hops are grouped together because they most represent the original flavor and aroma profile of the American craft beer revolution.",
    price:10,
    amount:100
}),
new Product({
    imagePath:"https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/bowl-of-cascade-hops.jpg",
    title:"Cascade",
    description: "Cascade is considered by many the quintessential American Hop and with good reason. It was the first hop to come out of the USDA hop breeding program and has become an essential hop addition in many American Pale Ales and most West Coast IPAs.",
    price:10,
    amount:100
}),
new Product({
    imagePath:"https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/amarillo.jpg",
    title: "Amarillo",
    description: "The history of the Amarillo variety starts with a chance discovery. Unlike many other varieties there was no purposeful breeding of different plants to amplify certain characteristics and minimize others, no involvement of the USDA hop breeding program. It is the whim of nature, pure and simple, that we have to thank for this hop.",
    price:10,
    amount:100
})
];
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
};

function exit(){
    console.log("Seed complete");
    mongoose.disconnect();
}
