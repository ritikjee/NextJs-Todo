function Navbar() {
    return (
        <div className="flex justify-between px-5 py-3 bg-base-300">
            <a className="btn btn-ghost text-black text-xl">Todo App</a>
            <button className='btn btn-primary'>Add Todo</button>
        </div>
    )
}

export default Navbar