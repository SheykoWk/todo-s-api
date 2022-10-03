const uuid = require('uuid')

const todoDB = [
  {
    id: 'b1ffad08-b0e7-4b6a-8b9e-2f42efc168c0',
    title: "Este es un asdkfjbsdljkfb",
    is_completed: false,
  },
  {
    id: '6af2278d-45f5-49bc-8607-8ff2616d3e0b',
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
