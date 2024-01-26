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
        this.currentTabTitle = 'Naruto';
        break;
      case 'tab2':
        this.currentTabTitle = 'Daftar Misi';
        break;
      case 'tab3':
        this.currentTabTitle = 'Info Ninja';
        break;
      default:
        this.currentTabTitle = 'Unknown Tab';
        break;
    }

    // Log a message to the console
    console.log(`Changed to tab: ${event.tab}`);
  }
}
