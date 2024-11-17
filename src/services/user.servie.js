const {save, findAll, User} = require('../models/user.model');

const addNewUser = (name, lastname, email)=>{
    const newUser = new User(name, lastname, email);
    return save(newUser);
}

const getAllUsers = ()=>{
    return findAll();
}


module.exports = {
    addNewUser,
    getAllUsers,
}