
    const token = '';

    function submitForm() {
        const text = document.getElementById("text").value;
        const repoOwner = 'technopediait';
        const repoName = 'pages';
        const accessToken = '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';
      
        const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/note.txt`;
      
        const data = {
          message: 'افزودن نوشتار از طریق فرم',
          content: btoa(text),
        };
      
        const headers = {
          Authorization: `token ${accessToken}`,
        };
      
        axios.put(apiUrl, data, { headers })
          .then(response => {
            console.log('موفقیت‌آمیز: ', response.data);
            // انجام عملیات نمایش در اینجا
          })
          .catch(error => {
            console.error('خطا: ', error);
            // نمایش پیغام خطا در اینجا
          });
      }
      //نمایش اطلاعات
      function displayTextFromGitHub() {
        const repoOwner = 'technopediait';
        const repoName = 'pages';
        const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/note.txt`;
      
        axios.get(apiUrl)
          .then(response => {
            const decodedContent = atob(response.data.content);
            document.getElementById("displayText").innerText = decodedContent;
          })
          .catch(error => {
            console.error('خطا: ', error);
            // نمایش پیغام خطا در اینجا
          });
      }
      