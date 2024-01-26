import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) { }
  nip: string = '';
  nama: string = '';
  kemampuan: string = '';
  gol: string = '';
  jnstun: string = '';
  gaji: string = '';
  jnskel: string = '';
  tgllhr: string = '';

  simpan() {
    console.log(this.nip);
    console.log(this.nama);
    console.log(this.kemampuan);
    console.log(this.gol);
    console.log(this.jnstun);
    console.log(this.gaji);
    console.log(this.jnskel);
    console.log(this.tgllhr);

    localStorage.setItem('nip', this.nip);
    localStorage.setItem('nama', this.nama);
    localStorage.setItem('kemampuan', this.kemampuan);
    localStorage.setItem('gol', this.gol);
    localStorage.setItem('jnstun', this.jnstun);
    localStorage.setItem('gaji', this.gaji);
    localStorage.setItem('tgllhr', this.tgllhr);
    localStorage.setItem('jnskel', this.jnskel);
    this.clear();
  }

  clear() {
    this.nip = '';
    this.nama = '';
    this.kemampuan = '';
    this.gol = '';
    this.jnstun = '';
    this.gaji = '';
    this.jnskel = '';
    this.tgllhr = '';
  }

}

