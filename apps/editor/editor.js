// window.onload = () => {

// };

Content();

function Content() {
  var style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "http://localhost/pages/apps/editor/editor.css";
  document.head.appendChild(style);
  var SBPTE = document.getElementById("SBPTE");

  var SELECT = '<select class="format-action" id="mySelect" data-action="heading"><option value="">هیچ کدام</option><option value="p">پاراگراف</option><option value="h1">عنوان اصلی</option><option value="h2">عنوان فرعی</option><option value="h3">زیر عنوان</option></select>';
  var BUTTON = '<button type="button" class="format-action" data-action="bold" onclick="setFormat('+'\'bold\''+')"><i class="fa fa-bold"></i></button><button type="button" class="format-action" onclick="setFormat('+'\'italic\''+')" data-action="italic"><i class="fa fa-italic"></i></button><button type="button" class="format-action" onclick="setFormat('+'\'underline\''+')" data-action="underline"><i class="fa fa-underline"></i></button><button type="button" class="format-action" onclick="setFormat('+'\'strikethrough\''+')" data-action="strikethrough"><i class="fas fa-strikethrough"></i></button><button type="button" class="format-action" onclick="setFormat('+'\'insertOrderedList\''+')" data-action="insertOrderedList"><i class="fa fa-list-ol"></i></button><button type="button" class="format-action" onclick="setFormat('+'\'insertUnorderedList\''+')" data-action="insertUnorderedList"><i class="fa fa-list-ul"></i></button><button type="button" class="" onclick="colorsWindow(this)"><i id="color-icon" class="fas fa-fill"></i></button><button type="button" class="" onclick="BgcolorsWindow(this)"><i id="bg-color-icon" class="fas fa-fill"></i></button><button type="button" class="format-action" onclick="removeTextFormat()"><i class="fa fa-remove-format"></i></button><button type="button" onclick="insertLink()" class="format-action"><i class="fa fa-link"></i></button><button type="button" class="format-action" onclick="createTable()"><i class="fa fa-table"></i></button><button type="button" onclick="imgWindow()"><i class="fa fa-image"></i></button><button type="button" class="format-action" onclick="setFormat('+'\'justifyLeft\''+')" data-action="justifyLeft"><i class="fa fa-align-left"></i></button><button type="button" class="format-action" onclick="setFormat('+'\'justifyCenter\''+')" data-action="justifyCenter"><i class="fa fa-align-center"></i></button><button type="button" class="format-action" onclick="setFormat('+'\'justifyRight\''+')" data-action="justifyRight"><i class="fa fa-align-right"></i></button><button type="button" onclick="sourceCodeWindow()" id="source-code-btn"><i class="fas fa-code"></i></button><button class="toolbar-button" onclick="deleteTable()">حذف جدول</button>';
  var TOOLBAR ='<div id="toolbar">'+SELECT+BUTTON+'</div>';
  var IMG_WINDOW = '<div class="img-window"></div>';
  var COLORS_WINDOW = '<div id="colors-window"><button type="button" class="colors" style="background-color: blue" onclick="setTextColor(\'#0000f6\')"></button><button type="button" class="colors" style="background-color: red" onclick="setTextColor(\'red\')"></button><button type="button" class="colors" style="background-color: green" onclick="setTextColor(\'green\')"></button><span>رنگ های بیشتر: </span><input type="color" id="colorPicker" /></div>';
  var BGCOLORS_WINDOW = '<div id="bg-colors-window"><button type="button" class="colors" style="background-color: blue" onclick="setBgColor(\'#0000f6\')"></button><button type="button" class="colors" style="background-color: red" onclick="setBgColor(\'red\')"></button><button type="button" class="colors" style="background-color: green" onclick="setBgColor(\'green\')"></button><span>رنگ های بیشتر: </span><input type="color" id="bg-colorPicker" /></div>';
  var WINDOWS = '<div class="windows">'+IMG_WINDOW+COLORS_WINDOW+BGCOLORS_WINDOW+'</div>';
  var LENGTH = '<span id="length">0</span>';
  var EDITOe = '';
  SBPTE.innerHTML = TOOLBAR+WINDOWS+LENGTH+EDITOe;
}

function updateTextarea() {
  var editorContent = document.getElementById("editor").innerHTML;
  document.getElementById("hiddenTextarea").textContent = editorContent;
  tlen = editorContent.toLowerCase();
  document.getElementById("length").innerHTML = tlen.length;
  if (editorContent == "") {
    document.execCommand("formatBlock", false, "p");
  }
}

var editor = document.querySelector("#editor");
var toolbar = document.querySelector("#toolbar");

function insertLink() {
  var url = prompt("Enter URL:", "https://");
  if (url) {
    document.execCommand("createLink", false, url);
  }
}

function insertImage() {
  var imageUrl = document.getElementById("imageLinkInput").value;
  var imgAlt = document.getElementById("img-alt").value;
  var imgWidth = document.getElementById("img-width").value;
  var imgHeight = document.getElementById("img-height").value;

  if (imageUrl.trim() !== "") {
    var imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.alt = imgAlt;
    imageElement.style.width = imgWidth;
    imageElement.style.height = imgHeight;
    document.getElementById("editor").appendChild(imageElement);
    imgWindow();
  }
}

function removeTextFormat() {
  document.execCommand("removeFormat", false, null);
  editor.focus();
}

function createTable() {
  var tableHTML = '<table border="1">';
  var rows = prompt("Enter number of rows:");
  var columns = prompt("Enter number of columns:");

  for (var i = 0; i < rows; i++) {
    tableHTML += "<tr>";
    for (var j = 0; j < columns; j++) {
      tableHTML += "<td>سلول " + (i + 1) + "-" + (j + 1) + "</td>";
    }
    tableHTML += "</tr>";
  }

  tableHTML += "</table>";

  document.execCommand("insertHTML", false, tableHTML);
}

function deleteTable() {
  var selection = document.getSelection();
  if (selection.rangeCount > 0) {
    var range = selection.getRangeAt(0);
    var table = range.startContainer;
    while (table && table.nodeName.toLowerCase() !== "table") {
      table = table.parentNode;
    }
    if (table && table.nodeName.toLowerCase() === "table") {
      table.remove();
    }
  }
}

document.getElementById("colorPicker").addEventListener("input", function () {
  var colorIcon = document.getElementById("color-icon");
  var colorPicker = document.getElementById("colorPicker");
  var colorValue = colorPicker.value;
  colorIcon.style.color = colorValue;
  document.execCommand("foreColor", false, colorValue);
  editor.focus();
});

document.getElementById("bg-colorPicker").addEventListener("input", function () {
    var colorIcon = document.getElementById("bg-color-icon");
    var colorPicker = document.getElementById("bg-colorPicker");
    var colorValue = colorPicker.value;
    colorIcon.style.color = colorValue;
    document.execCommand("hiliteColor", false, colorValue);
    editor.focus();
  });

function getSelectedTextColor() {
  var Color = document.queryCommandValue("ForeColor");
  document.getElementById("color-icon").style.color = Color;
  var BgColor = document.queryCommandValue("backColor");
  document.getElementById("bg-color-icon").style.color = BgColor;
  var currentFormat = document.queryCommandValue("formatBlock");
  if (currentFormat === "p") {
    document.getElementById("mySelect").options[1].selected = true;
  } else if (currentFormat === "h1") {
    document.getElementById("mySelect").options[2].selected = true;
  } else if (currentFormat === "h2") {
    document.getElementById("mySelect").options[3].selected = true;
  } else if (currentFormat === "h3") {
    document.getElementById("mySelect").options[4].selected = true;
  } else {
    document.getElementById("mySelect").options[0].selected = true;
    document.execCommand("formatBlock", false, "p");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (editor.innerHTML == "") {
    document.execCommand("formatBlock", false, "p");
  }
});

toolbar.querySelector('select[data-action="heading"]').addEventListener("change", function (event) {
    var selectedHeading = event.target.value;
    if (selectedHeading) {
      document.execCommand("formatBlock", false, selectedHeading);
    }
  });
document.getElementById("editor").addEventListener("input", function () {
  setActiveState();
  getSelectedTextColor();
});

function setActiveState() {
  var formatActions = document.querySelectorAll(".format-action");
  formatActions.forEach(function (action) {
    var command = action.dataset.action;
    if (document.queryCommandState(command)) {
      action.classList.add("active");
    } else {
      action.classList.remove("active");
    }
  });
}

function setFormat(action) {
  if (action) {
    document.execCommand(action, false, null);
    setActiveState();
    if (action !== "heading") {
      editor.focus();
    }
  }
}

function setTextColor(colorValue) {
  document.execCommand("foreColor", false, colorValue);
  var colorIcon = document.getElementById("color-icon");
  colorIcon.style.color = colorValue;
  colorsWindow();
  editor.focus();
}

function setBgColor(colorValue) {
  document.execCommand("hiliteColor", false, colorValue);
  var colorIcon = document.getElementById("bg-color-icon");
  colorIcon.style.color = colorValue;
  BgcolorsWindow();
  editor.focus();
}

function colorsWindow(btn) {
  var colors_Window = document.getElementById("colors-window");
  if (colors_Window.style.display === "flex") {
    colors_Window.style.display = "none";
    btn.classList.remove("ab");
    editor.focus();
  } else {
    colors_Window.style.display = "flex";
    btn.classList.add("ab");
  }
}

function BgcolorsWindow(btn) {
  var colors_Window = document.getElementById("bg-colors-window");
  if (colors_Window.style.display === "flex") {
    colors_Window.style.display = "none";
    btn.classList.remove("ab");
    editor.focus();
  } else {
    colors_Window.style.display = "flex";
    btn.classList.add("ab");
  }
}

function imgWindow() {
  var img_window = document.querySelector(".img-window");
  if (img_window.style.display === "flex") {
    img_window.style.display = "none";
    img_window.innerHTML = "";
  } else {
    img_window.style.display = "flex";
    img_window.innerHTML =
      '<label for="imageLinkInput">لینک تصویر:</label><input type="url" id="imageLinkInput" value="https://" /><label for="img-alt">توضیحات تصویر:</label><input type="text" id="img-alt" placeholder="تصویر را توصیف کنید." /><div class="row"><label for="img-width">عرض:</label><input type="text" id="img-width" value="100%" /><label for="img-height">طول:</label><input type="text" id="img-height" value="auto" /></div><center><button onclick="insertImage()" class="submit">ذخیره تصویر</button><button onclick="imgWindow()" class="submit" style="background-color: red">لغو</button></center>';
  }
}

function sourceCodeWindow() {
  var CodeWindow = document.getElementById("hiddenTextarea");
  if (CodeWindow.style.display === "block") {
    CodeWindow.style.display = "none";
    document.getElementById("source-code-btn").classList.remove("active");
  } else {
    CodeWindow.style.display = "block";
    document.getElementById("source-code-btn").classList.add("active");
  }
}

