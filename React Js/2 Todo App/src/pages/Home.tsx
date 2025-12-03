import { useState } from "react"
import InputBox from "../components/InputBox"

const Home = () => {
    const [todos, setTodos] = useState<string[]>([])

  return (
    <div className="home">
        <InputBox setTodos ={setTodos}/>

        <div className="todos">
            {todos.map((todo)=>{
                return(
                    <div>
                        <ul>
                            <li>{todo}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Home
