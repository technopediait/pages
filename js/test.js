

// جمع‌آوری اطلاعات فرم
const data = {
  filename: document.querySelector("input[name='filename']").value,
  content: document.querySelector("textarea[name='content']").value,
  type: document.querySelector("select[name='type']").value,
};

// ارسال اطلاعات به مخزن گیت هاب
axios({
  method: "POST",
  url: "https://api.github.com/repos/technopediait/pages/contents/[index.html]",
  headers: {
    Authorization: `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`,
  },
  data: data,
})
  .then((response) => {
    // موفقیت
    console.log(response);
  })
  .catch((error) => {
    // خطا
    console.log(error);
  });



 