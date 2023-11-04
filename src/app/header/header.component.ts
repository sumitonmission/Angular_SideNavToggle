import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() SideNavToggeld = new EventEmitter<boolean>();

  menuStatus: boolean = false;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  SideNavToggled() {
    debugger;
    this.menuStatus = !this.menuStatus;
    this.SideNavToggeld.emit(this.menuStatus);
  }

}
