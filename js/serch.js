
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('searchBox');
    const resultsDiv = document.getElementById('results');

    searchBox.addEventListener('input', function() {
        const searchTerm = searchBox.value.toLowerCase();

        const data = [
            { title: 'بهترین موتور های جستجو', link: 'https://technopediait.github.io/pages/articles/enteghal-boo.html' },
            { title: 'chat GPT چیست؟', link: 'https://technopediait.github.io/pages/articles/serch-motor.html' },
            { title: 'انتقال بو از طریق اینترنت', link: 'https://technopediait.github.io/pages/articles/page.html' },
            { title: 'تکنو بات', link: 'https://technopediait.github.io/pages/test.html' },
            { title: 'کانال تلگرام تکنو پدیا', link: 'https://t.me/technopedaiit' },
            { title: 'صفحه اینستاگرام تکنو پدیا', link: 'https://instagram.com/technopediait' },
            
        ];

        const searchResults = data.filter(item => item.title.toLowerCase().includes(searchTerm));

        // تنها دو نتیجه اول را نمایش دهید اگر فرم خالی باشد
        const maxResultsToShow = (searchTerm === '') ? 4 : searchResults.length;

        displayResults(searchResults.slice(0, maxResultsToShow));
    });

    function displayResults(results) {
        resultsDiv.innerHTML = '';

        if (results.length === 0) {
            resultsDiv.innerHTML = 'موردی یافت نشد.';
        } else {
            results.forEach(result => {
                const resultLink = document.createElement('a');
                resultLink.textContent = result.title;
                resultLink.href = result.link;
                resultsDiv.appendChild(resultLink);
            });
        }
    }
});
