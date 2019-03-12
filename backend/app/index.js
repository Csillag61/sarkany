/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation')
const app = express();
const engine = new GenerationEngine();
//const port = 8888;

app.locals.engine=engine;

app.use(cors({origin: 'http://localhost:1234' }));
app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        type: 'error', message: err.message
    })
});


engine.start();


////app.listen(port, ()=> console.log(`listening on ${port}`));

module.exports = app;
// setTimeout(() => {
//     engine.stop();
// }, 20000);



/* eslint-disable no-console */
// const Generation = require('./generation');

// const generation = new Generation();

// // eslint-disable-next-line no-console
// console.log('generation', generation);

// const gooby = generation.newDragon();


// console.log('gooby', gooby);




// const Dragon = require('./dragon.js');

// const fooey = new Dragon({
//     birthdate: new Date(),
//     nickname:"fooey"
// });

// const baloo = new Dragon({
//     nickname: "baloo",
//     birthdate: new Date(),
//     traits: [{traitType: 'backgroundColor', traitValue:'green'}]
// });
// const mimar = new Dragon();

// setTimeout(()=>{
//     const gooby = new Dragon();
//     console.log('gooby', gooby);

// }, 3000);


// console.log("fooey", fooey);
// console.log("baloo", baloo);
// console.log("mimar", mimar);
