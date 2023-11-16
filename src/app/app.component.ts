import {Component, inject, Inject, OnInit, Pipe, PipeTransform} from '@angular/core';
import {CommonModule, DecimalPipe, DOCUMENT, NgClass, NgIf, registerLocaleData} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Subject} from 'rxjs';
import {FormBuilder, FormControl, FormsModule, Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import localeRu from '@angular/common/locales/ru';


import { MatMomentDateModule } from "@angular/material-moment-adapter";

import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
registerLocaleData(localeRu, 'ru');


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    FormsModule,
    MatCardModule,
    MatSliderModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    NgClass,
    DecimalPipe,
    NgIf,
    MatSelectModule,
    MatRadioModule,
    MatGridListModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;

  realty_price = 5500000;
  step_realty_price = 10000;
  max_realty_price = 100000000;
  min_realty_price = 10000;

  down_payment = 1925000;
  down_percent = 50;
  step_down_payment = 10000;
  max_down_payment = 20000000;
  min_down_payment = 0;

  realty_minus_down = 0;

  percent = 8.5;
  step_percent = 0.1;
  max_percent = 100;
  min_percent = 0.1;

  years = 20;
  step_years = 1;
  max_years = 30;
  min_years = 1;

  month_payment = 0;
  overpayment = 0;
  show_overpayment = false;
  show_credit_sum = false;
  show_order_button = true;

  credit_sum = 0;

  stavka_title = "Ставка ";
  stavka_description = "** для семей с двумя детьми и более";

  top_text = "Ежемесячный платеж";
  bottom_text = "по двум документам!";

  ipoteka_order_url = "";

  private _tickInterval = 1;
  show_toolbar = true;


  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'Arizona', abbreviation: 'AZ'},
    {name: 'Arkansas', abbreviation: 'AR'},
    {name: 'California', abbreviation: 'CA'},
    {name: 'Colorado', abbreviation: 'CO'},
    {name: 'Connecticut', abbreviation: 'CT'},
    {name: 'Delaware', abbreviation: 'DE'},
    {name: 'District Of Columbia', abbreviation: 'DC'},
    {name: 'Federated States Of Micronesia', abbreviation: 'FM'},
    {name: 'Florida', abbreviation: 'FL'},
    {name: 'Georgia', abbreviation: 'GA'},
    {name: 'Guam', abbreviation: 'GU'},
    {name: 'Hawaii', abbreviation: 'HI'},
    {name: 'Idaho', abbreviation: 'ID'},
    {name: 'Illinois', abbreviation: 'IL'},
    {name: 'Indiana', abbreviation: 'IN'},
    {name: 'Iowa', abbreviation: 'IA'},
    {name: 'Kansas', abbreviation: 'KS'},
    {name: 'Kentucky', abbreviation: 'KY'},
    {name: 'Louisiana', abbreviation: 'LA'},
    {name: 'Maine', abbreviation: 'ME'},
    {name: 'Marshall Islands', abbreviation: 'MH'},
    {name: 'Maryland', abbreviation: 'MD'},
    {name: 'Massachusetts', abbreviation: 'MA'},
    {name: 'Michigan', abbreviation: 'MI'},
    {name: 'Minnesota', abbreviation: 'MN'},
    {name: 'Mississippi', abbreviation: 'MS'},
    {name: 'Missouri', abbreviation: 'MO'},
    {name: 'Montana', abbreviation: 'MT'},
    {name: 'Nebraska', abbreviation: 'NE'},
    {name: 'Nevada', abbreviation: 'NV'},
    {name: 'New Hampshire', abbreviation: 'NH'},
    {name: 'New Jersey', abbreviation: 'NJ'},
    {name: 'New Mexico', abbreviation: 'NM'},
    {name: 'New York', abbreviation: 'NY'},
    {name: 'North Carolina', abbreviation: 'NC'},
    {name: 'North Dakota', abbreviation: 'ND'},
    {name: 'Northern Mariana Islands', abbreviation: 'MP'},
    {name: 'Ohio', abbreviation: 'OH'},
    {name: 'Oklahoma', abbreviation: 'OK'},
    {name: 'Oregon', abbreviation: 'OR'},
    {name: 'Palau', abbreviation: 'PW'},
    {name: 'Pennsylvania', abbreviation: 'PA'},
    {name: 'Puerto Rico', abbreviation: 'PR'},
    {name: 'Rhode Island', abbreviation: 'RI'},
    {name: 'South Carolina', abbreviation: 'SC'},
    {name: 'South Dakota', abbreviation: 'SD'},
    {name: 'Tennessee', abbreviation: 'TN'},
    {name: 'Texas', abbreviation: 'TX'},
    {name: 'Utah', abbreviation: 'UT'},
    {name: 'Vermont', abbreviation: 'VT'},
    {name: 'Virgin Islands', abbreviation: 'VI'},
    {name: 'Virginia', abbreviation: 'VA'},
    {name: 'Washington', abbreviation: 'WA'},
    {name: 'West Virginia', abbreviation: 'WV'},
    {name: 'Wisconsin', abbreviation: 'WI'},
    {name: 'Wyoming', abbreviation: 'WY'}
  ];

  constructor(
    @Inject(DOCUMENT) private document: any,
  ) {
  }

  ngOnInit() {
    this.init_input_parameters();
    this.calculate(null);
  }
  init_input_parameters () {
    let app_root_element;
    if (this.document.getElementById('app_root') ) {
      app_root_element = this.document.getElementById('app_root');
    } else {
      console.error('could not find app_root');
      return;
    }

    if (app_root_element.getAttribute('years') > 0) {
      this.years = app_root_element.getAttribute('years');
    }
    if (app_root_element.getAttribute('realty_price') > 0) {
      this.realty_price = parseInt(app_root_element.getAttribute('realty_price'));
    }
    if (app_root_element.getAttribute('percent') > 0) {
      this.percent = app_root_element.getAttribute('percent');
    }
    if (app_root_element.getAttribute('down_payment') > 0) {
      this.down_payment = app_root_element.getAttribute('down_payment');
    } else {
      this.down_payment = this.realty_price * 0.20;
    }

    if (app_root_element.getAttribute('down_percent') > 0) {
      this.down_percent = app_root_element.getAttribute('down_percent');
      this.down_payment = this.realty_price*(app_root_element.getAttribute('down_percent')/100);
    } else {
      this.down_payment = this.realty_price * 0.20;
    }

    if (app_root_element.getAttribute('show_overpayment') == 1) {
      this.show_overpayment = true;
    } else {
      this.show_overpayment = false;
    }

    if (app_root_element.getAttribute('show_toolbar') == 0) {
      this.show_toolbar = false;
    }

    if (app_root_element.getAttribute('hide_order_button') == 1) {
      this.show_order_button = false;
    }


    if (app_root_element.getAttribute('show_credit_sum') == 1) {
      this.show_credit_sum = true;
    } else {
      this.show_credit_sum = false;
    }

    if (app_root_element.getAttribute('top_text') != null) {
      this.top_text = app_root_element.getAttribute('top_text');
    }

    if (app_root_element.getAttribute('bottom_text') != null) {
      this.bottom_text = app_root_element.getAttribute('bottom_text');
    }

    if (app_root_element.getAttribute('ipoteka_order_url') != null) {
      this.ipoteka_order_url = app_root_element.getAttribute('ipoteka_order_url');
    }

  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return value / 1000000 + ' млн';
    }

    return value;
  }

  formatLabelDown(value: number | null, realty_price: number | null) {
    if (!value) {
      return 0;
    }
    return (this.realty_price - value)/this.realty_price;
  }

  displayFnDown (value: number): string {
    if (!value ) {
      value = 0;
    }
    this.down_percent = 100-Math.round((this.realty_price - value)*100/this.realty_price);
    return this.down_percent + '%';
  }


  calculate(event: null) {
    this.max_down_payment = this.realty_price;
    if ( this.down_payment > this.realty_price ) {
      this.down_payment = this.realty_price;
    }
    this.down_percent = 100-Math.round((this.realty_price - this.down_payment)*100/this.realty_price);
    let start_sum = this.realty_price - this.down_payment;
    this.realty_minus_down = start_sum;
    let percent_dig = this.percent / 1200;
    let periods = this.years * 12;
    this.month_payment = start_sum * (percent_dig / (1 - (Math.pow(1 + percent_dig, -periods))));
    this.credit_sum = this.month_payment * periods;
    this.overpayment = this.credit_sum - start_sum;
    if ( this.percent <= 6 ) {
      this.stavka_description = "** для семей с двумя детьми и более";
    } else {
      this.stavka_description = "";
    }
  }


  onSubmit(): void {
    alert('Thanks!');
  }

  form_submit() {
    let url_params =
      '&cost='+this.realty_price +
      '&down_percent='+this.down_percent +
      '&percent='+this.percent +
      '&realty_minus_down='+this.realty_minus_down +
      '&vznos='+this.down_payment +
      '&years='+this.years;
    window.open(this.ipoteka_order_url + url_params, '_blank');
  }


}
