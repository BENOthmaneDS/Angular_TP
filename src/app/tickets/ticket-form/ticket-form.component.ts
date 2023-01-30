import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import {Student} from '../../../models/student';
import {STUDENTS_MOCKED} from '../../../mocks/students.mock';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public ticketForm: FormGroup;
  public studentID: number;
  public studentsList: Student[] = STUDENTS_MOCKED;


  constructor(public formBuilder: FormBuilder, public ticketService: TicketService) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      major: [''],
      student : ['']
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    // tslint:disable-next-line:triple-equals
    ticketToCreate.student = STUDENTS_MOCKED.find((s) => s.id == this.ticketForm.getRawValue()['student']);
    /*ticketToCreate.major = 'myMajor';*/
    /*ticketToCreate.archived = false;   888888   */
    this.ticketService.addTicket(ticketToCreate);
  }

}
