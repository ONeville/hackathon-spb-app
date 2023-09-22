import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public flatlogic: string = 'https://flatlogic.com/';
  public flatlogicAbout: string = 'https://flatlogic.com/about';
  public flatlogicBlog: string = 'https://flatlogic.com/blog';
}
