import { User } from './User';

export class Ticket extends User{
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