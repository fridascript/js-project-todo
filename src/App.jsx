import { TodoList } from "./components/TodoList.jsx";
import { DoneTasks } from "./components/DoneTasks.jsx";
import { TodoPageWrapper } from "./components/Pagewrapper.jsx";




export const App = () => {
  return (
    <main>
      <section>
        <TodoPageWrapper />
      </section>
    </main>
  )
}
