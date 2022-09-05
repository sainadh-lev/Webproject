// import React, { useState } from 'react';
// import { Document, Page,pdfjs } from 'react-pdf';
// // import SinglePagePDFViewer from "./components/pdf/single-page";
// import Pdf from './R1.pdf'
// // pdfjs.GlobalWorkerOptions.workerSrc = //cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js;
// function PdfView() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div >
//         {/* <SinglePagePDFViewer pdf={Pdf} /> */}
//       {/* <Document file="R1.pdf" onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p> */}
//     <object data="https://github.com/sainadh-lev/Webproject/blob/main/public/R1.pdf" type="application/pdf" width="100%" height="100%">
//       <p>Alternative text - include a link <a href="https://github.com/sainadh-lev/Webproject/blob/main/public/R1.pdf">to the PDF!</a></p>
//   </object>
//     </div>
//   );
// }

// export default PdfView