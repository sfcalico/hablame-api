const models =  require('../models');
const collocationController = {};

collocationController.fetch = async (req, res) => {
    try {
        const collocations = await models.collocation.findAll({
            where: {
                userId: req.params.userId
            }
        });
        res.send({ collocations }) // in get functions, we're res.send'ing the await variable
    } catch (error) {
        res.status().json({error})
    }
}

module.exports = collocationController;