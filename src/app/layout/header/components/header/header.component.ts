import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthService, User } from 'src/app/core';
import { SearchComponent } from '../search/search.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    SearchComponent,
    UserComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isMenuOpened: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();
  public user$: Observable<User>;

  constructor(private userService: AuthService, private router: Router) {
    this.user$ = this.userService.getUser();
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {
    this.userService.signOut();

    this.router.navigate(['/']);
  }
}
