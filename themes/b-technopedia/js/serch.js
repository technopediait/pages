
document.addEventListener('DOMContentLoaded', function () {

    formSearch_input.addEventListener('input', function () {
        const searchTerm = formSearch_input.value.toLowerCase();

        const data = [
            { title: 'بهترین موتور های جستجو', link: 'https://technopediait.github.io/pages/articles/page3.html' },
            { title: 'chat GPT چیست؟', link: 'https://technopediait.github.io/pages/articles/page.html' },
            { title: 'پتانسیل انقلابی در باطری های موبایل', link: 'https://technopediait.github.io/pages/articles/page2.html' },
            { title: 'تکنو بات', link: 'https://technopediait.github.io/pages/apps/technobat.html' },
            { title: 'کانال تلگرام تکنو پدیا', link: 'https://t.me/technopediait' },
            { title: 'صفحه اینستاگرام تکنو پدیا', link: 'https://instagram.com/technopediait' },
        ];

        const searchResults = data.filter(item => item.title.toLowerCase().includes(searchTerm));

        // تنها چهار نتیجه اول را نمایش دهید اگر فرم خالی باشد
        const maxResultsToShow = (searchTerm === '') ? 4 : searchResults.length;

        displayResults(searchResults.slice(0, maxResultsToShow));
    });

    function displayResults(results) {
        formSearchResults.innerHTML = '';

        if (results.length === 0) {
            formSearchResults.innerHTML = 'موردی یافت نشد.';
        } else {
            results.forEach(result => {
                const resultLink = document.createElement('a');
                resultLink.textContent = result.title;
                resultLink.href = result.link;
                formSearchResults.appendChild(resultLink);
            });
        }
    }
});
