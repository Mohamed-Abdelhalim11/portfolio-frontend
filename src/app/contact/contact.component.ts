import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;

  constructor() {}

  ngOnInit(): void {
  }

}
