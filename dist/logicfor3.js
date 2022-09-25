const block__1 = document.getElementById('block-1__bc')
const block__2 = document.getElementById('block-2__bc')
const block__3 = document.getElementById('block-3__bc')
const block__4 = document.getElementById('block-4__bc')
const block__5 = document.getElementById('block-5__bc')

if (window.innerWidth < 1000) {
jQuery(document).ready(doOnOrientationChange())
// $(window).on("orientationchange",function(){
//     if (window.matchMedia("(orientation: landscape)").matches && window.innerWidth < 1000)   {
//         alert("A")
        // block__1.classList.add('display-none')
        // block__2.classList.add('display-none')
        // block__3.classList.add('display-none')
        // block__4.classList.add('display-none')
        // block__5.classList.remove('display-none')
//     }
//     if (window.matchMedia("(orientation: portrait)").matches && window.innerWidth < 1000) {
//         alert("B")
        // block__1.classList.remove('display-none')
        // block__2.classList.remove('display-none')
        // block__3.classList.remove('display-none')
        // block__4.classList.remove('display-none')
        // block__5.classList.add('display-none')
//     }
//   });

function doOnOrientationChange() {
    if (window.innerWidth < 1000) {
    switch(window.orientation) {
      case 90:
        block__1.classList.add('display-none')
        block__2.classList.add('display-none')
        block__3.classList.add('display-none')
        block__4.classList.add('display-none')
        block__5.classList.remove('display-none')
        break;
      case -90:
        block__1.classList.add('display-none')
        block__2.classList.add('display-none')
        block__3.classList.add('display-none')
        block__4.classList.add('display-none')
        block__5.classList.remove('display-none')
        break;
      case 0:
        block__1.classList.remove('display-none')
        block__2.classList.remove('display-none')
        block__3.classList.remove('display-none')
        block__4.classList.remove('display-none')
        block__5.classList.add('display-none')
        break;
      case 180:
        block__1.classList.remove('display-none')
        block__2.classList.remove('display-none')
        block__3.classList.remove('display-none')
        block__4.classList.remove('display-none')
        block__5.classList.add('display-none')
        break;
      default:
        break;
    }}
}


window.addEventListener('orientationchange', doOnOrientationChange);

// Initial execution if needed
doOnOrientationChange();

}


const flavour1 = document.getElementById("dropdown-flavour-1")
const flavour2 = document.getElementById("dropdown-flavour-2")
const flavour3 = document.getElementById("dropdown-flavour-3")
const flavour4 = document.getElementById("dropdown-flavour-4")
const flavour5 = document.getElementById("dropdown-flavour-5")
const flavour6 = document.getElementById("dropdown-flavour-6")
const flavour7 = document.getElementById("dropdown-flavour-7")
const flavour8 = document.getElementById("dropdown-flavour-8")
const flavour9 = document.getElementById("dropdown-flavour-9")
const flavour10 = document.getElementById("dropdown-flavour-10")


const descriptionContainer = document.getElementById("description-container")
const prevDescription = document.getElementById("slider-description")
const mySwiper = document.querySelector(".mySwiper")
// console.log(description)

console.log(flavour1)

if (flavour1) {
flavour1.addEventListener("click", () => {
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = ""
    const description = document.createElement('h1')
    // description.classList.add("f-a")
    descriptionContainer.innerHTML = "";
    prevDescription.innerHTML = "";
    description.innerHTML = `
    Energy Drink. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `;
    deskDescription.innerHTML = `
    Energy Drink. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    descriptionContainer.appendChild(description)
    deskDescriptionContainer.appendChild(deskDescription)
})
}

if (flavour2) {
flavour2.addEventListener("click", () => {
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = ""
    const description = document.createElement('h1')
    description.id = "description";
    descriptionContainer.innerHTML = "";
    prevDescription.innerHTML = "";
    description.innerHTML = `
    Aloe Grape. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    deskDescription.innerHTML = `
    Aloe Grape. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    descriptionContainer.appendChild(description)
    deskDescriptionContainer.appendChild(deskDescription)
})
}

if (flavour3) {
flavour3.addEventListener("click", () => {
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = ""
    const description = document.createElement('h1')
    description.id = "description";
    descriptionContainer.innerHTML = "";
    prevDescription.innerHTML = "";
    description.innerHTML = `
    Blueberry Lemonade. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    deskDescription.innerHTML = `
    Blueberry Lemonade. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    descriptionContainer.appendChild(description)
    deskDescriptionContainer.appendChild(deskDescription)
})
}

if (flavour4) {
flavour4.addEventListener("click", () => {
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = ""
    const description = document.createElement('h1')
    descriptionContainer.innerHTML = "";
    prevDescription.innerHTML = "";
    description.innerHTML = `
    Strawberry Lychee. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    deskDescription.innerHTML = `
    Strawberry Lychee. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    descriptionContainer.appendChild(description)
    deskDescriptionContainer.appendChild(deskDescription)
})
}

if (flavour5) {
flavour5.addEventListener("click", () => {
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = ""
    const description = document.createElement('h1')
    descriptionContainer.innerHTML = "";
    prevDescription.innerHTML = "";
    description.innerHTML = `
    Ice Cream. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    deskDescription.innerHTML = `
    Ice Cream. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    descriptionContainer.appendChild(description)
    deskDescriptionContainer.appendChild(deskDescription)
})
}

if (flavour6) {
flavour6.addEventListener("click", () => {
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = ""
    const description = document.createElement('h1')
    descriptionContainer.innerHTML = "";
    prevDescription.innerHTML = "";
    description.innerHTML = `
    Mixed Berrie. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    deskDescription.innerHTML = `
    Mixed Berrie. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    descriptionContainer.appendChild(description)
    deskDescriptionContainer.appendChild(deskDescription)
})
}

if (flavour7) {
flavour7.addEventListener("click", () => {
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = ""
    const description = document.createElement('h1')
    descriptionContainer.innerHTML = "";
    prevDescription.innerHTML = "";
    description.innerHTML = `
    Fruit Gummies. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    deskDescription.innerHTML = `
    Fruit Gummies. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    descriptionContainer.appendChild(description)
    deskDescriptionContainer.appendChild(deskDescription)
})
}

if (flavour8) {
flavour8.addEventListener("click", () => {
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = ""
    const description = document.createElement('h1')
    descriptionContainer.innerHTML = "";
    prevDescription.innerHTML = "";
    description.innerHTML = `
    Pina Colada. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    deskDescription.innerHTML = `
    Pina Colada. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    descriptionContainer.appendChild(description)
    deskDescriptionContainer.appendChild(deskDescription)
})
}

if (flavour9) {
flavour9.addEventListener("click", () => {
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = ""
    const description = document.createElement('h1')
    descriptionContainer.innerHTML = "";
    prevDescription.innerHTML = "";
    description.innerHTML = `
    Mango Watermelon. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    deskDescription.innerHTML = `
    Mango Watermelon. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    descriptionContainer.appendChild(description)
    deskDescriptionContainer.appendChild(deskDescription)
})
}

if (flavour10) {
flavour10.addEventListener("click", () => {
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = ""
    const description = document.createElement('h1')
    descriptionContainer.innerHTML = "";
    prevDescription.innerHTML = "";
    description.innerHTML = `
    Blueberry Ice. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    deskDescription.innerHTML = `
    Blueberry Ice. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    `
    descriptionContainer.appendChild(description)
    deskDescriptionContainer.appendChild(deskDescription)
})
}

function width(){
  return window.innerWidth 
      || document.documentElement.clientWidth 
      || document.body.clientWidth 
      || 0;
}

function height(){
  return window.innerHeight 
      || document.documentElement.clientHeight 
      || document.body.clientHeight 
      || 0;
}


console.log(width(), height())




// function checkedActive (arr) {
//     arr.filter
// }

// var index = 0;
// let touchstartX = 0;
// let touchendX = 0;





// mySwiper.addEventListener('touchstart', e => {
//   touchstartX = e.changedTouches[0].screenX
// })

// mySwiper.addEventListener('touchend', e => {
  
//   touchendX = e.changedTouches[0].screenX
//   console.log(touchstartX, touchendX)
//   checkDirection(index)
//   if (index === 1) {
//     const description = document.createElement('h1') 
//     const title = document.createElement("div")
//     title.classList.add("dropdown__text")
//     titleContainer.innerHTML = "";
//     descriptionContainer.innerHTML = "";
//     prevDescription.innerHTML = "";
//     title.innerHTML = `Energy Drink`
//     description.innerHTML = `
//     Energy Drink. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     `
//     titleContainer.appendChild(title)
//     descriptionContainer.appendChild(description)
//   }
//   if (index === 2) {
//     const description = document.createElement('h1')
//     const title = document.createElement("div")
//     title.classList.add("dropdown__text")
//     titleContainer.innerHTML = "";
//     descriptionContainer.innerHTML = "";
//     prevDescription.innerHTML = "";
//     title.innerHTML = `Aloe Grape`
//     description.innerHTML = `
//     Aloe Grape. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     `

//     titleContainer.appendChild(title)
//     descriptionContainer.appendChild(description)
//   }
//   if (index === 3) {
//     const description = document.createElement('h1')
//     const title = document.createElement("div")
//     title.classList.add("dropdown__text")
//     titleContainer.innerHTML = "";
//     descriptionContainer.innerHTML = "";
//     prevDescription.innerHTML = "";
//     title.innerHTML = `Blueberry Lemonade`
//     description.innerHTML = `
//     Blueberry Lemonade. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     `

//     titleContainer.appendChild(title)
//     descriptionContainer.appendChild(description)
//   }
//   if (index === 4) {
//     const description = document.createElement('h1')
//     const title = document.createElement("div")
//     title.classList.add("dropdown__text")
//     titleContainer.innerHTML = "";
//     descriptionContainer.innerHTML = "";
//     prevDescription.innerHTML = "";
//     title.innerHTML = `Strawberry Lychee`
//     description.innerHTML = `
//     Strawberry Lychee. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     `
//     titleContainer.appendChild(title)
//     descriptionContainer.appendChild(description)
//   }
//   if (index === 5) {
//     const description = document.createElement('h1') 
//     const title = document.createElement("div")
//     title.classList.add("dropdown__text")
//     titleContainer.innerHTML = "";
//     descriptionContainer.innerHTML = "";
//     prevDescription.innerHTML = "";
//     title.innerHTML = `Ice Cream`
//     description.innerHTML = `
//     Ice Cream. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     `

//     titleContainer.appendChild(title)
//     descriptionContainer.appendChild(description)
//   }
//   if (index === 6) {
//     const description = document.createElement('h1') 
//     const title = document.createElement("div")
//     title.classList.add("dropdown__text")
//     titleContainer.innerHTML = "";
//     descriptionContainer.innerHTML = "";
//     prevDescription.innerHTML = "";
//     title.innerHTML = `Mixed Berrie`
//     description.innerHTML = `
//     Mixed Berrie. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     `

//     titleContainer.appendChild(title)
//     descriptionContainer.appendChild(description)
//   }
//   if (index === 7) {
//     const description = document.createElement('h1') 
//     const title = document.createElement("div")
//     title.classList.add("dropdown__text")
//     titleContainer.innerHTML = "";
//     descriptionContainer.innerHTML = "";
//     title.innerHTML = `Fruit Gummies`
//     prevDescription.innerHTML = "";
//     description.innerHTML = `
//     Fruit Gummies. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     `

//     titleContainer.appendChild(title)
//     descriptionContainer.appendChild(description)
//   }
//   if (index === 8) {
//     const description = document.createElement('h1')
//     const title = document.createElement("div")
//     title.classList.add("dropdown__text")
//     titleContainer.innerHTML = ""; 
//     descriptionContainer.innerHTML = "";
//     title.innerHTML = `Pina Colada`
//     prevDescription.innerHTML = "";
//     description.innerHTML = `
//     Pina Colada. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     `

//     titleContainer.appendChild(title)
//     descriptionContainer.appendChild(description)
//   }
//   if (index === 9) {
//     const description = document.createElement('h1') 
//     const title = document.createElement("div")
//     title.classList.add("dropdown__text")
//     titleContainer.innerHTML = "";
//     descriptionContainer.innerHTML = "";
//     title.innerHTML = `Mango Watermelon`
//     prevDescription.innerHTML = "";
//     description.innerHTML = `
//     Mango Watermelon. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     `

//     titleContainer.appendChild(title)
//     descriptionContainer.appendChild(description)
//   }
//   if (index === 0) {
//     const description = document.createElement('h1') 
//     const title = document.createElement("div")
//     title.classList.add("dropdown__text")
//     titleContainer.innerHTML = "";
//     descriptionContainer.innerHTML = "";
//     title.innerHTML = ` Blueberry Ice`
//     prevDescription.innerHTML = "";
//     description.innerHTML = `
//     Blueberry Ice. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     `

//     titleContainer.appendChild(title)
//     descriptionContainer.appendChild(description)
//   }
//   return index;
// })


// function checkDirection(index) {
//   if (touchendX + 10 < touchstartX && index === 0)
//     {
//     window.index =  index + 1
//         } else
//   if (touchendX > touchstartX + 10 && index === 0)
//     {
//     window.index = 9} else
//   if (touchendX + 10 < touchstartX && index === 9)
//     {
//         window.index = 0} else
//   if (touchendX + 5 < touchstartX && index !== 0 && index !== 9)
//    {
//        window.index = index + 1} else
//   if (touchendX > touchstartX + 10 && index !== 0 && index !== 9)
//    {
//        window.index = index - 1}
// }
