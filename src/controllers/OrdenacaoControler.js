module.exports = {
  ordenacao( vetor ){
    
    if(vetor.length > 4 && vetor.length <= 10){

      if( vetor.every(elem => elem.toString().length == 5 && elem === parseInt(elem, 10))){
        let sortNumber = function(x, y) { return x - y; };
        //return vetor.sort(sortNumber);
        return 1;
      }else{
        return 0;
      }

    }else{
      return 0;
    }
  }
}