// دریافت مجوز نوتیفیکیشن از کاربر
document.getElementById('sendNotification').addEventListener('click', function() {
  if ('Notification' in window) {
      if (Notification.permission === 'granted') {
          sendNotification();
      } else if (Notification.permission !== 'denied') {
          Notification.requestPermission().then(function(permission) {
              if (permission === 'granted') {
                  sendNotification();
              }
          });
      }
  }
});

// ارسال نوتیفیکیشن با استفاده از اطلاعات ورودی فرم
function sendNotification() {
  const title = document.getElementById('notificationTitle').value;
  const text = document.getElementById('notificationText').value;

  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
          registration.showNotification(title, {
              body: text
          });
      });
  }
}
