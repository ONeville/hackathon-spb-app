import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/components/header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;
  public isShowSidebar: boolean;
  public mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);

    this.isShowSidebar = !this.mobileQuery.matches;
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);

    this.sidenav.close();
  }
}
