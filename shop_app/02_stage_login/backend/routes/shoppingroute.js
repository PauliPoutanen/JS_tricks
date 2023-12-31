const express = require("express")
const itemModel = require("../models/item")
const item = require("../models/item")

let router = express.Router()

router.get("/shopping", function(req,res) {
    let query = {"user":req.session.user}
    itemModel.find(query)
    .then(function(items){
        return res.status(200).json(items)
    })
    .catch(function(err){
        console.log(err)
        return res.status(500).json({"Message":"IntServError"})

    })
})


router.post("/shopping", function(req,res){
if(!req.body) {
    return res.status(400).json({"Message":"Bad Request"})
}
if(!req.body.type){
    return res.status(400).json({"Message":"Bad request"})
}

    let item = new itemModel({
        "user":req.session.user,
        "type":req.body.type,
        "count":req.body.count,
        "price":req.body.price
    })
    item.save().then(function(item){
        return res.status(201).json(item)
    }) .catch(function(err){
        console.log(err)
        return res.status(500).json({"Message":"IntServErr"})
    })
 })
 router.delete("/shopping/:id",function(req,res) {
	itemModel.deleteOne({"_id":req.params.id,"user":req.session.user}).then(function(stats) {
		console.log(stats);
		return res.status(200).json({"Message":"Success"});
	}).catch(function(err) {
		console.log(err);
		return res.status(500).json({"Message":"Internal server error"})		
	})
})


router.put("/shopping/:id", function(req,res){
    if(!req.body) {
        return res.status(400).json({"Message":"Bad Request"})
    }
    let item = new itemModel({
        "type":req.body.type,
        "count":req.body.count,
        "price":req.body.price
    })
    itemModel.replaceOne({"_id":req.params.id, item})
    .then(function(stats){
        console.log(stats)
        return res.status(200).json({"Message":"Success"})
    })
    .catch(function(err){
        console.log(err)
        return res.status(500).json({"Message":"IntServErr"})
    })
  })


module.exports = router