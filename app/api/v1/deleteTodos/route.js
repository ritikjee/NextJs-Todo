import todo from "@/app/Models/todo";

export async function DELETE(req, res) {
    const response = await req.json();
    try {
        const todos = await todo.findByIdAndDelete(response.id);
        return Response.json({
        message: "success deleting todos"
        });
    } catch (error) {
        console.log(error.message);
        return Response.json({
        error: "error deleting todos"
        });
    }
    }