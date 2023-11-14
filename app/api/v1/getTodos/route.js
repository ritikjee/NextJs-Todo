import todo from "@/app/Models/todo";

export async function GET(){
    const todos = await todo.find();
    return Response.json({todos});
}