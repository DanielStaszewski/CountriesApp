import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'breadcrumbs-component',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() breadcrumbs: {
    route: string,
    routeName: string
  }[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickParentUrl(route: string) {
    if (route !== null) {
      this.router.navigateByUrl(route);
    }
  }

}
