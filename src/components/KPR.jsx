import React, { useState } from 'react';

const KPR = () => {
  const [jumlahPinjaman, setJumlahPinjaman] = useState('500000000');
  const [tingkatBunga, setTingkatBunga] = useState('6');
  const [jangkaWaktu, setJangkaWaktu] = useState('12');
  const [angsuranBulanan, setAngsuranBulanan] = useState(0);
  const [nilaiPokokPinjaman, setNilaiPokokPinjaman] = useState(0);
  const [nilaiBungaPinjaman, setNilaiBungaPinjaman] = useState(0);
  const [totalPinjaman, setTotalPinjaman] = useState(0);
  const [totalBungaPinjaman, setTotalBungaPinjaman] = useState(0);

  const handleJumlahPinjamanChange = (e) => {
    setJumlahPinjaman(e.target.value);
  };

  const handleTingkatBungaChange = (e) => {
    setTingkatBunga(e.target.value);
  };

  const handleJangkaWaktuChange = (e) => {
    setJangkaWaktu(e.target.value);
  };

  const hitungAngsuranBulanan = () => {
    const pokokPinjaman = parseFloat(jumlahPinjaman);
    const tingkat = parseFloat(tingkatBunga) / 100 / 12;
    const jangka = parseFloat(jangkaWaktu) * 12;
    const angsuranBulanan =
      (pokokPinjaman * tingkat * Math.pow(1 + tingkat, jangka)) /
      (Math.pow(1 + tingkat, jangka) - 1);
    setAngsuranBulanan(angsuranBulanan.toFixed(0));

    const totalPinjaman = angsuranBulanan * jangka;
    setTotalPinjaman(totalPinjaman.toFixed(0));

    const nilaiPokokPinjaman = pokokPinjaman;
    setNilaiPokokPinjaman(nilaiPokokPinjaman.toFixed(0));

    const totalBungaPinjaman = totalPinjaman - pokokPinjaman;
    setTotalBungaPinjaman(totalBungaPinjaman.toFixed(0));

    const nilaiBungaPinjaman = totalBungaPinjaman / jangka;
    setNilaiBungaPinjaman(nilaiBungaPinjaman.toFixed(0));
  };

  return (
    <div>
      <h2>Kalkulator Hipotek</h2>
      <form>
        <label>
          Jumlah Pinjaman:
          <input
            type="number"
            value={jumlahPinjaman}
            onChange={handleJumlahPinjamanChange}
          />
        </label>
        <br />
        <label>
          Tingkat Bunga (%):
          <input
            type="number"
            value={tingkatBunga}
            onChange={handleTingkatBungaChange}
          />
        </label>
        <br />
        <label>
          Jangka Waktu (tahun):
          <input
            type="number"
            value={jangkaWaktu}
            onChange={handleJangkaWaktuChange}
          />
        </label>
        <br />
        <button type="button" onClick={hitungAngsuranBulanan}>
          Hitung
        </button>
      </form>
      <h3>Hasil:</h3>
      <p>Nilai Pokok Pinjaman Awal: Rp{nilaiPokokPinjaman.toLocaleString()}</p>
      <p>Nilai Bunga Pinjaman Awal: Rp{nilaiBungaPinjaman.toLocaleString()}</p>
      <p>Pinjaman per Bulan: Rp{angsuranBulanan.toLocaleString()}</p>
      <p>Total Pinjaman: Rp{totalPinjaman.toLocaleString()}</p>
      <p>Total Bunga Pinjaman: Rp{totalBungaPinjaman.toLocaleString()}</p>
    </div>
  );
};

export default KPR;