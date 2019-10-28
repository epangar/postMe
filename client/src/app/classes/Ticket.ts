import { Person } from './Person';

export class Ticket extends Person {
    constructor(id:string,
        username:string,
        userNumber:string,
        name:string,
        surname:string,
        business:string,
        city:string,
        country:string,
        job:string,
        phoneNumber:string,
        role:string,
        email:string){
        super(id,
            username,
            userNumber,
            name,
            surname,
            business,
            city,
            country,
            job,
            phoneNumber,
            role,
            email); 
            this.id=id;
            this.username=username;
            this.userNumber=userNumber;
            this.name=name;
            this.surname=surname;
            this.business=business;
            this.city=city;
            this.country=country;
            this.job=job;
            this.phoneNumber=phoneNumber;
            this.role=role;
            this.email=email;                
    }
  
  
    // ticketId: string;
    //ticketNumber: number;
    ticketTitle: string;
    ticketDetails: string;
    userId: string = this.username;

    open: boolean;
    currentStatus: string;
    urgency: number;
    //creationDate: Date;
    
    
}


/* import { Animal } from './Animal';

export class Bird extends Animal {
    constructor( hasLegs: boolean=true,
                 numberOfLegs: number=2,
                 hasHair: boolean=false,
                 hasScales: boolean=false,
                 canFly: boolean,
                 livesOn: string,
                ){
                    super(hasLegs, numberOfLegs, hasHair, hasScales, canFly, livesOn);
                    this.numberOfLegs=2;
                    this.hasHair=false;
                    this.hasScales=false;
                }   
}
  */