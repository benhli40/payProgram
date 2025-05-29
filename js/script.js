function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.style.display = 'none');

  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
  }
}

document.getElementById("employeeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const Person = {
    fName: document.getElementById("fName").value,
    lName: document.getElementById("lName").value,
    dob: document.getElementById("dob").value,
    ssn: "Encrypted", // For now, keep it hidden
    address: {
      street: document.getElementById("street").value,
      aptSuite: document.getElementById("aptSuite").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      zip: document.getElementById("zip").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value
    },
    pay: {
      payrate: parseFloat(document.getElementById("payrate").value)
    }
  };

  // Show the object nicely in <pre> tag
  document.getElementById("employeeOutput").textContent = JSON.stringify(Person, null, 2);
});