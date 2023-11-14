import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
async function getData(){
  const res= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/getTodos`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const todos = await getData()
  return (
    <div>
      <Navbar />
      <main className="min-h-screen mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {
        todos.todos.map((todo) => (
          <Card title={todo.title} description={todo.description} id={todo._id} key={todo._id} completed={todo.completed} />
        ))
      }
      </div>
      </main>
      <Footer />
    </div>
  )
}
