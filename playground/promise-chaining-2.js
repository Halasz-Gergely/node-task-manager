const mongoose = require('../src/db/mongoose')
const Task = require('../src/models/task')

/* Task.findByIdAndDelete('5f3543eec304122f107d10a6').then((task) => {
    console.log('Result: ' + task)
    return Task.countDocuments({ completed: false })
}).then((r) => {
    console.log(r)
}).catch((e) => {
    console.log('Error: ' + e)
}) */


const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const remainingTaskCount = await Task.countDocuments({ completed: false })
    return remainingTaskCount
}

deleteTaskAndCount('5f34e5fb703e9c1e74eafe1f').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})