self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    // اضافه کردن عملکردی برای زمان کلیک بر روی نوتیفیکیشن
});