const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    }
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
  
    try {
      // const salt = await bcrypt.genSalt(10);
      user.password = user.password;
      next();
    } catch (error) {
      return next(error);
    }
  });


  
// userSchema.methods.comparePassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };


userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    // const salt = await bcrypt.genSalt();
    // const pas = await bcrypt.hash(candidatePassword, salt);
    // console.log(pas);
    // console.log(this.password);
    // return await bcrypt.compare(this.password,candidatePassword);
    return this.password === candidatePassword
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model('users', userSchema);

module.exports = User;