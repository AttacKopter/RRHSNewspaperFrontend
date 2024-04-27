import express, { Express } from "express";

class ServerRunnable implements ServerRunnable{

  private serverPort: number = 8080; 
  private expressServer: Express = express();
  private static SINGLETON_INSTANCE: ServerRunnable | null = null;
  private constructor(){}

  public static getInstance(): ServerRunnable {
    if(this.SINGLETON_INSTANCE === null){
      this.SINGLETON_INSTANCE = new ServerRunnable();
    }
    return this.SINGLETON_INSTANCE;
  }

  public startServer(portOverride=8080): void{
    this.serverPort = portOverride;
    this.expressServer.listen(this.serverPort, function(){
      console.log(`Server is running on port: ${portOverride}`);
    });
  }
}

ServerRunnable.getInstance().startServer();
