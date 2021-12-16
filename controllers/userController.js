const models =  require('../models');
const userController = {};

userController.create = async (req, res) => {
    try {
        const newUser = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.send({user}); //removed await
    } catch (error) {
        res.status(400).json({error});
    }
}

userController.login = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                email: req.body.email
            }
        });
        if (user.password === req.body.password) {
            res.json({message: "Login successful", user});
        } else {
            res.status(401).json({message: "login failed"});
            res.send({ message: "Invalid username/password"})
        }
    } catch (error) {
        res.status(401).json({error});
        res.send({ message: "Invalid username/password"})
    }
}

module.exports = userController;