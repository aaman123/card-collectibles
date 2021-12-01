import { Injectable } from '@angular/core';
import { Card } from '../classes/Card.class';
import { Cards } from '../data/card.data';

@Injectable({
    providedIn: 'root'
})
export class CardDataService {

    constructor() {}

    getCards() {
        return Cards;
    }

    createNewCard(card: Card) {
        Cards.push(card);
    }
}