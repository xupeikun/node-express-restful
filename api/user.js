var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var express = require('express');
var router = express.Router();
var query = require("../public/mysqlHelper")
var responseData;

router.use(function(req,res,next) {
    responseData ={
        code:0,
        message:'成功'
    }
    next();
});

router.get("/index",function(req,res) {
    responseData.code = 2;
    responseData.message = req.query.message;
    res.json(responseData);
});

router.get("/:name/test",function (req,res) { // restful
    const name = req.params.name;
    responseData.message = name;
    res.json(responseData);
})

router.post("/test",multipartMiddleware,function (req,res) {
    const name = req.body.name;
    responseData.message = name;
    res.json(responseData);
})

router.get("/query",function (req,res) {
    const  querySql = ""; //put sql
    query(querySql ,function (qerr,vals,fields) {
        console.log("--------------")
        console.log(vals[0].id); // get frist data id
        console.log("--------------")
        console.log(vals.length); // get data length
    })
    res.json(responseData);
})


module.exports = router;