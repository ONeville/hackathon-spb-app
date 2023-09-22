import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public isShowInput = false;

  public showInput(): void {
    this.isShowInput = true;
  }
}
