import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import {tick} from '@angular/core/testing';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public ticketList: Ticket[] = [];
  public archivedTicket = true;

  constructor(public ticketService: TicketService) {
    this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);
  }

  ngOnInit() {
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }

  archiveTicket(ticket: Ticket) {
    this.ticketService.archiveTicket(ticket);
  }

  deleteTicket(ticket: Ticket) {
    this.ticketService.deleteTicket(ticket);
  }

  hideArchivedTicket() {
    this.archivedTicket = false;
    console.log('Archiving Status' + this.archivedTicket);
  }

  showArchivedTicket() {
    this.archivedTicket = true;
    console.log('Archiving Status' + this.archivedTicket);
  }
}
