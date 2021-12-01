import { Component, OnInit } from '@angular/core';
import { Card } from '../../classes/Card.class';
import { CardDataService } from '../../services/card-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public filteredCards: Card[] = [];
  public cards: Card[] = this.cardDataService.getCards();

  constructor(private cardDataService: CardDataService) {}

  filterOnSaleCards() {
    this.filteredCards = this.cardDataService.getCards().filter((card) => card.buy != '');
  }

  filterSoldCards() {
    this.filteredCards = this.cardDataService.getCards().filter((card) => card.buy == '');
  }

  AllCards() {
    this.filteredCards = this.cardDataService.getCards();
  }

  ngOnInit(): void {}

}
