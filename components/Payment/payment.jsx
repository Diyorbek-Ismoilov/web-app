import styles from './Payment.module.css'
import Link from 'next/link'

const Pay = ()=>{
    return(
        <>
            <div class={styles.wrapper}>
                <h1><Link class={styles.heading} href={'/card'}>Назад</Link></h1>
        <div class={styles.container}>
              <form action="">
                <div>
                    <input class={styles.inp} inputMode="numeric" pattern="[0-9]*" min="1" max="4" type="number"  placeholder="Номер карты"  autocomplete="off"/>  
                    <input class={styles.inp2} type="text" name="text"  placeholder="Имя"/>
                </div>
                 <div class={styles.data}>

                        <div>
                            <input class={styles.cvv} type="number" placeholder='Год' />
                        </div>

                 
                        <div>
                            <input class={styles.cvv} type="number"  placeholder='Месяц' />
                        </div>
                  

                    <div class={styles.opt1}> 
                        <input type="text" maxlength="4" class={styles.cvv} placeholder="CVV"/>
                    </div>

                 </div>

                 <div class={styles.sub}>
                    <input class={styles.sub2} type="submit" value="Отправить" />
                </div> 
              </form>          
        </div>
   </div>
        </>
    )
}

export default Pay