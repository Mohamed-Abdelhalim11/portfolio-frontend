import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutText: string = '';

  constructor(private dataService: DataService) {} 

  ngOnInit(): void {
    this.fetchAboutData();
  }

  fetchAboutData(): void {
    this.dataService.getUserData()
      .subscribe({
        next: data => {
          if (Array.isArray(data) && data.length > 0) {
            const userData = data[0];
            this.aboutText = userData.aboutMe;
          } else {
            console.error('Unexpected data format or empty response');
          }
        },
        error: error => {
          console.error('Error fetching about data', error);
        }
      });
  }
}
