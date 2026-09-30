(function () {

  "use strict";


  /* =========================
     GET URL PARAMETERS
  ========================== */

  const params =
    new URLSearchParams(
      window.location.search
    );


  const file =
    params.get("file");


  const title =
    params.get("title");


  /* =========================
     GET HTML ELEMENTS
  ========================== */

  const viewer =
    document.getElementById(
      "pdf-viewer"
    );


  const titleElement =
    document.getElementById(
      "document-title"
    );


  const errorMessage =
    document.getElementById(
      "error-message"
    );


  /* =========================
     VALIDATE FILE
  ========================== */

  if (
    !file ||
    !file.toLowerCase().endsWith(".pdf")
  ) {

    viewer.style.display = "none";

    errorMessage.style.display = "flex";

    titleElement.textContent =
      "Document Viewer";

    return;
  }


  /* =========================
     DOCUMENT TITLE
  ========================== */

  if (title) {

    const decodedTitle =
      decodeURIComponent(title);

    titleElement.textContent =
      decodedTitle;

    document.title =
      decodedTitle +
      " | Dawit Birhanu Mulu";
  }


  /* =========================
     ALLOWED DOCUMENTS
  ========================== */

  const allowedFiles = [

    "Dawit_Birhanu_Mulu_CV.pdf",

    "Internship_Certificate.pdf",

    "Peachtree_Training_Certificate.pdf"

  ];


  /* =========================
     SECURITY CHECK
  ========================== */

  if (
    !allowedFiles.includes(file)
  ) {

    viewer.style.display = "none";

    errorMessage.style.display = "flex";

    titleElement.textContent =
      "Invalid Document";

    return;
  }


  /* =========================
     PDF URL
  ========================== */

  const pdfURL =
    "./" +
    encodeURIComponent(file);


  /* =========================
     LOAD PDF
  ========================== */

  viewer.src =
    pdfURL +
    "#toolbar=1" +
    "&navpanes=0" +
    "&view=FitH";


  /* =========================
     ERROR HANDLING
  ========================== */

  viewer.addEventListener(
    "error",
    function () {

      viewer.style.display =
        "none";

      errorMessage.style.display =
        "flex";

    }
  );


})();
