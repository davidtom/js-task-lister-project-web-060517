function createListsController(){

  return class ListsController{
    constructor(){}

    static createElements(){
      // create elements that will be used to put a list on the page
      let elements = {
        div : document.createElement("div"),
        h2 : document.createElement("h2"),
        button : document.createElement("button"),
        ul : document.createElement("ul")
        }
      elements.div.className = "list"
      elements.button.className = "destroy-list"
      elements.button.innerText = "x"
      return elements
    }

    static addListToPage(list){
      // set up the div necessary to add a new list to the page
      let div = this.createElements().div
      let h2 = this.createElements().h2
      h2.innerText = list.title
      let button = this.createElements().button
      let ul = this.createElements().ul
      ul.id = `list-${list.id}`
      ul.setAttribute("data-id", `${list.id}`)
      button.setAttribute("data-id", `${list.id}`)
      h2.append(button)
      div.append(h2)
      div.append(ul)
      $("section#lists").append(div)
    }

    static UpdateSelection(){
      $("select#select_list").empty()
      List.all.forEach(function(list){
        let option = document.createElement("option")
        option.value = `${list.id}`
        option.innerText = `${list.title}`
        $("select#select_list").append(option)
      })
    }

    create(){
      // add event listener to new list add button - prevent refresh and add new list to page
      $("form#add_list").on("submit", function(event){
        event.preventDefault()
        let listTitle = event.currentTarget[0].value
        let list = new List(listTitle)
        event.currentTarget[0].value = ""
        ListsController.addListToPage(list)
        ListsController.UpdateSelection()
      })
    }

    destroy(){
      $("body").on("click", "button.destroy-list", function(event){
        let listId = parseInt(this.getAttribute("data-id"))
        let listItem = List.find(listId)
        listItem.destroy()
        this.parentElement.parentElement.remove()
        ListsController.UpdateSelection()
      })
    }

    init(){
      this.create()
      this.destroy()
    }

  }
}

ListsController = createListsController()
