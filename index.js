/* Todo and Stretch

*/
console.log('My code is running');
document.getElementById("submitButton").addEventListener("click", addTask);

function addTask() {
    let task =
        document.getElementById("taskEntry").value;

    let newTask =
      document.createElement("li");

    newTask.innerHTML =
    `
    <span>
        ${task}
        <button>🗙</button>
    </span>
    `
    document.getElementById("taskList").appendChild(newTask);

    // console.log("Task added " + task);
    //set innerhtml to task template, with taskname as stringliteral ${}

    /*
    <span>
        INPUTVALUEHERE
        <button></button><!--change to trashcan Unicode--> 🗑  🗙
    </span>
      */

    //Can we assign listeners before appending?
    //Append task to task container UL
    document.getElementById("taskEntry").value = "";
}

function markCompleted() {
    //Get calling element
    //Set class to "completed task" so CSS can take over, CSS should strike it/fade/etc
    //Remove listener
}

function removeTask() {
    //Get calling element (deletebutton)
    //Find parent LI (may need to go up multiple levels)
    //Delete parent LI from DOM
}
