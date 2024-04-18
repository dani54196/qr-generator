const qr = require("qrcode");
const fs = require("fs");

// Text or data to encode in the QR code
const data = "to QR";

// Generate QR code as a data URI
qr.toDataURL(data, (err, url) => {
  if (err) {
    console.error(err);
    return;
  }

  // Display the QR code data URI
  console.log(url);

  // Optionally, save the QR code image to a file
  qr.toFile("qr-code.png", data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("QR code saved as qr-code.png");
  });
});
