import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  hours!: number;
  minutes!: number;
  seconds!: number;

  ngOnInit() {
    const countDownDate = new Date();
    countDownDate.setHours(23);
    countDownDate.setMinutes(59);
    countDownDate.setSeconds(0);

    setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate.getTime() - now;

      this.hours = Math.floor(distance / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }
}

