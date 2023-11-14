'use client'
import React, { useState } from 'react'
import AddTodo from './AddTodo'

function Navbar() {
    const [showAddTodo, setShowAddTodo] = useState(false)
    return (
        <>
        {showAddTodo&&<AddTodo setShowAddTodo={setShowAddTodo} />}
        <div className="flex justify-between px-5 py-3 bg-base-300">
            <a className="btn btn-ghost text-black text-xl">Todo App</a>
            <button className='btn btn-primary'
            onClick={()=>{
                setShowAddTodo(true)
            }
        }
            >Add Todo</button>
        </div>
        </>
    )
}

export default Navbar