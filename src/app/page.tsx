import Link from 'next/link'
import styles from './page.module.css'
  
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>All About Next.js</h1>
      <Link className='link' href='/login'>Go to Login</Link><br />
      <Link className='link' href='/routing'>Go to About</Link><br />
      <Link className='link' href='/api-call-server-component'>Api call server component</Link><br />
      <Link className='link' href='/react-hook-form'>React Hook Form</Link>

      <br/>
      {/* <User name="Amir Shaikh" /> 
      <User name="Amir Shaikh" />  */}
{User()}
<br/>
<User />
    </main>
  )
}
const User = () =>{
  return <>Inner component</>
}
