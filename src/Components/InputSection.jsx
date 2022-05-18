const InputSection = (props) => {

    const createTodoHandler = () => {
        if (props.todoTitle !== "") {
          const newTodo = {
            id: Date.now(),
            title: props.todoTitle,
            isComplete: false,
          }

          fetch("http://localhost:3000/todoList",{
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers: {
              'Content-type': 'application/json' 
            },
          })
          .then(response=> response.json)
          .then(()=>{
            props.fetchTodoList();
            // fetch('http://localhost:3000/todoList')
            // .then(res=> res.json())
            // .then(data=>props.setTodoList(data))
          })

          // props.setTodoList([...props.todoList, newTodo]);
          props.setTodoTitle("");
        } else {
          alert("Please enter valid title");
        }
      }

          const updateTodoHandler = () => {
            let updateableObj={
              ...props.editableTodo,
              title: props.todoTitle
            }
            fetch(`http://localhost:3000/todoList/${props.editableTodo.id}`,{
              headers:{
                'Content-type': 'application/json'
              },
              method: 'PUT',
              body: JSON.stringify(updateableObj)
            })
            .then(()=>{
              props.fetchTodoList();
            //   fetch(`http://localhost:3000/todoList`)
            // .then(response=> response.json())
            // .then(data=>props.setTodoList(data))
            })
            props.setEditMode(false);
            props.setTodoTitle("");
            props.setEditableTodo(null);
          }

    return (
      <div>
          <input
            type="text"
            value={props.todoTitle}
            onChange={(event) => props.setTodoTitle(event.target.value)}
          />
          <button
            onClick={() => {
              props.editMode ? updateTodoHandler() : createTodoHandler();
            }}
          >
            {props.editMode ? "Update Todo" : "Add Todo"}
          </button>
          </div>

    )
}

export default InputSection