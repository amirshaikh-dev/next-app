"use client"
import React from 'react'

const StudentDetails = ({params}) => {
console.log(params);
  return (
    <>
    <div>Student Details</div>

    <h1>User : {params.user}</h1>
    </>

  )
}

export default StudentDetails