//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

const axios = require("axios");

const updateTag = async (token, repo, filename, tag, newContent) => {
  const url = `https://api.github.com/repos/${repo}/contents/${filename}`;
  const headers = {
    "Authorization": `Bearer ${token}`,
  };
  const data = `<${tag}>${newContent}</${tag}>`;

  const response = await axios.put(url, headers, data);
  return response.status === 200;
};

const token = "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";
const repo = "technopediait/pages";
const filename = "index.html";
const tag = "h1";
const newContent = "This is a new heading";

const success = await updateTag(token, repo, filename, tag, newContent);

if (success) {
  console.log("تگ HTML با موفقیت بروزرسانی شد.");
} else {
  console.log("خطایی در بروزرسانی تگ HTML رخ داد.");
}
