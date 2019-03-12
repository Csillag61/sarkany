const {Router} =require('express');
const DragonTable = require('../dragon/table');


const router = new Router();


router.get('/new', (req, res, next)=>{
    const dragon = req.app.locals.engine.generation.newDragon();

    DragonTable.storeDragon(dragon)
        .then(({dragonId}) => {
            // eslint-disable-next-line no-console
            console.log('dragonId', dragonId);

            dragon.dragonId = dragonId;

            res.json({dragon});
        })
        // eslint-disable-next-line no-console
        .catch(error => next(error));
});


module.exports = router;