 function showAlert() {
      alert("Your information has been submitted successfully!");
      document.getElementById("successMsg").style.display = "block";
      return false; // Prevent actual form submission
    }
    
  const form = document.getElementById("contactForm");
  const toastEl = document.getElementById("submitToast");

  form.addEventListener("submit", function (e) 
  {
    e.preventDefault();
    
    // Show toast
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
    
    // Optional: reset form
    form.reset();
  }
  );

