function createTasksController(){

  return class TasksController{
    constructor(){}

    static addTaskToPage(task){
      let ul = $(`ul#list-${task.list_id}`)[0]
      let li = document.createElement("li")
      li.className = "task-list"
      li.setAttribute("data-id", `${task.id}`)
      li.innerText = `${task.description} (${task.priority})`
      ul.append(li)
    }

    create(){
      $("form#add_task").on("submit", function(event){
        event.preventDefault()
        let list_id = parseInt($("select#select_list").val())
        let descr = $("input#task_description").val()
        let priority = $("input#task_priority").val()
        let task = new Task(descr, priority, List.find(list_id))
        event.currentTarget[1].value = ""
        event.currentTarget[2].value = ""
        TasksController.addTaskToPage(task)
      })
    }

    destroy(){
      $("body").on("click", "li.task-list", function(event){
        let taskId = parseInt(this.getAttribute("data-id"))
        let taskItem = Task.find(taskId)
        taskItem.destroy()
        this.remove()
      })
    }

    init(){
      this.create()
      this.destroy()
    }
  }
}

TasksController = createTasksController()
