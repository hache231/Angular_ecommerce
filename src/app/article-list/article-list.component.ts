import { Component, OnInit, inject } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../article';
import { NgFor } from '@angular/common';
import { ArticleService } from '../article.service';
​
@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleComponent, NgFor],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {
​
  articles!:Article[]
  articleService:ArticleService = inject(ArticleService)
​
  ngOnInit(): void {
    this.articles = this.articleService.getAll()
  }
  
 
}