export interface ServerRunnable {
  getInstance(): ServerRunnable
  start(port: number): void,
}
