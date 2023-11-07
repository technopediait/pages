
    const token = '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';
    const repoOwner = 'technopediait';
    const repoName = 'pages';
    const filePath = 'test.html';

    document.getElementById('githubForm').addEventListener('submit', async (event) => {
        event.preventDefault();

        const message = document.getElementById('message').value;
        const content = document.getElementById('content').value;

        // ارسال اطلاعات به GitHub
        // نحوه ارسال داده و ایجاد درخواست POST با استفاده از fetch API یا XMLHttpRequest به عهده‌ی شماست.
        // متد fetch را به عنوان یک نمونه نمایشی ارائه دادم.

        try {
            // ایجاد درخواست
            const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message,
                    content: btoa(content), // انکدینگ Base64 محتوا
                }),
            });

            if (response.status === 201) {
                alert('اطلاعات با موفقیت ارسال شد.');
            } else {
                alert('خطا در ارسال اطلاعات به GitHub.');
            }
        } catch (error) {
            console.error('خطا:', error);
        }
    });
