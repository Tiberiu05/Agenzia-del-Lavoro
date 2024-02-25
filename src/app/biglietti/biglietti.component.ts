import { Component } from '@angular/core';


@Component({
  selector: 'app-biglietti',
  templateUrl: './biglietti.component.html',
  styleUrls: ['./biglietti.component.css']
})



export class BigliettiComponent
{
parseInt(_t23: string) {
throw new Error('Method not implemented.');
}
  coda: string[] = [];
  operatore1: string[] = [];
  operatore2: string[] = [];
  operatore3: string[] = [];

  ultimoTicket=0;
  ultimoTicketFormattato='';
  elementiMaxOperatore=5;

// ==================================================

  staccaTicket()
  {
    if(this.ultimoTicket < 100)
      this.ultimoTicket++;
    else
      this.ultimoTicket = 1;

    this.generaTicketFormattato();
    this.aggiungiTicketCoda();
    console.log(this.coda);
  }

  private generaTicketFormattato()
  {
    let res= this.ultimoTicket.toString();
    if(this.ultimoTicket<10){
      res='00'+res
    }else if(this.ultimoTicket<100){
      res='0'+res;
    }
    this.ultimoTicketFormattato=res;
  }

  private aggiungiTicketCoda()
  {
    this.coda.push(this.ultimoTicketFormattato);
  }

// ==================================================
isNumeric(value: any): boolean {
  return !isNaN(value - parseFloat(value));
}

  gestisciCoda(operatore : string)
  {
    const primoElementoCoda=this.coda.shift();

    switch(operatore)
    {
      case "operatore1" :
      if(primoElementoCoda!==undefined)
      {
        this.operatore1.unshift(primoElementoCoda);
      }

      if(this.operatore1.length>= this.elementiMaxOperatore)
      {
        this.operatore1.splice(this.elementiMaxOperatore)
      }
      break;

      case "operatore2" :
      if(primoElementoCoda!==undefined)
      {
        this.operatore2.unshift(primoElementoCoda);
      }

      if(this.operatore2.length>= this.elementiMaxOperatore)
      {
        this.operatore2.splice(this.elementiMaxOperatore)
      }
      break;

      case "operatore3" :
      if(primoElementoCoda!==undefined)
      {
        this.operatore3.unshift(primoElementoCoda);
      }

      if(this.operatore3.length>= this.elementiMaxOperatore)
      {
        this.operatore3.splice(this.elementiMaxOperatore)
      }
      break;
    }
  }
}
