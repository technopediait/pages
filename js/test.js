

// جمع‌آوری اطلاعات فرم
const data = {
  filename: document.querySelector("input[name='filename']").value,
  content: document.querySelector("textarea[name='content']").value,
  type: document.querySelector("select[name='type']").value,
};

// ارسال اطلاعات به مخزن گیت هاب
axios({
  method: "POST",
  url: "https://api.github.com/repos/technopediait/pages/contents/[filename]",
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



 