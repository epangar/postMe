import { Ticket } from './Ticket'

export class Person{
    
    // tickets: Ticket[];

    constructor(public id: string,
        public username: string,
        public userNumber: string,
        public name: string,
        public surname: string,
        public business: string,
        public city: string,
        public country: string,
        public job: string,
        public phoneNumber: string,
        public role: string,
        public email: string,){
                            
    }
}