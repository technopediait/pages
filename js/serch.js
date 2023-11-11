
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('searchBox');
    const resultsDiv = document.getElementById('results');

    searchBox.addEventListener('input', function() {
        const searchTerm = searchBox.value.toLowerCase();

        const data = [
            { title: 'آیتم 1', link: 'Hhh.html' },
            { title: 'آیتم 2', link: 'https://example.com/page2' },
            { title: 'آیتم 3', link: 'Barnameh.html' },
            // ...
        ];

        const searchResults = data.filter(item => item.title.toLowerCase().includes(searchTerm));

        displayResults(searchResults);
    });

    function displayResults(results) {
        resultsDiv.innerHTML = '';

        if (results.length === 0) {
            resultsDiv.innerHTML = 'موردی یافت نشد.';
        } else {
            results.forEach(result => {
                const resultLink = document.createElement('a');
                resultLink.textContent = result.title;
                resultLink.href = result.link; // از مقدار لینک مربوط به هر نتیجه استفاده می‌کنیم
                resultsDiv.appendChild(resultLink);
            });
        }
    }
});