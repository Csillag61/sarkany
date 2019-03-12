const Generation = require("./index");
const GenerationTable = require('./table');

class GenerationEngine {
  constructor() {
    this.generation = null;
    this.timer=null;
  }
 start(){
     this.buildNewGeneration();
 }

 stop(){
     clearTimeout(this.timer);

 }
  buildNewGeneration() {
    const generation = new Generation();


    GenerationTable.storeGeneration(generation)
    .then(({ generationId})=>{
      this.generation = generation;
      this.generation.generationId = generationId;
   

   
    // eslint-disable-next-line no-console
    console.log("new generation", this.generation);
    this.timer = setTimeout(
      () => this.buildNewGeneration(),
      this.generation.expiration.getTime() - Date.now()
    );
  })
  // eslint-disable-next-line no-console
  .catch(error => console.error(error));
}
}
module.exports = GenerationEngine;