import React from 'react'

async function productlist() {
    let res = await fetch('https://dummyjson.com/products')
    return await res.json(); 
}

const page = async () => {
  const data = await productlist()
  console.log("Data",data);

  return (
    <>
    <h2>API call in server component</h2>
    {
        data. products.map((item:any)=>(
            <p key={item.id}>{item.title}</p>
        ))
    }
    </>
  )
}

export default page