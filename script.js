 const form = document.getElementById('form');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const branch = document.getElementById('branch');
    const degree = document.getElementById('degree');
    const joining = document.getElementById('joining');
    const passed = document.getElementById('passed');
    const incharge = document.getElementById('incharge');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      validate();
    });

    function validate() {
      checkEmpty(firstName, 'First name is required');
      checkEmpty(lastName, 'Last name is required');
      checkEmail(email);
      checkSelect(branch, 'Please select a branch');
      checkSelect(degree, 'Please select a degree');
      checkEmpty(joining, 'Joining date is required');
      checkEmpty(passed, 'Passed out date is required');
      checkSelect(incharge, 'Please choose a department incharge');
    }

    function checkEmpty(input, message) {
      const val = input.value.trim();
      if (val === '') {
        setError(input, message);
      } else {
        setSuccess(input);
      }
    }

    function checkSelect(select, message) {
      if (select.value === '') {
        setError(select, message);
      } else {
        setSuccess(select);
      }
    }

    function checkEmail(input) {
      const val = input.value.trim();
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (val === '') {
        setError(input, 'Email is required');
      } else if (!regex.test(val)) {
        setError(input, 'Enter a valid email');
      } else {
        setSuccess(input);
      }
    }

    function setError(element, message) {
      const group = element.parentElement;
      const error = group.querySelector('.error');
      error.innerText = message;
      group.classList.add('error');
      group.classList.remove('success');
    }

    function setSuccess(element) {
      const group = element.parentElement;
      const error = group.querySelector('.error');
      error.innerText = '';
      group.classList.add('success');
      group.classList.remove('error');
    }