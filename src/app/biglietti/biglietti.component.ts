import { Component } from '@angular/core';


@Component({
  selector: 'app-biglietti',
  templateUrl: './biglietti.component.html',
  styleUrls: ['./biglietti.component.css']
})

export class BigliettiComponent
{
/* Definisco l'array di tipo String*/
tabellone:String[]=[];
coda:String[]=[];

ultimoTicket=90;
ultimoTicketFormattato='';
elementiMaxTabellone=5;

staccaTicket(){
  if(this.ultimoTicket < 100)
    this.ultimoTicket++;
  else
    this.ultimoTicket = 1;
this.generaTiketFormattato();
this.aggiungiTicketCoda();
console.log(this.coda);
}

private generaTiketFormattato(){
  let res= this.ultimoTicket.toString();
  if(this.ultimoTicket<10){
    res='00'+res
  }else if(this.ultimoTicket<100){
    res='0'+res;
  }
  this.ultimoTicketFormattato=res;
}

private aggiungiTicketCoda(){
 this.coda.push(this.ultimoTicketFormattato);
    
  }

gestisciCoda(){
  const primoElementoCoda=this.coda.shift();

  if(primoElementoCoda!==undefined){
    this.tabellone.unshift(primoElementoCoda);
  
  }

  if(this.tabellone.length >= this.elementiMaxTabellone){
    this.tabellone.splice(this.elementiMaxTabellone)
  }
}  


}
