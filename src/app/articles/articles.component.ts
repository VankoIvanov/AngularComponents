import { Component, OnInit } from '@angular/core';
import {Article} from "../../model/article.model";
import {ArticleData} from "../../data/data";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: any = new ArticleData().getData();

  constructor() { }

  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }

}
