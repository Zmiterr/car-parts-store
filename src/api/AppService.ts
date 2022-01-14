export abstract class AppService {
  server = '';

  port = '';

  constructor(server = '', port = '') {
    this.server = server;
    this.port = port;
  }
}
