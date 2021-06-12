const list = [];
let isDeleted = false;

let input = prompt('enter your command')
while (true) {
    if (input == 'new') {
        let toPush = prompt('enter a task that you want to add')
        list.push(toPush)
        console.log(`${toPush} was added successfully`)
    } else if (input == 'list') {
        console.log('*'.repeat(20))
        for (let i = 0; i < list.length; i++) {
            console.log(`${i + 1} ${list[i]}`)
        }
        console.log('*'.repeat(20))
    } else if (input == 'delete') {
        let toDelete = prompt('enter a task that you want to delete')
        for (let i = 0; i < list.length; i++) {
            if (list[i] == toDelete) {
                list.splice(i, 1)
                isDeleted = true;
            }
        }
        if (isDeleted) {
            console.log(`${toDelete} successfully deleted`)
        } else {
            console.log("failed to delete")
        }
    } else if (input == 'quit' || input == 'q') {
        break;
    } else {
        console.log('please provide valid command')
    }
    input = prompt('enter your command')
}

console.log('close the app bye!')