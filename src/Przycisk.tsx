import { useState } from 'react';

function Przycisk(){
  const [x, ustaw1] = useState(0)
  const [y, ustaw2] = useState(0)
  const [z, ustaw3] = useState(0)
  const [p, ustaw4] = useState("")
  const [s, ustaw5] = useState(0)
  const [a, ustaw6] = useState(0)
  
  

  function wybor() {
    
    if(x<10){
      ustaw1(x + 1);
    }
    else if(x>=10){
      ustaw1(x - 10)
    }

  }

  function wybor1() {
    
    if(y<10){
      ustaw2(y + 1);
    }
    else if(y>=10){
      ustaw2(y - 10)
    }

  }

  function wybor2() {
    
    if(z<20){
      ustaw3(z + 1);
    }
    else if(z>=20){
      ustaw3(z - 20)
    }

  }
  function czyP(){
    if(x != 0 && y != 0 && z != 0){
      if(  y + x >= z && x + z >= y && z + y >= x) {

        ustaw5((x + y + z) / 2)
        if(y * y + x * x == z * z || z * z + x * x == y * y || z * z + y * y == x * x){
          ustaw4("jest prostkątny")
          if(y > x &&  y > z){
            ustaw6((x*z)/2)
          }
          if(x > y &&  x > z){
            ustaw6((y*z)/2)
          }
          if(z > x &&  z > y){
            ustaw6((x*y)/2)
          }
        }
        else{
          ustaw4("nie jest prostokątny")
          ustaw6(Math.ceil(Math.sqrt(s * (s - x) * (s - y) * (s - z))))
        }
        

      }
      else{
        ustaw4("taki trókąt nie istnieje")
      }
    }
    else{
      ustaw4("taki trókąt nie istnieje")
    }
  }

 


  return(
    <>

    <button onClick={wybor}>
    bok1 : {x}</button> 

    <button onClick={wybor1}>
    bok2 : {y}</button>

    <button onClick={wybor2}>
    bok3 : {z}</button>
    <br></br>
    <button onClick={czyP}>
    sprawdź</button>

    <p>{p}</p>
    <p>Obwód={s*2}</p>
    <p>Pole≈{a}</p>

    </>       
  

  );
}
export default Przycisk