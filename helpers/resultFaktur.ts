export default function resultFaktur(paylout: any, typeFaktur: string) {
    // Check Approval Status, if status "Faktur valid, Sudah Diapprove oleh DJP" then "IS CREDITABLE" = "1", else "IS CREDITABLE" = "0"
    if (
        paylout.resValidateFakturPm.statusApproval ===
        "Faktur Valid, Sudah Diapprove oleh DJP"
    ) {
        paylout.resValidateFakturPm.statusApproval = "1";
    } else {
        paylout.resValidateFakturPm.statusApproval = "0";
    }

    const [day, month, year] =
        paylout.resValidateFakturPm.tanggalFaktur.split("/");

    if (typeFaktur === "PajakKeluar") {
        const paylouts = {
            FM: "FM",
            "KD JENIS TRANSAKSI": paylout.resValidateFakturPm.kdJenisTransaksi,
            "FG PENGGANTI": paylout.resValidateFakturPm.fgPengganti,
            "NOMOR FAKTUR": paylout.resValidateFakturPm.nomorFaktur,
            "MASA PAJAK": month,
            "TAHUN PAJAK": year,
            "TANGGAL FAKTUR": new Date(
                year,
                month - 1,
                day
            ).toLocaleDateString(),
            NPWP: paylout.resValidateFakturPm.npwpLawanTransaksi,
            NAMA: paylout.resValidateFakturPm.namaLawanTransaksi,
            "ALAMAT LENGKAP": paylout.resValidateFakturPm.alamatLawanTransaksi,
            "JUMLAH DPP": paylout.resValidateFakturPm.jumlahDpp,
            "JUMLAH PPN": paylout.resValidateFakturPm.jumlahPpn,
            "JUMLAH PPNBM": paylout.resValidateFakturPm.jumlahPpnBm,
            "IS CREDITABLE": paylout.resValidateFakturPm.statusApproval,
        };
        return paylouts;
    } else {
        const paylouts = {
            FM: "FM",
            "KD JENIS TRANSAKSI": paylout.resValidateFakturPm.kdJenisTransaksi,
            "FG PENGGANTI": paylout.resValidateFakturPm.fgPengganti,
            "NOMOR FAKTUR": paylout.resValidateFakturPm.nomorFaktur,
            "MASA PAJAK": month,
            "TAHUN PAJAK": year,
            "TANGGAL FAKTUR": new Date(
                year,
                month - 1,
                day
            ).toLocaleDateString(),
            NPWP: paylout.resValidateFakturPm.npwpPenjual,
            NAMA: paylout.resValidateFakturPm.namaPenjual,
            "ALAMAT LENGKAP": paylout.resValidateFakturPm.alamatPenjual,
            "JUMLAH DPP": paylout.resValidateFakturPm.jumlahDpp,
            "JUMLAH PPN": paylout.resValidateFakturPm.jumlahPpn,
            "JUMLAH PPNBM": paylout.resValidateFakturPm.jumlahPpnBm,
            "IS CREDITABLE": paylout.resValidateFakturPm.statusApproval,
        };
        return paylouts;
    }
}
