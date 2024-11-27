import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  weight: number = 0;
  height: number = 0;
  bmiResult: number = 0;
  bmiCategory: string = '';
  bmiNeed: number = 0;
  bmiOver: number = 0;
  att: string = '';

  // Method to calculate BMI
  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      const heightInMeters = this.height / 100;
      this.bmiResult = this.weight / (heightInMeters * heightInMeters);
      this.bmiNeed = 18.5 - this.bmiResult
      this.bmiOver = this.bmiResult - 25

      this.setBMICategory();
    }
  }

  private setBMICategory() {
    if (this.bmiResult < 16.0) {
      this.bmiCategory = 'ស្គមខ្លាំង';
      this.att = 'ព្យាយាមបរីភោគ អាហារដែលមានជីវជាតិ!';
    } else if (this.bmiResult >= 16.0 && this.bmiResult < 18.5) {
      this.bmiCategory = 'ស្គម';
      this.att = 'ញុាំអាហារបន្ថែមអោយបានគ្រប់គ្រាន់!';
    } else if (this.bmiResult >= 18.5 && this.bmiResult < 25) {
      this.bmiCategory = 'ធម្មតា';
      this.att = 'មិនបាច់បន្ថែម បន្ថយទេល្មមហើយ';
    } else if (this.bmiResult >= 25 && this.bmiResult < 30) {
      this.bmiCategory = 'លើសទម្ងន់';
      this.att = 'ព្យាយាមហាត់ប្រាណ!';
    } else if (this.bmiResult >= 30 && this.bmiResult < 35) {
      this.bmiCategory = 'ធាត់កម្រិត ១';
      this.att = 'តមអាហារខ្លះ និងហាត់ប្រាណ​ ប្រយ័ត្នហានិភ័យ!';
    } else if (this.bmiResult >= 35 && this.bmiResult < 40) {
      this.bmiCategory = 'ធាត់កម្រិត ២';
      this.att = 'ហានិភ័យ ត្រូវ​តមអាហារ និងហាត់ប្រាណ!';
    } else {
      this.bmiCategory = 'ធាត់កម្រិត ៣';
      this.att = 'ហានិភ័យកម្រិតធ្ងន់ ត្រូវតមអាហារ និងហាត់ប្រាណ!';
    }

  }

  resetForm() {
    this.weight = 0;
    this.height = 0;
    this.bmiResult = 0;
    this.bmiCategory = '';
    this.att = "";
    this.bmiNeed = 0;
  }
}
