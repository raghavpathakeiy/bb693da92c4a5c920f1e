
var User =require('../models/user')
// router.get('/users',usercontroller.getUsers);
//  router.get('/user',usercontroller.getUserById);
//  router.post('/user',usercontroller.addUser);
//  router.post('/user',usercontroller.updateUser);
//  router.delete('/user',usercontroller.deleteUser);

 //Add User
exports.addUser = (req,res)=>{

try{

    //Create User
    User.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email
        
    },(err,results)=>{
        if(err)
        {
            res.send(err)
        }
        else

        {
            res.send({
                "Message ":"Created Succsss",
                results
            })
        }
    })
}
catch(err){
    console.log(err)
    res.status(500).json({"messaage":"dberror"});

}
}
exports.getUserByID = (req,res)=>{

    try{
    
        //Create User
        User.findOne({
            _id:req.query.id
    
        },(err,results)=>{
            if(err)
            {
                res.send(err)
            }
            else
    
            {
                res.send({
                    "Message ":"User  Found Succsss",
                    results
                })
            }
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({"messaage":"dberror"});
    
    }
    }

    //getAllUsers
    exports.getAllUsers = (req,res)=>{

        try{
        
            //Create User
            User.find({

            },(err,results)=>{
                if(err)
                {
                    res.send(err)
                }
                else
                console.log('fnks',results)
        
                {
                    res.send({
                        "Message ":"ALL USERS Succsss",
                        results
                    })
                }
            })
        }
        catch(err){
            console.log(err)
            res.status(500).json({"messaage":"dberror"});
        
        }
        }

        //updateUsers
       
    exports.updateUsers = (req,res)=>{

        try{

            var data = req.body;
            console.log("checda",data)
        
            //Create User
            User.findOneAndUpdate({
                _id:req.query.id
            },{
                $set:
                    data
                
            },{new:true},(err,results)=>{
                if(err)
                {
                    res.send(err)
                }
                else
                console.log('fnks',results)
        
                {
                    res.send({
                        "Message ":"UPDATE USER Succsss",
                        results
                    })
                }
            })
        }
        catch(err){
            console.log(err)
            res.status(500).json({"messaage":"dberror"});
        
        }
        }

        //deleteUser

            
    exports.deleteUser= (req,res)=>{

        try{

           
        
            //Create User
            User.remove({
                _id:req.query.id
            },(err,results)=>{
                if(err)
                {
                    res.send(err)
                }
                else
                console.log('fnks',results)
        
                {
                    res.send({
                        "Message ":" USER  Delete Succsss",
                        results
                    })
                }
            })
        }
        catch(err){
            console.log(err)
            res.status(500).json({"messaage":"dberror"});
        
        }
        }
