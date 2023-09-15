import Link from 'next/link'
import React from 'react'

const UserList = () => {
  return (<>
    <div>UserList</div>
    <ul>
      <li><Link href='/userList/amir'>Amir</Link></li>
      <li><Link href='/userList/saurabh'>Saurabh</Link></li>
    </ul>
  </>
    
  )
}

export default UserList 