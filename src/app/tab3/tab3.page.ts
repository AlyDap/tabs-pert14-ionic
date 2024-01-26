import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() { }
  nip: string | null = localStorage.getItem('nip');
  nama: string | null = localStorage.getItem('nama');
  kemampuan: string | null = localStorage.getItem('kemampuan');
  gol: string | null = localStorage.getItem('gol');
  jnstun: string | null = localStorage.getItem('jnstun');
  gaji: string | null = localStorage.getItem('gaji');
  jnskel: string | null = localStorage.getItem('jnskel');
  tgllhr: string | null = localStorage.getItem('tgllhr');

  refresh() {
    // Mendapatkan nilai terbaru dari localStorage dan memperbarui variabel-variabel
    this.nip = localStorage.getItem('nip');
    this.nama = localStorage.getItem('nama');
    this.kemampuan = localStorage.getItem('kemampuan');
    this.gol = localStorage.getItem('gol');
    this.jnstun = localStorage.getItem('jnstun');
    this.gaji = localStorage.getItem('gaji');
    this.jnskel = localStorage.getItem('jnskel');
    this.tgllhr = localStorage.getItem('tgllhr');
  }
}
