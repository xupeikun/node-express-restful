var mysql =require("mysql");

var pool = mysql.createPool({
	host:"*.*.*.*",
	user:"root",
	password:"*****",
	database:"****",
	port:"3306",
	charset:"UTF8_GENERAL_CI",
	debug:false
});
var query=function(sql,callback){  
    pool.getConnection(function(err,conn){  
        if(err){  
            callback(err,null,null);  
        }else{  
            conn.query(sql,function(qerr,vals,fields){  
                conn.release();  
                callback(qerr,vals,fields);  
            });  
        }  
    });  
};
module.exports=query;  