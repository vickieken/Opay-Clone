const QrCode = document.querySelector('.fa-qrcode');

// for rcode scanning
QrCode.addEventListener('click', function() {
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('body'),
      },
      decoder: {
        readers: ["ean_reader", "ean_8_reader", "code_39_reader", "code_39_vin_reader", "codabar_reader", "upc_reader", "upc_e_reader", "i2of5_reader", "2of5_reader", "code_93_reader"]
      }
    }, function(err) {
      if (err) {
        console.error(err);
        return;
      }
      Quagga.start();
      Quagga.onDetected(function(result) {
        alert('Detected: ' + result.codeResult.code);
        Quagga.stop();
      });
    });
  });


 



