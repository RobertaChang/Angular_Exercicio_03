import { Component } from '@angular/core';
/* import {MatSnackBar} from '@angular/material/snack-bar'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app';
  valorInput: number = 0;
  
  /* constructor(
    private snack: MatSnackBar
  ) {} */

  alterarValor(event: any): void {
    this.valorInput = event.target.value
  }

  incrementa(){
    this.valorInput++;
  }

  decrementa(){
    this.valorInput--;
  }

}
