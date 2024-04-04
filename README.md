# To-Do-List

**Variables:**

dataarray: An array to store tasks. Each task is represented by an object with properties id and text.
inputbox: Represents an input element where users can type new tasks.
listcontainer: Represents the container where tasks are listed.
tasknumbers: Represents an element showing the number of tasks left.

**Functions:**

numberoftasks(): Updates the displayed number of tasks.
addtask(): Adds a new task to the list when the user inputs something in inputbox.
Event listener on listcontainer: Listens for click events on the list container. Handles the click event on the list item or the checkmark icon inside it.
savelisttasks(dataarray): Saves the task list to local storage.
removedata(id): Removes a task from the list by filtering the dataarray.

**Event Listeners:**

An event listener on listcontainer listens for clicks to either mark tasks as completed or remove them.

**Local Storage:**

The code uses local storage to save the tasks. It stores the dataarray in local storage when tasks are added or removed.

**Functionalities:**

Adding tasks: When a user types something in inputbox and presses enter, a new task is added to the list, and its details are stored in dataarray.
Marking tasks as completed: Clicking on a task toggles a "checked" class. If the task is checked, a cross icon is displayed, indicating completion.
Removing tasks: Clicking on the cross icon removes the corresponding task from the list.
