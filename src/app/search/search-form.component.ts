import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ns-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit{

  textFieldValue: string ="";
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Input() inicial : string;
  onButtonTap(): void{
    console.dir(this.textFieldValue);
    if(this.textFieldValue.length>2){
      this.search.emit(this.textFieldValue);
    }
  }
 

  constructor() { }

  ngOnInit() {
    this.textFieldValue = this.inicial;
  }

}
