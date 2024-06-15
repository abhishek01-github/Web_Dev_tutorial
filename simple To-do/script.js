function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function removeTask(task) {
    const index = workList.indexOf(task.trim().toLowerCase());
    if (index !== -1) {
        const deletedItem = workList.splice(index, 1);
        alert(`${deletedItem} has been deleted from the list`);
    } else {
        alert("Unable to find specified item, deletion failed");
    }
}

let workList = [];

while (true) {
    let action = prompt("Enter what you want to do: \n\n 1) New : To add new tasks \n 2) Remove : to remove a specific task number or name \n 3) List : To list down your tasks \n 4) Quit : To exit the app").trim().toLowerCase();

    if (action === null) {
        alert("Operation canceled by the user");
        continue;
    }

    if (action === "new") {
        let taskToAdd = prompt("Write down the task you want to add");

        if (taskToAdd === null) {
            alert("Operation canceled by the user");
            continue;
        }

        if (taskToAdd.trim() === "") {
            alert("Please provide a valid task");
            continue;
        }

        workList.push(taskToAdd.trim().toLowerCase());
    } else if (action === "remove") {
        let taskToRemove = prompt("Which number or what task to remove");

        if (taskToRemove === null) {
            alert("Operation canceled by the user");
            continue;
        }

        if (taskToRemove.trim() === "") {
            alert("Please provide a valid task or task number");
            continue;
        }

        if (isNaN(parseInt(taskToRemove))) {
            let index = workList.indexOf(taskToRemove.trim().toLowerCase());

            if (index !== -1) {
                const confirmation = confirm(`Are you sure you want to delete "${workList[index]}"?`);
                if (confirmation) {
                    removeTask(taskToRemove);
                } else {
                    alert("Deletion canceled by the user");
                }
            } else {
                alert("Unable to find specified item, deletion failed");
            }
        } else {
            let index = parseInt(taskToRemove);

            if (index > -1 && index < workList.length) {
                const confirmation = confirm(`Are you sure you want to delete "${workList[index]}"?`);
                if (confirmation) {
                    const deletedItem = workList.splice(index, 1);
                    alert(`${deletedItem} has been deleted from the list`);
                } else {
                    alert("Deletion canceled by the user");
                }
            } else {
                alert("Wrong index chosen, deletion failed");
            }
        }
    } else if (action === 'list') {
        let itemList = "Your today's pending tasks are:\n\n";
        for (let i = 0; i < workList.length; i++) {
            itemList += `${i}) ${capitalizeFirstLetter(workList[i])}\n`;
        }
        alert(itemList);
    } else if (action === 'quit') {
        alert("Thank you for using this app!!");
        break;
    } else {
        alert("Wrong action chosen");
    }
}
 