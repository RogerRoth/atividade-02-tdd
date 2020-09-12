module.exports = {
  conversao(valores){

    let vetor = valores.split(',').map(function(item) {
      return parseInt(item, 10);
    });

    if( vetor.every(elem => elem === parseInt(elem, 10))){
      
      return vetor;
    }else{
      return [];
    }

  }
}