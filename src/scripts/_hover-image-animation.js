$(document).ready(function () {

    const textArr = ['Дмитрий', 'Алина', 'Коля', 'Артем', 'Кирилл', 'Амина', 'Катя', 'Марина']

    const textContainer = document.getElementById("text_container")

    const images = $('.team-photos picture')
    Array.prototype.forEach.call(images, (child) => {
        (function(){
            child.addEventListener("mouseover", function (event) {
                // console.log("image " + index + " over")
                textContainer.innerHTML = ``
                textContainer.classList.add("under-text")
                const textOver = document.createElement('p')
                textOver.classList.add("animated-paragraph_item_no-scroll_1")
                textOver.innerHTML  = `                            
                <span class="ov-hidden"><span>
                    Дмитрий
                </span></span>
                `
                textContainer.appendChild(textOver)
            });
        })();
        (function(){    
            child.addEventListener("mouseleave", function (event) {
                // console.log("image " + index + " leave")
                textContainer.innerHTML = ``
                textContainer.classList.add("under-text")
                const textLeave = document.createElement('p')
                textLeave.classList.add("animated-paragraph_item_no-scroll_1")
                textLeave.innerHTML = `                            
                <span class="ov-hidden"><span>
                    Мы помогаем бизнесу увеличивать продажи,
                </span></span>
                <span class="ov-hidden"><span>
                    соответствовать трендам и обновляться
                </span></span>
                `
                textContainer.appendChild(textLeave)
        
            });
        })();  
      });
    
    // console.log(typeof images)


})