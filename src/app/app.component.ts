import {Component, Inject, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {DOCUMENT, registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {coerceNumberProperty} from '@angular/cdk/coercion';
registerLocaleData(localeRu, 'ru');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mortgage-calculator';
  controlPressed: boolean;
  controlProcessing: boolean;

  private _unsubscribeAll: Subject<any>;

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
  max_realty_price = 20000000;
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
  min_percent = 1;

  years = 20;
  step_years = 1;
  max_years = 30;
  min_years = 1;

  month_payment = 0;
  overpayment = 0;
  show_overpayment = false;
  show_credit_sum = false;

  credit_sum = 0;

  stavka_title = "Ставка % **";
  stavka_description = "** для семей с двумя детьми и более";

  top_text = "Ежемесячный платеж:";
  bottom_text = "по двум документам!";

  ipoteka_order_url = "";

  private _tickInterval = 1;

  constructor(
    @Inject(DOCUMENT) private document: any,
  ) {

    // Set the private defaults
    this._unsubscribeAll = new Subject();

    this.controlPressed = false;
    this.controlProcessing = true;

  }

  ngOnInit() {
    this.init_input_parameters();
    this.calculate(null);
  }


  init_input_parameters () {
    let app_root_element;
    if (this.document.getElementById('calculator_mini_root')) {
      app_root_element = this.document.getElementById('calculator_mini_root');
    } else if (this.document.getElementById('calculator_root').getAttribute('realty_price') > 0) {
      app_root_element = this.document.getElementById('calculator_root');
    } else if (this.document.getElementById('app_root').getAttribute('realty_price') > 0) {
      app_root_element = this.document.getElementById('app_root');
    }

    if (app_root_element.getAttribute('years') > 0) {
      this.years = app_root_element.getAttribute('years');
    }
    if (app_root_element.getAttribute('realty_price') > 0) {
      this.realty_price = app_root_element.getAttribute('realty_price');
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


  getStyleSheet(unique_title) {
    for (var i = 0; i < this.document.styleSheets.length; i++) {
      var sheet = this.document.styleSheets[i];
      try {
        for (var j = 0; j < sheet.cssRules.length; j++) {
          if ( sheet.cssRules[j].selectorText == unique_title ) {
            return sheet.cssRules[j];
          }
        }

      } catch (err) {
        //console.log(err);

        // обработка ошибки

      }
    }
    return false;
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

  displayFnDown (value: number | null) {
    return 100-Math.round((this.realty_price - value)*100/this.realty_price) + '%';
  }


  calculate(event) {
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

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }


  form_submit() {
    let url_params =
      '&cost='+this.realty_price +
      '&down_percent='+this.down_percent +
      '&percent='+this.percent +
      '&realty_minus_down='+this.realty_minus_down +
      '&vznos='+this.down_payment +
      '&years='+this.years;
    this.document.location = this.ipoteka_order_url + url_params;
  }
}
