import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-lista-cats',
  templateUrl: './lista-cats.component.html',
  styleUrls: ['./lista-cats.component.css'],
})
export class ListaCatsComponent implements OnInit {
  cats: any[] = [];

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService.getCats().subscribe((data) => {
      this.cats = data; 
    });
  }
}
