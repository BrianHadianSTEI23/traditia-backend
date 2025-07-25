import pandas as pd
import os
import re

# --- Pengaturan Awal ---
folder_sumber = 'test'
folder_hasil = 'result2'

# ### BAGIAN BARU: DEFINISI KATA KUNCI UNTUK SETIAP KATEGORI ###
# Anda bisa menambahkan sinonim lain ke dalam daftar (list) di bawah ini.
# Semua kata kunci akan diperiksa dalam format huruf kecil.
KATA_KUNCI = {
    'song': ['lagu', 'nyanyi', 'tembang', 'senandung', 'gita'],
    'food': ['hidangan', 'makanan', 'minuman', 'kuliner', 'santapan', 'masakan'],
    'language': ['bahasa', 'dialek', 'logat'],
    'rumah-adat': ['rumah', 'hunian', 'istana', 'bangunan adat'],
    'baju-adat': ['baju', 'pakaian', 'kain', 'busana', 'kostum'],
    'tari': ['tari', 'menari', 'tarian']
}

# --- Fungsi untuk menentukan kategori berdasarkan teks ---
def tentukan_kategori(teks):
    """Fungsi ini memeriksa teks dan mengembalikan nama kategori yang cocok."""
    # Jika sel kosong atau bukan teks, anggap sebagai 'tradition'
    if not isinstance(teks, str):
        return 'tradition'
    
    # Ubah teks ke huruf kecil agar pencarian tidak case-sensitive
    teks_kecil = teks.lower()
    
    # Cek setiap kategori berdasarkan kata kunci yang telah didefinisikan
    if any(kata in teks_kecil for kata in KATA_KUNCI['song']):
        return 'song'
    elif any(kata in teks_kecil for kata in KATA_KUNCI['food']):
        return 'food'
    elif any(kata in teks_kecil for kata in KATA_KUNCI['language']):
        return 'language'
    elif any(kata in teks_kecil for kata in KATA_KUNCI['rumah-adat']):
        return 'rumah-adat'
    elif any(kata in teks_kecil for kata in KATA_KUNCI['baju-adat']):
        return 'baju-adat'
    elif any(kata in teks_kecil for kata in KATA_KUNCI['tari']):
        return 'tari'
    else:
        # Jika tidak ada kata kunci yang cocok, masukkan ke kategori default
        return 'tradition'

# --- Logika Utama Script ---
print(f"Memastikan folder hasil '{folder_hasil}' ada...")
os.makedirs(folder_hasil, exist_ok=True)

try:
    daftar_file = os.listdir(folder_sumber)
except FileNotFoundError:
    print(f"Error: Folder sumber '{folder_sumber}' tidak ditemukan.")
    exit()

# Loop untuk setiap file excel di folder sumber
for nama_file in daftar_file:
    if nama_file.endswith('.xlsx') or nama_file.endswith('.xls'):
        path_file_excel = os.path.join(folder_sumber, nama_file)
        print(f"\nMemproses file: {path_file_excel}")

        try:
            # 1. Baca excel dan pilih kolom yang relevan
            df = pd.read_excel(path_file_excel, header=None)
            df_filtered = df.iloc[:, [0, 5, 6]]
            
            # 2. Terapkan fungsi kategorisasi pada kolom ketujuh (indeks 2)
            #    Hasilnya disimpan di kolom baru bernama 'kategori'
            df_filtered['kategori'] = df_filtered.iloc[:, 1].apply(tentukan_kategori)
            
            # 3. Siapkan nama dasar file (bersihkan prefix dan karakter non-alfanumerik)
            nama_file_dasar = os.path.splitext(nama_file)[0]
            if nama_file_dasar.startswith('export-'):
                nama_file_dasar = nama_file_dasar.replace('export-', '', 1)
            nama_file_dasar_bersih = re.sub(r'[^a-zA-Z0-9]+', '-', nama_file_dasar).strip('-')

            # 4. Kelompokkan DataFrame berdasarkan kolom 'kategori'
            grup_per_kategori = df_filtered.groupby('kategori')

            # 5. Loop melalui setiap grup dan simpan ke file CSV terpisah
            for nama_kategori, df_grup in grup_per_kategori:
                # Buat nama file CSV (misal: 'data-provinsi-song.csv')
                nama_file_csv = f"{nama_file_dasar_bersih}-{nama_kategori}.csv"
                path_file_csv = os.path.join(folder_hasil, nama_file_csv)
                
                # Simpan ke CSV, hapus kolom bantu 'kategori' agar tidak ikut tersimpan
                # Hanya simpan kolom asli (1, 6, dan 7)
                df_grup.iloc[:, [0,1,2]].to_csv(path_file_csv, index=False, header=False)
                
                print(f"  -> {len(df_grup)} baris kategori '{nama_kategori}' disimpan ke: {nama_file_csv}")

        except Exception as e:
            print(f"  -> Gagal memproses file {nama_file}. Error: {e}")

print("\n✅ Proses selesai!")