import mongoose from 'mongoose'


export class DB {
  private MONGODB_URI : string
  constructor() {
    this.MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI!
    if (!this.MONGODB_URI) {
      throw new Error(
        'Error on MONGODB_URI environment variable inside .env'
      )
    }
    
  }

  connect = async () => {
    try {
      if (mongoose.connection.readyState === 1) {
        console.log('Já conectado ao MongoDB. Pulando a conexão.');
        return;
      }

      await mongoose.connect(this.MONGODB_URI);
      console.log('Conexão com o MongoDB estabelecida com sucesso');
    } catch (error) {
      console.error('Erro ao conectar ao MongoDB:', error);
    }
  };

  disconnect = async () => {
    try {
      await mongoose.disconnect();
      console.log('Desconectado')
    } catch (error) {
      console.log(error);
    }
  };

}