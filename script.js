document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  // Stocker les informations dans le localStorage
  localStorage.setItem('userName', name);
  localStorage.setItem('userEmail', email);
  // Rediriger vers la page principale
  window.location.href = 'home.html';
});
