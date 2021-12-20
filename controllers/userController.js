const models =  require('../models');
const userController = {};

userController.create = async (req, res) => {
    try {
        const newUser = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        console.log(req.body)
        res.json({ newUser }); //removed await
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
        console.log(req.body);
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


userController.save = async (req, res) => {
    try {
        const newCollocation = await models.collocation.create({
            word: req.body.word,
            phrase: req.body.phrase,
            example: req.body.example,
            userId: req.body.userId 
        });
        console.log(req.body);
        res.json({ collocation }) // for a post
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

userController.delete = async (req, res) => {
    try {     
        const deleteCollocation = await models.collocation.destroy({
            where: {
                id: req.params.collocationId
                }
            })
            res.json({ deleteCollocation })
        } catch (error) {
        console.log(error, error.message)
    }
}


module.exports = userController;