//! MATERI FILE ANDROID MANIFEST

//! 1. APA ITU ANDROID MANIFEST
/*
    ? ANDROID MANIFEST ADALAH SEBUAH FILE UNTUK MEMBERIKAN INFORMASI DARI APLIKASI KITA, SEPERTI ICON LAUNCHER, SPLASCREEN, PERMISSION, ACTIVITY, PROVIDER, SERVICE, DLL
*/

//! 2. ACTIVITY
/*
    ? ACTIVITY ADALAH SEBUAH CLASS ATAU OBJECT YG AKAN OTOMATIS DI JALANKAN OLEH ANDROID SAAT APLIKASI DI JALANKAN 

    ? TUGAS ACTIVITY
    * Menampilkan User Interface (UI) DAN TERHUBUNG DENGAN FILE LAYOUT ATAU XML
    * Titik Masuk dan berinteraksi ke Aplikasi 
    * Mengelola Interaksi Pengguna seperti saat tombol ditekan (menggunakan setContentView() dan findViewById() untuk menghubungkan).
    * Manajemen Siklus Hidup (Lifecycle)
    * Koordinasi Antar Layar:  (misalnya, dari daftar item ke detail item), Activity yang satu memulai Activity yang lain menggunakan Intent, mengelola transisi antar status siklus hidup. 

    TODO: NOTES: ANALOGINYA KAYA FUNCTION MAIN DI JAVA ATAU GOLANG DI MANA FUNGSI ITU KAN AKAN DI JALANKAN PERTAMA KALI SAAT APLIKASI DI JALANKAN

    TODO: NOTES CARA DAN ALUR MEMBUAT  ACTIVITY
     * 1.  KITA PERLU MEMBUAT CLASS TURUNAN  DARI ACTIVITY  
    todo: NOTES: SAAT MEMBUAT PROJECT ANDROID, SECARA OTOMATIS SUDAH DI BUATKAN CLASS MainActivity yg merupakan class turunan dari  class AppCompatActivity oleh android studio
    todo: NOTES: appCompatActivity adalah sebuah class turunan dari Activity yg memungkinkan fitur baru android bisa digunakan di versi android lama 


    * 2. DAFTARKAN CLASS ACTIVITY DI FILE ANDROID MANIFEST
    TODO: KETIKA SUDAH BUAT CLASS Activitynya daftarkan di androidManifestnya

    * 3. lalu tambahkan intent unntuk menambahkan informasi seperti , menandai sebuah acitity ini adalah main Activity dan menandai bahwa Activity ini harus di jalankan ketika aplikasi android di jalankan/diluncurkan (LAUNC)
    
    ! CONTOH ANDROID MENDAFTARKAN Activity di FILE ANDROIDMANIFEST NYA
    todo: notes: activity ini harus di tambahkan di dalam tag xml application || <application></application>
    todo: notes: lebih lengkap bisa cek di doc nya
    /
        <activity
            android:name='.MainActivity || URL_PATH_FILE_CLASS_ACTIVITYC|| CLASS NAME' //* -> SEBUAH ATRIBUT UNTUK MENENTUKAN  NAMA FILE ATAU NAMA CLASS ACTIVITYNYA
            android:exported="true"
        >
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <action android:name="android.intent.action.LAUNCHER" />
            </intent-filter>    
        </activity>

    /

    ! ACTIVITY CALLBACK
    /
        ? ACTIVITY CALLBACK ADALAH SEBUAH FUNGSI ATAU METHOD YG ADA DI CLASS ACTIVITY 
    /
*/
