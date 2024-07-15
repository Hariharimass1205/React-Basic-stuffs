import React,{useState} from "react"

function OrderPage(){

    const [name , setName] = useState("") 
    const [age , setAge ] = useState(0)
    const [payment,setPayment] = useState("")

    return(
        <>
        <input
        type="text"
        value = {name}
        onChange={(event)=>{setName(event.target.value)}}
        ></input>
        <h1>Name : {name} </h1>

        <input 
        type="number"
        value = {age}
        onChange = {(e)=>{setAge(e.target.value)}}
        >
        </input>
        <h1>Age : {age} </h1>

        <select  value={payment} onChange={(e)=>{setPayment(e.target.value)}}>
            <option value="">Select ur Option</option>
            <option value="visa">visa</option>
            <option value="wallet">wallet</option>
            <option value="COD">COD</option>
            <option value="Gpay">Gpay</option>
        </select>
        <h2>payment : {payment}</h2>
        </>
    )
}

export default OrderPage