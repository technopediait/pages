const { Octokit } = require("@octokit/rest");

// ایجاد یک نمونه از Octokit با توکن دسترسی شخصی
const octokit = new Octokit({
  auth: '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',
});

async function updateFile() {
  // دریافت محتوای فعلی فایل
  const { data: file } = await octokit.repos.getContent({
    owner: 'technopediait',
    repo: 'pages',
    path: 'index.html',
  });

  // تبدیل محتوای فایل از base64 به utf-8
  const content = Buffer.from(file.content, 'base64').toString();

  // تغییر محتوای فایل
  const newContent = content.replace('<p>', '<p>Your new content');

  // ثبت تغییرات در گیت‌هاب
  await octokit.repos.createOrUpdateFileContents({
    owner: 'technopediait',
    repo: 'pages',
    path: 'index.html',
    message: 'update index.html',
    content: Buffer.from(newContent).toString('base64'),
    sha: file.sha,
  });
}

updateFile().catch(console.error);