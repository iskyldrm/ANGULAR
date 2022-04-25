import { Component } from '@angular/core'; // burası c# ta ki using ile eşdeğerdir

// Bir typescript classının component olduğunu  bilditiyor

@Component({
  selector: 'app-root', // componentin ismi. yani index.html dosyasi içinde çağrılar app-root
  templateUrl: './app.component.html', //bu komponente ait hmt doyası
  styleUrls: ['./app.component.css'] // css dosyasi
})
export class AppComponent { // buradki export c# da public gibidir angular içerisndeki herşey bir TS clasıdır

  title = 'intro';
  AdSoyad:string = "ali veli"
  Yas:number = 28;
}
