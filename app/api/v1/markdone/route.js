import todo from '@/app/Models/todo'

export async function PUT(req,res){
    const response = await req.json()
    try {
        const todos = await todo.findByIdAndUpdate(response.id,{completed:true})
        return Response.json({message:"Horray! you have completed your todos"})
    } catch (error) {
        console.log(error.message)
        return Response.json({error:"Error updating todos"})
    }
}