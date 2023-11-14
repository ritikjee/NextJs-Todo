
function Card({ title, description, completed,id }) {
    return (
        <div className={`card mx-4 lg:w-96 my-5 ${completed?'bg-green-200':'bg-yellow-200'}`}>
            <div className="card-body text-black">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-error">Delete</button>
                    {completed ?
                        <button className="btn btn-warning">Undone</button> :
                        <button className="btn btn-success">Completed</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card