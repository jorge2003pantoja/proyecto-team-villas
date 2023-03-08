import { Component, OnInit } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:any[] = [
    {
      icon:"earth-outline",
      name:"ACTION SHEET PAGE",
      redirectTo:"/action",
    },
    {
      icon:"notifications-outline",
      name:"ALERT PAGE",
      redirectTo:"/alert",
    },
    {
      icon:"beer-outline",
      name:"ACCORDION PAGE",
      redirectTo:"/accordion",
    },
    {
      icon:"body-outline",
      name:"BADGE PAGE",
      redirectTo:"/badge",
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
