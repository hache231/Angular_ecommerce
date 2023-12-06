import { Component, inject } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  articleService:ArticleService = inject(ArticleService)
  route:ActivatedRoute = inject(ActivatedRoute)
  articleId = -1
  article!: Article | undefined

  constructor() {
    this.articleId = Number(this.route.snapshot.params['id'])
    this.article = this.articleService.getOne(this.articleId)
  }
}
