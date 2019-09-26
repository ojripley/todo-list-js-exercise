// Arrays to keep track of each task's state
const tasks = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    // properties
    title: title,
    description: description,
    complete: false,

    // methods
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW

tasks.push(newTask("Clean Cat Litter", 'wash it gud')); // task 0
tasks.push(newTask("Do Laundry", 'dont forget to fold')); // task 1

tasks[0].logState(); // Clean Cat Litter has not been completed
tasks[0].markCompleted();
tasks[0].logState(); // Clean Cat Litter has been completed
