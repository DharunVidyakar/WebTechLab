import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-water',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './addwater.component.html',
  styleUrls: ['./addwater.component.css']
})
export class AddWaterComponent {
  formData = {
    water_body_name: '',
    temperature: null,
    pH: null,
    turbidity: null,
    dissolved_oxygen: null
  };

  message = '';

  constructor(private apiService: ApiService) {}

  submitData() {
    this.apiService.addWaterData(this.formData).subscribe({
      next: () => {
        this.message = 'Water body data added successfully!';
        this.formData = {
          water_body_name: '',
          temperature: null,
          pH: null,
          turbidity: null,
          dissolved_oxygen: null
        };
      },
      error: () => {
        this.message = 'Failed to add water data.';
      }
    });
  }
}
