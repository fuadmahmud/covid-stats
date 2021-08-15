function Footer() {
  return (
    <div className="flex flex-col max-w bg-black p-4">
      <span className="text-white font-bold">
        Sumber data, thanks to:&nbsp;
        <a
          className="text-primary"
          href="https://cekdiri.id/vaksinasi/"
          target="_blank"
          rel="noreferrer"
        >
          Cekdiri.id,{" "}
        </a>
        <a
          className="text-primary"
          href="https://api.kawalcorona.com/indonesia"
          target="_blank"
          rel="noreferrer"
        >
          Kawalcorona.com
        </a>
      </span>
      <span className="text-white my-2">
        Disclaimer website ini dibuat dengan tujuan riset dan menyelesaikan
        tugas akhir kuliah.
      </span>
      <span className="text-white my-2">Dibuat oleh: Deffa</span>
    </div>
  );
}

export default Footer;
