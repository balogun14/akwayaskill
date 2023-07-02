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
    const countDownDate = new Date("Jul 2, 2023 23:59:00");
    this.updateCountDown(countDownDate);

    setInterval(() => {     
      var customNow = new Date(" 22:51:00").getTime();
      this.updateCountDown(countDownDate);
    }, 1000);
  }
  updateCountDown(countDownDate: Date) {
    const customNow = new Date().getTime();
    const distance = countDownDate.getTime() - customNow;
    this.hours = Math.floor(distance / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}

