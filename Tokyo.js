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

    
const name = document.getElementById('name').value;
    if (!/^[a-zA-Z ]+$/.test(name)) {
        showError('nameError', 'Only letters allowed');
        isValid = false;
    }

const email = document.getElementById('email').value;
  if (!email.includes('@') || !email.includes('.')) {
        showError('emailError', 'Enter a valid email');
        isValid = false;
    }

const phone = document.getElementById('phone').value;
    if (!/^\+?[\d\s\-\(\)]{10,}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number';
        isValid = false;
    }
 
const visitDate = new Date(document.getElementById('visit-date').value);
    if (visitDate < today) {
        showError('dateError', 'Select a future date');
        isValid = false;
    }

    
    if (!document.querySelector('input[name="season"]:checked')) {
        showError('seasonError', 'Please select a season');
        isValid = false;
    }

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(el => {
        el.textContent = '';
    });
}

 
    































