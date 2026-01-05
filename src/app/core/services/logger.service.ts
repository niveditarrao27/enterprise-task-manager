import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message: any) {
    console.log('[APP LOG]', message);
  }

  error(error: any) {
    console.error('[APP ERROR]', error);
  }
}
