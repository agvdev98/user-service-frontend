import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserRequestDTO, UserResponseDTO} from '../../models/user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  register(user: UserRequestDTO): Observable<UserResponseDTO> {
    return this.http.post<UserResponseDTO>(`${this.apiUrl}/register`, user);
  }
}
