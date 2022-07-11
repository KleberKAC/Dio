import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Kleber',
        lastName: 'Coelho',
        age: 39
      },
      {
        firstName: 'Vitor',
        lastName: 'Kenji',
        age: 5
      },
      {
        firstName: 'Barbara',
        lastName: 'Akemi',
        age: 16
      },
      {
        firstName: 'Renata',
        lastName: 'Queiroga',
        age: 40
      },
    ]
    return of(peopleArray)
  }
}
