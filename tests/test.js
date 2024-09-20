// بارگیری فایل JSON
fetch('data.json')
    .then(response => response.json()) // تبدیل پاسخ به JSON
    .then(data => {
        // پردازش داده
        displayData(data);
    })
    .catch(error => {
        console.error('Error loading the JSON file:', error);
    });

// نمایش داده‌ها در صفحه HTML
function displayData(data) {
    const container = document.getElementById('data-container');
    
    // ایجاد عناصر HTML بر اساس داده JSON
    data.forEach(item => {
        const listItem = document.createElement('div');
        listItem.textContent = `Name: ${item.name}, Age: ${item.age}`;
        container.appendChild(listItem);
    });
}







































const text = document.querySelector(".sec-text");
const textLoad = () => {
 setTimeout(() => {
  text.textContent = "فریلنسر"; 

 }, 0);
 setTimeout(() => {
  text.textContent = " بلاگر"; 


 }, 4000);
 
 setTimeout(() => {
  text.textContent = "یوتیوبر"; 


 }, 8000);
}

textLoad()
setInterval(textLoad, 12000)
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        button{
            width: 100px;
            height: 100px;
        }
        .hoder{
            background-color: azure;
            height: 100px;
            font-size: 1rem;
        }

        span{
            animation: blinker 1s linear infinite;
        }
        @keyframes blinker {
            50% {
                 opacity: 0; 
                }
            
        }
    </style>
</head>
<body>
    <section>
        <h4>تایپ اسکریپ مانند چت جی پی تی</h4>
        <div id="txtholder" class="holder"></div>
        <div class="btn">
            <button onclick="typeWriter()"> شروع  </button>
        </div>
    </section>

    <script>

        const res = [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur ratione quidem aperiam velit at. Quos doloremque similique est minus neque tempora, alias quas aperiam quaerat eius, quod temporibus repellat iusto voluptates mollitia reprehenderit? Perspiciatis rem fuga totam vero commodi deserunt recusandae cupiditate velit hic harum laboriosam necessitatibus voluptates dolorem non, tenetur ut numquam unde, in repudiandae? Magni, nobis voluptatum!"
        ]
        let textPosition = 0 ;
        let speed = 20;
        
        
        const typeWriter = () => {
            document.getElementById('txtholder').innerHTML = res
            res[0].supstring(0, textPosition) + 
            "<span id='blinker'>\u25ae</span>";
            if(textPosition++ < res[0].length){
                setTimeout(typeWriter, speed);
            } else {
                setTimeout(() => {
                    document.getElementById("blinker").remove();
                },3000)
            }
        };
        
    </script>
</body>
</html>
*/
