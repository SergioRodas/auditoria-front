import { useState } from 'react';
import { usePDF } from 'react-to-pdf';

type usePDFOptionsType = {
  date?: string;
};

const useExportToPDF = (usePDFOptions: usePDFOptionsType) => {
  const { toPDF, targetRef } = usePDF({
    filename: `AnálisisPresidencial${usePDFOptions.date}.pdf`,
    resolution:  1.5,
  });
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const downloadPDF = async () => {
    setIsDownloading(true);
    try {
      // Timeout de 1s para dar tiempo a que se expandan las menciones
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Cambiar temporalmente el tamaño del viewport
      if (document.body.clientWidth <= 900) {
        document.body.style.width = '1900px';
        document.body.style.overflow = 'hidden';
      }

      // Ocultar el botón de scroll to top
      const backTopButton = document.getElementById("scroll-to-top");
      if (backTopButton) backTopButton.style.display = "none";

      // Iniciar la descarga
      await toPDF();
    } finally {
      // Restaurar el tamaño original del viewport
      document.body.style.width = 'auto';
      document.body.style.overflow = 'auto';

      // Mostrar el botón de scroll to top
      const backTopButton = document.getElementById("scroll-to-top");
      if (backTopButton) backTopButton.style.display = "block";

      setIsDownloading(false);
    }
  };

  return {
    targetRef,
    downloadPDF,
    isDownloading,
  };
};

export default useExportToPDF;
