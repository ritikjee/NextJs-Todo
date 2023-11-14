function AddTodo({setShowAddTodo}) {
    return (
        
        <div className='overflow-y-auto flex items-center justify-center h-screen w-screen overflow-x-hidden fixed top-0 right-0 left-0 z-50  md:inset-0 '>
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow">
                    <div className='sm:flex sm:items-center sm:flex-col px-3 py-10'>
                        <div>
                            <label className="label">
                                <span className="label-text">Enter title</span>
                            </label>
                            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-xs w-full  sm:w-96" ></textarea>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Enter description</span>
                            </label>
                            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-xs w-full sm:w-96" ></textarea>
                        </div>
                        <div className='flex py-10 items-center justify-center gap-5'>
                            <button className='btn btn-error'
                            onClick={()=>{
                                setShowAddTodo(false)
                            }}
                            >Cancel</button>
                            <button className='btn btn-success'>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTodo