module.exports = {
  testeTriangulo(triangulo){

    //Entrada é um vetor

    if( triangulo.every(elem => elem === parseInt(elem, 10) && elem >= 0 && elem <= 99)){
      let result;

      if(triangulo[0] < (triangulo[1] + triangulo[2]) && triangulo[1] < (triangulo[0] + triangulo[2]) && triangulo[2] < (triangulo[1] + triangulo[0]) ){
        //é um triangulo
        if(triangulo[0] == triangulo[1] && triangulo[1] == triangulo[2]){
          //Triangulo equilatero!
          result = 1;
        } else if(triangulo[0] == triangulo[1] || triangulo[0] == triangulo[2] || triangulo[2] || triangulo[0]){
          //Triangulo isóceles!
          result = 2
        }
        if(triangulo[0] != triangulo[1] && triangulo[1] != triangulo[2] && triangulo[2] != triangulo[0]){
          //Triangulo escaleno!
          result = 3;
        }
        
      } else{
        //Não é triangulo!
        return 4;
      } 

      return result;
    }else{
      return 0;
    }

  }
}