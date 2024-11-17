const {addNewUser, getAllUsers} = require('../services/user.servie');

const addUserController = (req, res)=>{
    try{
        const {name, lastname, email} = req.body;
        const user = addNewUser(name, lastname, email)
        res.render('home.pug', {user});
    }catch(e){
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
}

const showForm = (req, res) => {
    res.render('form.pug');
    
}


const allUsersController = (req, res)=>{ 
    try{
        const users = getAllUsers();
        res.render('allUsers.pug', {users});
    }catch(e){
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
}



module.exports={
    addUserController,
    showForm,
    allUsersController
}