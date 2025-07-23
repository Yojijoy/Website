function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById('modeIcon');

  body.classList.toggle('dark-mode');

//Change icon
 if (body.classList.contains('dark-mode')) {
    icon.textContent = '🌙';
  } else {
    icon.textContent = '🌞';
  }
}

function startClock() {
  updateTime(); 
  setInterval(updateTime, 1000);
}

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const dateString = now.toDateString();
  document.getElementById('clock').textContent = `${dateString} - ${timeString}`;
}

  
document.getElementById('visitForm').addEventListener('submit', function(e) { e.preventDefault();clearErrors();
    
    let isValid = true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    
// Form Validation
function validateForm() {
    // Reset errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    let isValid = true;
    
    // 1. Name validation (only letters and spaces)
    const name = document.getElementById('name').value;
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById('nameError').textContent = 'Name should contain only letters';
        isValid = false;
    }
    
    // 2. Email validation
    const email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    // 3. Phone validation (international format)
    const phone = document.getElementById('phone').value;
    if (!/^\+?[\d\s\-\(\)]{10,}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number';
        isValid = false;
    }
    
    // 4. Date validation (future date)
    const visitDate = new Date(document.getElementById('visit-date').value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (visitDate < today) {
        document.getElementById('dateError').textContent = 'Please select a future date';
        isValid = false;
    }
    
    // 5. Password validation (strong password)
    const password = document.getElementById('password').value;
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain uppercase, lowercase, number, and special character';
        isValid = false;
    }
    
    // 6. Confirm password match
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmError').textContent = 'Passwords do not match';
        isValid = false;
    }
    
    // 7. Season selection validation
    const seasonSelected = document.querySelector('input[name="season"]:checked');
    if (!seasonSelected) {
        document.getElementById('seasonError").textContent = 'Please select a season';
        isValid = false;
    }
    
    if (isValid) {
        const duration = document.getElementById('duration').value;
        let durationText = '';
        switch(duration) {
            case '1-3': durationText = '1-3 days'; break;
            case '4-7': durationText = '4-7 days'; break;
            case '8-14': durationText = '8-14 days'; break;
            case '15+': durationText = '15+ days'; break;
        }
        
        alert(`Thank you for your inquiry!\n\nYou have successfully planned your ${durationText} trip to Tokyo during ${seasonSelected.value}. We'll contact you shortly at ${email}.`);
        return true;
    }
    
    return false;
}

// Keep your existing dark mode and clock functions
// ...

 
    































