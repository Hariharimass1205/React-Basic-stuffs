import React, { useEffect, useState } from 'react'

function List({getItem}) {
    const [items,setItems] = useState([])

useEffect(()=>{
        setItems(getItem());
        console.log("setting items");
    },[getItem])


  return (
    <>
    <div>
        {items.map((item,index)=>{
            return <p key={index}>{item} </p>
        })}
    </div>
    </>
  );
};


export default List
