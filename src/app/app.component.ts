import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { HeaderComponent } from './header/header.component';

​
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule ,RouterOutlet, ArticleListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}