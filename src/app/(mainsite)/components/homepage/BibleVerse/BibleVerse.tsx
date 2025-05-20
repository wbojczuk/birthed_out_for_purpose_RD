import styles from './bibleverse.module.css';

export default function BibleVerse(){
return (
 <header className={styles.bibleVerse}>
    
    <p>“Before I formed thee in the belly I knew thee; and before thou camest forth out of the womb I sanctified thee, and I ordained thee a prophet unto the nations.” <strong>- Jeremiah 1:5</strong></p>

    <img src='/img/bible-verse.webp' alt='Image of Bible' className='bg-img' />
    <div style={{backgroundColor: "rgba(64,18,72,.5)"}} className='shader'></div>
 </header>
)};