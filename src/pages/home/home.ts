import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public currentStep = '1';
  public dateOfEvent: string;
  public mobileNo: string;
  public currentStaff = 1200;
  public priceRange = 'INR 10K to INR 5L';
  public photographyItems = [
    {
      typeOfSpecialization: 'Candid Photography',
      teamSize: '',
      days: '',
      icon: 'assets/img/candid.svg',
      title: '',
      selected: false
    },
    {
      typeOfSpecialization: 'Traditional Photography',
      teamSize: '',
      days: '',
      icon: 'assets/img/couple.svg',
      title: '',
      selected: false
    },
    {
      typeOfSpecialization: 'Cinematic/Short-Film',
      teamSize: '',
      days: '',
      icon: 'assets/img/cinema.svg',
      title: '',
      selected: false
    },
    {
      typeOfSpecialization: 'Traditional Video',
      teamSize: '',
      days: '',
      icon: 'assets/img/video.svg',
      title: '',
      selected: false
    }
  ];
  public events = [
    {
      key: 'couple_shoot',
      name: 'Couple Shoot',
      selected: false,
      priceRange: '13K to 14L',
      photographers: '500',
    },
    {
      key: 'engagement',
      name: 'Engagement',
      selected: false,
      priceRange: '3K to 3L',
      photographers: '700',
    },
    {
      key: 'mehendi_haldi',
      name: 'Mehendi / Haldi',
      selected: false,
      priceRange: '10K to 10L',
      photographers: '600',
    },
    {
      key: 'sangeet',
      name: 'Sangeet',
      selected: false,
      priceRange: '13K to 25L',
      photographers: '550',
    },
    {
      key: 'cocktail_party',
      name: 'Cocktail Party',
      selected: false,
      priceRange: '5K to 6L',
      photographers: '780',
    },
    {
      key: 'wedding',
      name: 'Wedding',
      selected: false,
      priceRange: '8K to 18L',
      photographers: '900',
    },
    {
      key: 'reception',
      name: 'Reception',
      selected: false,
      priceRange: '1K to 1L',
      photographers: '1200',
    },
    {
      key: 'post_wedding_shots',
      name: 'Post Wedding Shots',
      selected: false,
      priceRange: '3K to 3L',
      photographers: '530',
    },
    {
      key: 'destination_wedding',
      name: 'Destination Wedding',
      selected: false,
      priceRange: '10K to 13L',
      photographers: '1200',
    },
    {
      key: 'cinematography',
      name: 'Cinematography',
      selected: false,
      priceRange: '2K to 12L',
      photographers: '600',
    },
  ]
  constructor(public navCtrl: NavController) {

  }

  public selectPhotography(photography: any) {
    console.log(photography, this.events);
    photography.selected = !photography.selected;
  }

  public eventClick() {
    this._calcPriceRange();
  }

  private _calcPriceRange() {
    let minStaff = 9999;
    let pr;
    let isSelection = false;
    for (let event of this.events) {
      if (event['selected'] && minStaff > parseInt(event['photographers'], 10)) {
        minStaff = parseInt(event['photographers'], 10);
        pr = event['priceRange'];
        isSelection = true;
      }
    }
    if (isSelection) {
      this.currentStaff = minStaff;
      this.priceRange = pr;
    }
  }

  public selectChange(ptype: any) {
    if(ptype.teamSize && ptype.days) {
      this.currentStep = '2';
    }
  }
}
