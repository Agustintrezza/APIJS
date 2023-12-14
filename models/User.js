const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    nombre: { type: String, require: true, min: [2, 'Tu nombre debe contenedr al menos 2 caracteres'] },
    apellido: { type: String, require: true, min: [2, 'Tu apellido debe contenedr al menos 2 caracteres']  },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Formato de correo inválido'
        }
    },
    contraseña: { type: String },
    subscripcionTitle: { type: String },
    typeSuscription: { type: String },
    apiKey: { type: String },
    fechaSubscripcion: { type: Date },
    fechaVencimiento: { type: Date },
    precioSuscripcion: { type: Number },
    invoice: { type: String },
    token: {type: String}
});

module.exports = mongoose.model('userModel', userSchema);