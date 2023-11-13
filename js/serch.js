
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('searchBox');
    const resultsDiv = document.getElementById('results');

    searchBox.addEventListener('input', function() {
        const searchTerm = searchBox.value.toLowerCase();

        const data = [
            { title: 'آیتم 1', link: 'https://example.com/page1' },
            { title: 'آیتم 2', link: 'https://example.com/page2' },
            { title: 'آیتم 3', link: 'https://example.com/page3' },
            // ...
        ];

        const searchResults = data.filter(item => item.title.toLowerCase().includes(searchTerm));

        // تنها دو نتیجه اول را نمایش دهید اگر فرم خالی باشد
        const maxResultsToShow = (searchTerm === '') ? 2 : searchResults.length;

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
