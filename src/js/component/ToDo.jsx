import React, {useState, useEffect} from "react";

const ToDo = () => {
    const [todos, settodos] = useState([])
    const [formvalue, setformvalue] = useState({})
    useEffect(() => {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/supreme1").then(res =>{
            return res.json()
        }).then(data =>{
            console.log(data)
            settodos(data)
        })
    },[])
    useEffect(() => {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/supreme1",{
            method: "PUT",
            body: JSON.stringify(todos),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res => {
            return res.json()
        }).then(data =>{
            console.log(data)
        })
        fetch("https://assets.breatheco.de/apis/fake/todos/user/supreme1").then(res =>{
            return res.json()
        }).then(data =>{
            console.log(data)
        })
    },[todos])
    const inputChange = (x) => {
        setformvalue({label:x.target.value,done:false})
    }
    const addtodo = () => {
        settodos([...todos,formvalue])
    }
    const completetodo = (item) => {
        settodos(todos.filter(x => item !== x))
    }
    return (
        <div>
            <div>
                <input onChange={inputChange} type="text" />
                <button onClick={addtodo}>Add ToDo</button>
            </div>
            <h2>ToDos</h2>
            {todos.length?todos.map(item =>{
                return(<div>
                <h6>{item.label}</h6>
                <button onClick={() =>{completetodo(item)}}>Complete</button>
                </div>)
                
            }):null}
        </div>
    )
}

export default ToDo;