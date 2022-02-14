exports.getDate = ()=>{
    let options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    
    }
    
    let date = new Date();
    
    let today = date.toLocaleString('en-US', options);

    return today;

}


exports.meow = ()=>{
   console.log("meow");

}



