import { Ticket } from '../classes/Ticket';

export let ListOfTickets: Ticket[] = [
    {
        ticketId: "badbad333",
        ticketNumber: 1,
        ticketTitle: "Prueba",
        ticketDetails: "Probando",
        userId: "ABCDEF1234",
        open: false,
        status: "Closed",
        urgency: 0, 
        creationDate: new Date(),
    },
    {
        ticketId: "ccc345dac",
        ticketNumber: 2,
        ticketTitle: "Error texto",
        ticketDetails: "El texto aparece mal",
        userId: "DDDDDF6543",
        open: true,
        status: "Open",
        urgency: 2,
        creationDate: new Date()
    },
    {
        ticketId: "BacCbadFe",
        ticketNumber: 3,
        ticketTitle: "Teléfono roto",
        ticketDetails: "Recambio",
        userId: "ABCDEF1234",
        open: true,
        status: "Open",
        urgency: 3,
        creationDate: new Date(),
    }
]