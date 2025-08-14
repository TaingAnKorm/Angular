import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  lsCatagary = [
    { id: 1, category: 'samsung', remark: 'Make in ko' },
    { id: 2, category: 'LG', remark: 'Make in JP' },
    { id: 3, category: 'Steing', remark: 'Make in Cam' },
    { id: 4, category: 'ABA', remark: 'Make in KH' },
  ];
}
