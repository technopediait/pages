
    // تابعی برای تعیین حالت روشن یا تاریک بر اساس وضعیت سیستم
    function getMode() {
        // اگر دستگاه اندروید است، حالت سیستم را تعیین کنید
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          return "dark";
        } else {
          return "light";
        }
      
      
      // تابعی برای تغییر حالت صفحه
      function changeMode(mode) {
        // حالت صفحه را بر اساس مقدار بازگشتی تابع getMode() تغییر دهید
        const body = document.querySelector("body");
        body.classList.remove("light", "dark");
        body.classList.add(mode);
      }
        // رنگ پس زمینه را تغییر دهید
        if (mode === "dark") {
          body.style.backgroundColor = "#000";
        } else {
          body.style.backgroundColor = "#ffffff";
        }
      
        // رنگ متن را تغییر دهید
        if (mode === "dark") {
          body.style.color = "#fff";
        } else {
          body.style.color = "#000";
        }
      }
      
      // تعیین حالت اولیه صفحه
      const mode = getMode();
      changeMode(mode);
      
      // نظارت بر تغییر حالت سیستم و تغییر حالت صفحه به صورت خودکار
      window.addEventListener("color-scheme-change", () => {
        const mode = getMode();
        changeMode(mode);
      });
      