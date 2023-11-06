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

  function showMessages() {
    const messages = [
      "پیام 1: این یک پیام است.",
      "پیام 2: این پیام دوم است.",
      "پیام 3: این پیام سوم است."
    ];
  
    const messageContainer = document.getElementById("message-container");
    //messageContainer.innerHTML = ""; // پاک کردن محتوای قبلی
  
    messages.forEach(message => {
      const messageElement = document.createElement("p");
      messageElement.textContent = message;
      messageContainer.appendChild(messageElement);
    });
  }