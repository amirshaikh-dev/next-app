'use client'
import React from 'react'

const UserDetails = ({params}) => {
    console.log('params',params);
  return (
    <>
    <div>User Details</div>
    <h4>Segement 1 : {params.user[0]}</h4>
    <h4>Segement 2 : {params.user[1]}</h4>
    </>

  )
}

export default UserDetails