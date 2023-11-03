        const element = document.querySelector(".white");
        
        // تابع جاوا اسکریپت برای اضافه کردن و برداشتن کلاس
        function toggleClass() {
          // اضافه کردن کلاس
          element.classList.add("dark-theme");
        
          // تنظیم زمان‌بندی برای برداشتن کلاس
          setTimeout(() => {
            element.classList.remove("dark-theme");
          }, 3000);
        }
        
        // اجرای تابع toggleClass()
        toggleClass();

          