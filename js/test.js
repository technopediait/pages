function saveData() {
    const name = document.getElementById('name').value;
    localStorage.setItem('user_name', name); // ذخیره نام در localStorage
    displayData();
  }
  
  function displayData() {
    const name = localStorage.getItem('user_name');
    if (name) {
      document.getElementById('result').textContent = 'نام: ' + name;
    }
  }
  
  displayData(); // نمایش داده‌ها هنگام بارگذاری صفحه