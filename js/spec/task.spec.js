describe("Task Model", function() {

  describe("Instance Properties", function() {

    var list, task;
    beforeEach(function() {
      list = new List("Jon's List");
      task = new Task("Walk the dog", "high", list);
    });

    describe("description", function() {

      it("should take a description when the task is created", function() {
        expect(task.description).toBe("Walk the dog");
      });
    });

    describe("priority", function() {

      it("should be assigned a priority when a new Task is created", function() {
        expect(task.priority).toBe("high");
      });
    });

    describe("id", function() {

      it("should be assigned an autoincremented id when a new Task is created", function() {
        expect(task.id).toBe(2); //changed from 0 to 2, because there are 2 tasks created before this!!
      });
    });

    describe("list", function() {

      it("should be assigned to a list when a new Task is created", function() {
        expect(task.list.title).toBe("Jon's List");
      });
    });

  }); //end Instance Properties

}); //end Task model tests
