import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

interface Article {
  title: string;
  content: string;
  photo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles: Article[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.http.get<Article[]>(environment.apiUrlForArticles)
      .subscribe(articles => this.articles = articles);
  }
}
