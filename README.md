# Deskripsi
Tugas pert 14 Mobile 1 sebelum UAS

Silahkan buat aplikasi dengan ketentuan berikut:

1. halaman yang menerapkan komponen ion-menu
2. halaman yang menerapkan komponen tabs
3. halaman yang menerapkan input (simpan ke localstorage)
4. halaman yang menamplikan data hasil input

Kirim projek yang sudah dihapus bagian node modules dan angular dalam bentuk zip ke sini.

# Instalation
npm i

# Run
ionic serve

# Panduan install tabs
ke direktori kosong, bukan di dalam template
ionic start tabs

Masuk ke direktori nya
delete folder pada app\
explore-container
dalam setiap directory tab1,2,3 menghapus :
code ts dan code html

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

    ExploreContainerComponentModule,

  <app-explore-container name="Tab 3 page"></app-explore-container>
