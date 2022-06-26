import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private rootRoute = '/regions';
  private subscription = new Subscription();
  public showGoBackButton = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.subscription.add(
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => 
     {
        if(event.url === this.rootRoute) this.showGoBackButton = false;
        else this.showGoBackButton = true;          
     })
    )

  }

  goBack(): void {
    this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/'))]);
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
