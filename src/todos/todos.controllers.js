const uuid = require('uuid')

const todoDB = [
  {
    id: 1,
    title: "Este es un asdkfjbsdljkfb",
    is_completed: false,
  },
  {
    id: 2,
    title: "Este es otro titulo",
    is_completed: false,
  },
];

const getAllTodos = () => {
    return todoDB
}

const getTodoById = (id) => {

    //! for(let i = 0; i < todoDB.length; i++){
    //!     if(todoDB[i].id === id){
    //!         return todoDB[i]
    //!     }
    //! }

    const data = todoDB.find(task => task.id === id)
    return data
}

const createTodo = (title) => {
    const newTodo = {
        id: uuid.v4(),
        title,
        is_completed: false
    }
    todoDB.push(newTodo)
    return newTodo
}



//? Regular export
module.exports = {
    getAllTodos,
    getTodoById,
    createTodo
}
