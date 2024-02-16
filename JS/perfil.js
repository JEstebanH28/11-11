function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function() {
      const profileImage = document.getElementById('profile-image');
      profileImage.src = reader.result;
    }
    reader.readAsDataURL(file);
}