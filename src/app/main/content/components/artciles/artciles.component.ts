import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-artciles',
  templateUrl: './artciles.component.html',
  styleUrls: ['./artciles.component.scss']
})
export class ArtcilesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  articleDescrShow(wrapper: HTMLDivElement, descr: HTMLDivElement) {
    wrapper.style.height = `12%`;
    wrapper.style.transition = '1s';
    descr.style.display = 'block';
  }

  articleDescrHide(wrapper: HTMLDivElement, descr: HTMLDivElement) {
    descr.style.display = 'none';
    wrapper.style.height = `6%`;
    wrapper.style.transition = '.5s';
  }
}
