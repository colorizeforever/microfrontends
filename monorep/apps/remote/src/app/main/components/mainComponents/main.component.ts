import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'monorep-abc',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent { }
