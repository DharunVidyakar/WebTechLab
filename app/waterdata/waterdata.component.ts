import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-waterdata',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './waterdata.component.html',
  styleUrl: './waterdata.component.css'
})
export class WaterdataComponent implements OnInit{
      waterData:any = [];
      searchText:string = '';



 constructor(private apiService: ApiService) { }
      ngOnInit(): void {
          this.apiService.getWaterData().subscribe((data) => {
            this.waterData = data.waterDatas;
      })
}
search() {
    this.apiService.searchProducts(this.searchText).subscribe((data: any) => {
    this.waterData = data.waterData;
    if(this.waterData.length === 0) {
        alert('No data found');
        this.apiService.getWaterData().subscribe((data) => {
            this.waterData = data.waterDatas;
      })

    }
  });
}
}
