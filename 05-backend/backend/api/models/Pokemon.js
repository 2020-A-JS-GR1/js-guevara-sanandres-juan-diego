/**
 * Pokemon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre : {
      type: 'string',
      required: true,
    },
    //Relación
    // Pokemon <- Usuario
    usuario:{ // nombre de la FK
      model : 'Usuario', //Modelo con el que se relaciona
      required: true, //Requerida 1 - N
              //false //Opcional 0 - N (por defecto)
    },

    batallas: {
      collection: 'Batalla',
      via: 'pokemon'
    }
  },

};

