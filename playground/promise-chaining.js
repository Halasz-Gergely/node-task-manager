require('../src/db/mongoose')

const User = require('../src/models/user')

//5f356b90f8de391a807700aa

/* User.findByIdAndUpdate('5f356b90f8de391a807700aa', { age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
}) */


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5f356b90f8de391a807700aa', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})