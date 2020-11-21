module.exports = router=>{

    var usercontroller = require("../controller/controller.user")
    router.post('/user',usercontroller.addUser)
    router.get('/user',usercontroller.getUserByID)
    router.get('/users',usercontroller.getAllUsers)
    router.put('/user',usercontroller.updateUsers)
    router.delete('/user',usercontroller.deleteUser)
    
    

   // GET /api/user/:id - returns specific user from users table given id
 //POST /api/user - adds a new user to the users table
 //PUT /api/user/:id - updates specific user in users table
 //DELETE /api/user/:id - removes the specific user from users table with the given id

    return router
}