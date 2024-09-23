import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configUrl = 'assets/config/firebase-config.json'; // Path to your JSON file

  constructor(private http: HttpClient) {}

  getConfig(): Observable<any> {
    return this.http.get<any>(this.configUrl).pipe(
      tap((config) => {
        console.log('Firebase config loaded:', config);
        // set the Firebase config in environment for use
        environment.firebaseConfig = config;
      })
    );
  }
}