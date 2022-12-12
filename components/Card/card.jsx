import { useState, useEffect } from 'react';
import styles  from '../Card/Card.module.css'
import Link from 'next/link';



function Card() {
  const [data, setData] = useState([])
     
  useEffect(()=>{
    fetch(`http://127.0.0.1:8000/pay/type/`)
    .then(response => response.json())
    .then(result => setData(result))
    },[data])


    return (
     <>
       <div className={styles.container}>
         {   data.map((value)=>{
              
          return(
            <div key={value.id} className={styles.paytype}>
                <div className={styles.photo}>
                  <img src={value.image} alt="image"/>
                  <span>{value.name}</span>
                </div>
                <div><p>{value.text}</p></div>
            </div>
             )

            })
         }


      </div>
     </>
    );
  }
  
  export default Card;