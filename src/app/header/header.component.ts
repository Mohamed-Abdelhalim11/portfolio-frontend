import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      document.querySelectorAll('.js-scroll-trigger').forEach(element =>
        element.addEventListener('click', () => {
          document.querySelector('.navbar-collapse')?.classList.toggle('show');
        })
      );

      document.querySelectorAll('.nav').forEach(element =>
        element.addEventListener('click', () => {
          document.querySelector('.navbar-collapse')?.classList.toggle('show');
        })
      );
    }
  }
}
