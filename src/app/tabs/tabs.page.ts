import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router) { }

  goToSettings() {
    this.router.navigate(['/setting']);
  }

  currentTabTitle: string = 'Home'; // Default title

  tabChanged(event: any) {
    // Update currentTabTitle based on the selected tab
    // this.currentTabTitle = event.tab;
    switch (event.tab) {
      case 'home':
        this.currentTabTitle = 'Home';
        break;
      case 'tab1':
        this.currentTabTitle = 'Tab 1';
        break;
      case 'tab2':
        this.currentTabTitle = 'Tab 2';
        break;
      case 'tab3':
        this.currentTabTitle = 'Tab 3';
        break;
      default:
        this.currentTabTitle = 'Unknown Tab';
        break;
    }

    // Log a message to the console
    console.log(`Changed to tab: ${event.tab}`);
  }
}
