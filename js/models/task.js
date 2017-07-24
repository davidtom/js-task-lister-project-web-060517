// Task Model
function createTask(){

  taskCounter = 0

  return class Task{

    constructor(description, priority, list){
      this.id = taskCounter++
      this.description = description
      this.priority = priority
      this.list_id = list.id
      store.tasks.push(this)
    }

    static get all(){
      return store.tasks
    }

    get list(){
      return store.lists.filter(list => {
        return list.id == this.list_id
      })[0]
    }

    static find(id){
      return store.tasks.filter(function(list){
        return list.id === id
      })[0]
    }

    destroy(){
      let index = store.tasks.indexOf(this)
      return store.tasks.splice(index, 1)
    }

  }

}

Task = createTask()

// Seeds
// t1 = new Task("task one", "high", list1)
// t2 = new Task("task one", "high", list1)
