import {
  Text,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

const KPR = () => {
  const [jumlahPinjaman, setJumlahPinjaman] = useState("500000000");
  const [tingkatBunga, setTingkatBunga] = useState("6");
  const [jangkaWaktu, setJangkaWaktu] = useState("12");
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
    <Box>
        <Input
          type="number"
          value={jumlahPinjaman}
          onChange={handleJumlahPinjamanChange}
        />
        <Input
          type="number"
          value={tingkatBunga}
          onChange={handleTingkatBungaChange}
        />
        <Input
          type="number"
          value={jangkaWaktu}
          onChange={handleJangkaWaktuChange}
        />
        <Button onClick={hitungAngsuranBulanan}>
          Hitung
        </Button>


      <Text>Hasil:</Text>
      <Text>
        Nilai Pokok Pinjaman Awal: Rp{nilaiPokokPinjaman.toLocaleString()}
      </Text>
      <Text>
        Nilai Bunga Pinjaman Awal: Rp{nilaiBungaPinjaman.toLocaleString()}
      </Text>
      <Text>Pinjaman per Bulan: Rp{angsuranBulanan.toLocaleString()}</Text>
      <Text>Total Pinjaman: Rp{totalPinjaman.toLocaleString()}</Text>
      <Text>Total Bunga Pinjaman: Rp{totalBungaPinjaman.toLocaleString()}</Text>
    </Box>
  );
};

export default KPR;
