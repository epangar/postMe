import { Person } from './Person';

export class Ticket /*extends Person*/ {
    ticketId: string;
    ticketNumber: number;
    ticketTitle: string;
    ticketDetails: string;
    userId: string;

    open: boolean;
    status: string;
    urgency: number;
    creationDate: Date;
    
}