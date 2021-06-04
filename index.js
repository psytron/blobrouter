
// IMPORT DEPS 
const fs = require('fs');


class Blobs {
    
    constructor( network , cache_dir ) {
        this.network = network;
        this.cache_dir = cache_dir;
        if (!fs.existsSync( this.cache_dir )){  
            fs.mkdirSync(this.cache_dir);  }
        this.blobs_dir = this.cache_dir + '/blobs';
        if (!fs.existsSync( this.blobs_dir )){ 
            fs.mkdirSync(this.blobs_dir); }      
    }

    write( name , dat  ){
        let data = ""+dat
        fs.writeFileSync( this.blobs_dir+'/'+ this.network+'.'+name , data); 
    }
    
    read( name ){
        var vl = fs.readFileSync( this.blobs_dir+"/"+this.network+'.'+name, "utf8");
        return vl;
    }

}


// READ WRITE EACH CREDENTIAL PER NETWORK and SIGNER

module.exports = {
    Blobs
}