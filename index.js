class Formatter {
  //add static methods here
  static capitalize(string){
    return (string[0].toUpperCase() + string.substring(1));
  }

  static sanitize(string){
    
    const str = string.replace(/[^- ,'A-Za-z0-9]+/g, '');

    return str;
  }

  static titleize(string){

    const errorWords =['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    
    const array = string.split(" ");
    let message = ""
    let count = 0;
    for (let word of array){

      if (!errorWords.includes(word) || (count === 0)){
        message += word[0].toUpperCase() + word.substring(1);
      }else{
        message += word;
      }
      
      if(count !== array.length - 1){
          message += " ";
          count++;
      }
    }

    return message;
  }
}