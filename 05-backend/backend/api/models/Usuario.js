/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', //nombre conexión
  tableName: 'epn_user', //nombre tabla
  attributes: {
    cedula:{
      type: 'string',
      required: true,
      columnName: 'epn_cedula',
      unique: true,
      minLength: 10,
      maxLength: 25,
    },
    nombre:{
      type: 'string',
      minLength: 3,
      required: true
    },
    correo:{
      type:'string',
      isEmail: true
    },
    estado_Civil:{
      type:'string',
      isIn: ['Soltero', 'Casado','Divorciado','Viudo','Unión Libre'],
      defaultsTo: 'Soltero'
    }
  },

};

