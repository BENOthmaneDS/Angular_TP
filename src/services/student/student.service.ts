import { Injectable } from '@angular/core';
import { Student } from '../../models/student';
import { STUDENTS_MOCKED } from '../../mocks/students.mock';
import { BehaviorSubject } from 'rxjs/index';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList: Student[];
  constructor (private httpClient: HttpClient) {
    this.studentList = [];
  }

  /*private studentsList: Student[] = STUDENTS_MOCKED;*/
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>(this.studentList);
  getStudent() {
     this.httpClient.get('https://api.myjson.com/bins/ck44c').subscribe((result: any) => {
      this.studentList = result;
    });
  }
}
