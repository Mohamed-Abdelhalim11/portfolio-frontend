import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { DataService } from '../data.service'; // Import the DataService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string = '';
  titleHome: string = '';
  cvLink: string = '';

  constructor(private dataService: DataService) {} // Inject the DataService

  ngOnInit(): void {
    this.dataService.getUserData().subscribe(
      (data: any) => {

        if (Array.isArray(data) && data.length > 0) {
          const userData = data[0]; 
          this.name = userData.name;
          this.titleHome = userData.titleHome;
          this.cvLink = userData.cvLink;

          const options = {
            strings: [this.titleHome], 
            typeSpeed: 120,
            loop: false, 
          };

          new Typed('.typed', options);
        } else {
          console.error('Unexpected data format or empty response');
        }
      },
      (error: any) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
}
