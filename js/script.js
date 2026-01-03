// Simple filtering
    function filter(region){
      const cards = document.querySelectorAll('#packagesGrid .card');
      cards.forEach(c => {
        if(region === 'all') c.style.display = '';
        else c.style.display = (c.dataset.region === region) ? '' : 'none';
      });
    }

    // Modal handling
    const backdrop = document.getElementById('modalBackdrop');
    const selectedPackageEl = document.getElementById('selectedPackage');
    const packageInput = document.getElementById('package');

    function openModal(packageName){
      backdrop.style.display = 'flex';
      if(packageName){
        selectedPackageEl.textContent = 'Selected: ' + packageName;
        packageInput.value = packageName;
      } else {
        selectedPackageEl.textContent = 'Tell us your preferred package or date.';
        packageInput.value = '';
      }
    }
    function closeModal(){ backdrop.style.display = 'none'; }
    backdrop.addEventListener('click', (e)=>{ if(e.target === backdrop) closeModal(); });

    // Form submission — this is a placeholder. Replace with your backend or Formspree/Google Forms endpoint.
    document.getElementById('inquiryForm').addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(e.target);
      const payload = {};
      data.forEach((v,k)=> payload[k]=v);
      console.log('Inquiry payload:', payload);

      // Try mailto fallback (may open mail client)
      const subject = encodeURIComponent('Tour Inquiry: ' + (payload.package || 'General enquiry'));
      const body = encodeURIComponent(JSON.stringify(payload, null, 2));
      // Uncomment the line below to open email client instead of AJAX
      // window.location.href = `mailto:jpotravel21@gmail.com?subject=${subject}&body=${body}`;

      // Show success to user
      alert('Thank you! Your inquiry was sent (demo). We will reply shortly.');
      closeModal();
    });

    // small UX: allow Escape to close
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });

    function openModal(tourName) {
  document.getElementById("bookingModal").style.display = "block";
  document.getElementById("tourTitle").innerText = tourName;
}

function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}

function bookMessenger(tour) {
  const message = encodeURIComponent(
    "Hello JPO Travel Services! I want to inquire about: " + tour
  );

  // Facebook Messenger
  const fbPage = "https://www.facebook.com/jpotravels/";
  
  // WhatsApp (PH number)
  const whatsapp = "https://wa.me/639150273162?text=" + message;

  // Open Messenger first
  window.open(fbPage, "https://www.facebook.com/jpotravels/");

  // Uncomment kung WhatsApp gusto nimo
  // window.open(whatsapp, "_blank");
}
