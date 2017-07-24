// List Model
function createList(){

  listCounter = 0

  return class List{

    constructor(title){
      this.id = listCounter++
      this.title = title
      store.lists.push(this)
    }

    static get all(){
      return store.lists
    }

    get tasks(){
      return store.tasks.filter(task => {
        return task.list_id === this.id
      })
    }

    static find(id){
      return store.lists.filter(function(list){
        return list.id === id
      })[0]
    }

    destroy(){
      this.tasks.forEach(task => {
        task.destroy()
      })
      let index = store.lists.indexOf(this)
      return store.lists.splice(index, 1)
    }

  }

}

List = createList()

// Seeds
// list1 = new List("list one")
// list2 = new List("list two")
// list3 = new List("list three")
