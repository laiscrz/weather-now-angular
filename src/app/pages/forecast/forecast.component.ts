import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-forecast',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ForecastComponent {

}
