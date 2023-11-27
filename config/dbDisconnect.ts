import mongoose from 'mongoose'

const dbDisconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log('Desconectado')
  } catch (error) {
    console.log(error);
  }
};

export default dbDisconnect;
