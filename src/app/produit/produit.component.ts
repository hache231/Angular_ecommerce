import { Component, inject } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { NgFor } from '@angular/common';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [ArticleComponent, NgFor],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  articles!: Article[]
  articleService:ArticleService = inject(ArticleService)

  constructor(){
    this.articleService.findAll()
    .then((response:Article[])=>{
      this.articles = response
    })
  }
}
