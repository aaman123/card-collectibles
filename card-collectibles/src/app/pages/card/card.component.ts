import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../../services/card-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../../classes/Card.class';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cards } from '../../data/card.data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardDetailsForm: FormGroup;
  cardModel: Card;
  public cardId: number = 0;
  public setFlag: Boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private cardDataService: CardDataService, private fb: FormBuilder, private router: Router) { 
    this.cardDetailsForm = this.fb.group({});
    this.cardModel = new Card(1, '' , '' , '');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (value) => {
        this.cardId = value['id'];
      }
    );
    
    const cardData = this.cardDataService.getCards().find((card) => card.id == this.cardId);
    if(cardData != undefined) this.setFlag = true;
    
    this.setFormControls();
    
  }

  setFormControls = () => {
    this.cardDetailsForm = this.fb.group({
      name: [this.cardModel.name, Validators.required],
      owner: [this.cardModel.owner, Validators.required],
      buy: [this.cardModel.buy, Validators.required],
    });
  }

  submit() {
    if(this.cardDetailsForm.valid) {
      this.cardModel = this.cardDetailsForm.value;
      this.cardModel['id'] = this.cardId;
      this.cardDataService.createNewCard(this.cardModel);
      this.router.navigateByUrl('/');
    }
  }
}
