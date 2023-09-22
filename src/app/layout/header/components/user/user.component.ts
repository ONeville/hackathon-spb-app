import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { User } from 'src/app/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatMenuModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() user: User;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public url: string = 'https://springboardcollaborative.com';

  public signOutEmit(): void {
    this.signOut.emit();
  }
}
