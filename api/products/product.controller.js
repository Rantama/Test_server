var product = require ('./product.model');

module.exports = {
  getAll:  function(req, res, next) {
    product.find({})
    .then(function(products) {
      res.status(200).send(products)
    })
    .catch(function(err) {
      console.log(err);
      next(err);
    })
},

    save: function(req, res, next) {
      product.create(req.body)
      .then(function(prod) {
        res.status(200).send(prod);
      })
      .catch(function(err) {
        console.log(err);
        next(err);
      })

}
}
