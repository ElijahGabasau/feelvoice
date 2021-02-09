const fs = require('fs');

module.exports = {
  //deletes the imagies specified in a given array or a string
  toDelete(object, path){
    if(!object) {
      return;
    }

    let array;

    if(Array.isArray(object)){
      array = object;
    }else{
      array = object.split(',');
    }
    
      
    for(let i = 0; i < array.length; i++) {
      const filePath = path + '/' + array[i];
      fs.unlink(filePath, err => {
        if(err){
          console.log(err);
        }
      });
    }
  }
}