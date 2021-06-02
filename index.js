
// IMPORT DEPS 
const fs = require('fs');
const hre = require("hardhat");
const network_name = hre.network.name;



// MAKE BLOBS DIR IN HARDHAT CACHE
var cache_dir = './cache';
if (!fs.existsSync( cache_dir )){  fs.mkdirSync(cache_dir);  }
cache_dir = './cache/blobs';
if (!fs.existsSync( cache_dir )){ fs.mkdirSync(cache_dir); }



// READ WRITE EACH CREDENTIAL PER NETWORK and SIGNER
function write( name , dat  ){
    let data = ""+dat
    fs.writeFileSync( cache_dir+'/'+ network_name+'.'+name , data); 
}
function read( name ){
    var vl = fs.readFileSync( cache_dir+"/"+network_name+'.'+name, "utf8");
    return vl;
}
module.exports = {
    write:write,
    read:read
}