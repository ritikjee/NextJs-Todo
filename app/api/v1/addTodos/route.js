import todo from "@/app/Models/todo";
export async function POST(req,res){
    const response= await req.json() 
    try {
        let todos = new todo({
            title:response.title,
            description:response.description,
        }) 

        todos.save()
        return Response.json({message:"Success adding todos"})
    } catch (error) {
        console.log(error.message)
        return Response.json({error:"error adding todos"})
        
    }
}