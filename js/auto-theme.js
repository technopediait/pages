function sendNotification() {
  // ابتدا بررسی کنید که آیا مرورگر از API Notifications پشتیبانی می‌کند
  if (Notification.permission === "granted") {
    // یک نوتیفیکیشن جدید ایجاد کنید
    const notification = new Notification("عنوان نوتیفیکیشن", {
      // محتوای نوتیفیکیشن
      body: "متن نوتیفیکیشن",
      // آیکون نوتیفیکیشن
      icon: "https://example.com/icon.png",
      // دکمه‌های نوتیفیکیشن
      buttons: [
        {
          // متن دکمه
          label: "تایید",
          // عملکرد دکمه
          onClick: () => console.log("تایید شد"),
        },
        {
          // متن دکمه
          label: "لغو",
          // عملکرد دکمه
          onClick: () => console.log("لغو شد"),
        },
      ],
    });

    // نوتیفیکیشن را نمایش دهید
    notification.show();
  } else {
    // از کاربر اجازه بگیرید
    Notification.requestPermission();
  }
}
