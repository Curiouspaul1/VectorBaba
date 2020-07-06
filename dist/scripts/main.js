var file,reader = new FileReader();

  // Upload the file to Google Drive
  reader.onloadend = function(e) {
    google.script.run
      .withSuccessHandler(showMessage)
      .uploadFileToGoogleDrive(
         e.target.result, file.name,
         $('input#name').val(),
         $('input#email').val()
      );
  };

  // Read the file on form submit
  function submitForm() {
    file = $('#file')[0].files[0];
    showMessage("Uploading file..");
    reader.readAsDataURL(file);
  }

  function showMessage(e) {
    $('#progress').html(e);
  }
