import { Component } from '@angular/core';
import {} from '@fortawesome/fontawesome-svg-core';
import {
  faThunderstorm,
  faBoltLightning,
  faBolt,
  faMemory,
  faMessage,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-result-summary',
  templateUrl: './result-summary.component.html',
  styleUrls: ['./result-summary.component.css'],
})
export class ResultSummaryComponent {
  icons = {
    faThunderstorm,
    faBoltLightning,
    faBolt,
    faMemory,
    faMessage,
    faEye,
  };
}
