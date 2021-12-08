export class LogService {
  count = 0;
  logStatus(status: string) {
    this.count++;
    console.log('Current Status ' + this.count + ': ' + status);
  }
}
