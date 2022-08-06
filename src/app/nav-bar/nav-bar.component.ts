import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public nameStartsWith: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(params => {
      this.nameStartsWith = params['nameStartsWith'];
      this.filterByName();
    });
  }

  ngOnInit(): void {

  }

  public filterByName() {

    this.router.navigate(['.'], { relativeTo: this.route, queryParams: { nameStartsWith: this.nameStartsWith } });
  }

}
