const buttonPrev = document.getElementById('button-prev')
const buttonNext = document.getElementById('button-next')
const titleContainer = document.getElementById("titleofdropdowncontainer")
const title1 = document.getElementById("title-1")
const deskDescriptionContainer = document.getElementById("container-desk-description")
const opt1 = document.getElementById("opt-1")
const opt2 = document.getElementById("opt-2") 
const opt3 = document.getElementById("opt-3")
const opt4 = document.getElementById("opt-4")
const opt5 = document.getElementById("opt-5")
const opt6 = document.getElementById("opt-6") 
const opt7 = document.getElementById("opt-7")
const opt8 = document.getElementById("opt-8")
const opt9 = document.getElementById("opt-9")
const opt10 = document.getElementById("opt-10")


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      paginationBulletRender: function (index, className) {
        return '<span  class="' + className + '">' + (index) + '</span>'
        ;
        }   
      // renderCustom: function (swiper, current, total) {
      //     var text = "<span style='background-color:white;padding:20px;'>";
      //     return current + '/' + (total - 1); 

    },
    breakpoints: {
      // when window width is >= 800px
      800: {
          slidesPerView: 1,
          spaceBetweenSlides: 50,
          navigation: {
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            paginationBulletRender: function (index, className) {
              return '<span  class="' + className + '">' + (index) + '</span>'
              ;
              }   
            // renderCustom: function (swiper, current, total) {
            //     var text = "<span style='background-color:white;padding:20px;'>";
            //     return current + '/' + (total - 1); 
      
          }
        }
      },
  });

  if (buttonNext) {
    buttonNext.addEventListener('click', () => {
      buttonNext.classList.add('buttons-hover')
      buttonPrev.classList.add('buttons-hover')
      setTimeout(function() {
      buttonNext.classList.remove('buttons-hover');
      buttonPrev.classList.remove('buttons-hover');
        }, 700);
    })
  }
  if (buttonPrev) {
    buttonPrev.addEventListener('click', () => {
      buttonNext.classList.add('buttons-hover')
      buttonPrev.classList.add('buttons-hover')
      setTimeout(function() {
      buttonPrev.classList.remove('buttons-hover');
      buttonNext.classList.remove('buttons-hover');
        }, 700);
    })
  }
 
  if (opt1) {
    opt1.addEventListener('click', () => {
      swiper.slideTo(1)
      opt1.classList.add("active-opt")
      opt2.classList.remove("active-opt")
      opt3.classList.remove("active-opt")
      opt4.classList.remove("active-opt")
      opt5.classList.remove("active-opt")
      opt6.classList.remove("active-opt")
      opt7.classList.remove("active-opt")
      opt8.classList.remove("active-opt")
      opt9.classList.remove("active-opt")
      opt10.classList.remove("active-opt")
    })
  }
  
  if (opt2) {
    opt2.addEventListener('click', () => {
      swiper.slideTo(2)
      opt2.classList.add("active-opt")
      opt1.classList.remove("active-opt")
      opt3.classList.remove("active-opt")
      opt4.classList.remove("active-opt")
      opt5.classList.remove("active-opt")
      opt6.classList.remove("active-opt")
      opt7.classList.remove("active-opt")
      opt8.classList.remove("active-opt")
      opt9.classList.remove("active-opt")
      opt10.classList.remove("active-opt")
    })
  } 

  if (opt3) {
    opt3.addEventListener('click', () => {
      swiper.slideTo(3)
      opt3.classList.add("active-opt")
      opt2.classList.remove("active-opt")
      opt1.classList.remove("active-opt")
      opt4.classList.remove("active-opt")
      opt5.classList.remove("active-opt")
      opt6.classList.remove("active-opt")
      opt7.classList.remove("active-opt")
      opt8.classList.remove("active-opt")
      opt9.classList.remove("active-opt")
      opt10.classList.remove("active-opt")
    })
  }
  
  if (opt4) {
    opt4.addEventListener('click', () => {
      swiper.slideTo(4)
      opt4.classList.add("active-opt")
      opt2.classList.remove("active-opt")
      opt3.classList.remove("active-opt")
      opt1.classList.remove("active-opt")
      opt5.classList.remove("active-opt")
      opt6.classList.remove("active-opt")
      opt7.classList.remove("active-opt")
      opt8.classList.remove("active-opt")
      opt9.classList.remove("active-opt")
      opt10.classList.remove("active-opt")
    })
  } 
  if (opt5) {
    opt5.addEventListener('click', () => {
      swiper.slideTo(5)
      opt5.classList.add("active-opt")
      opt2.classList.remove("active-opt")
      opt3.classList.remove("active-opt")
      opt4.classList.remove("active-opt")
      opt1.classList.remove("active-opt")
      opt6.classList.remove("active-opt")
      opt7.classList.remove("active-opt")
      opt8.classList.remove("active-opt")
      opt9.classList.remove("active-opt")
      opt10.classList.remove("active-opt")
      
    })
  }
  
  if (opt6) {
    opt6.addEventListener('click', () => {
      swiper.slideTo(6)
      opt6.classList.add("active-opt")
      opt2.classList.remove("active-opt")
      opt3.classList.remove("active-opt")
      opt4.classList.remove("active-opt")
      opt5.classList.remove("active-opt")
      opt1.classList.remove("active-opt")
      opt7.classList.remove("active-opt")
      opt8.classList.remove("active-opt")
      opt9.classList.remove("active-opt")
      opt10.classList.remove("active-opt")
    })
  } 
  if (opt7) {
    opt7.addEventListener('click', () => {
      swiper.slideTo(7)
      opt7.classList.add("active-opt")
      opt2.classList.remove("active-opt")
      opt3.classList.remove("active-opt")
      opt4.classList.remove("active-opt")
      opt5.classList.remove("active-opt")
      opt6.classList.remove("active-opt")
      opt1.classList.remove("active-opt")
      opt8.classList.remove("active-opt")
      opt9.classList.remove("active-opt")
      opt10.classList.remove("active-opt")
      
    })
  }
  
  if (opt8) {
    opt8.addEventListener('click', () => {
      swiper.slideTo(8)
      opt8.classList.add("active-opt")
      opt2.classList.remove("active-opt")
      opt3.classList.remove("active-opt")
      opt4.classList.remove("active-opt")
      opt5.classList.remove("active-opt")
      opt6.classList.remove("active-opt")
      opt7.classList.remove("active-opt")
      opt1.classList.remove("active-opt")
      opt9.classList.remove("active-opt")
      opt10.classList.remove("active-opt")
    })
  } 

  if (opt9) {
    opt9.addEventListener('click', () => {
      swiper.slideTo(9)
      opt9.classList.add("active-opt")
      opt2.classList.remove("active-opt")
      opt3.classList.remove("active-opt")
      opt4.classList.remove("active-opt")
      opt5.classList.remove("active-opt")
      opt6.classList.remove("active-opt")
      opt7.classList.remove("active-opt")
      opt8.classList.remove("active-opt")
      opt1.classList.remove("active-opt")
      opt10.classList.remove("active-opt")
    })
  } 

  if (opt10) {
    opt10.addEventListener('click', () => {
      swiper.slideTo(10)
      opt10.classList.add("active-opt")
      opt2.classList.remove("active-opt")
      opt3.classList.remove("active-opt")
      opt4.classList.remove("active-opt")
      opt5.classList.remove("active-opt")
      opt6.classList.remove("active-opt")
      opt7.classList.remove("active-opt")
      opt8.classList.remove("active-opt")
      opt9.classList.remove("active-opt")
      opt1.classList.remove("active-opt")
    })
  } 

swiper.on("transitionEnd", function(e){
  var index = swiper.realIndex;
  console.log("I'm on slide no: "+index);
  if (index === 1) {
    opt2.classList.add("active-opt")
    opt1.classList.remove("active-opt")
    opt3.classList.remove("active-opt")
    opt4.classList.remove("active-opt")
    opt5.classList.remove("active-opt")
    opt6.classList.remove("active-opt")
    opt7.classList.remove("active-opt")
    opt8.classList.remove("active-opt")
    opt9.classList.remove("active-opt")
    opt10.classList.remove("active-opt")
    const description = document.createElement('h1')
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = "" 
    const title = document.createElement("div")
    titleContainer.innerHTML = "";
    title1.innerHTML = ""
    deskDescription.innerHTML = ""
    deskDescription.innerHTML = `С ароматом ананаса.`
    const newTitle = document.createElement('h1')
    // newTitle.classList.add('animated-flavours')
    newTitle.innerHTML = `PINEAPPLE`
    titleContainer.classList.add("block-3__title-slider")
    descriptionContainer.innerHTML = "";
    prevDescription.innerHTML = "";
    title.innerHTML = `PINEAPPLE`
    description.innerHTML = `
    С ароматом ананаса.
    `
    titleContainer.appendChild(title)
    descriptionContainer.appendChild(description)
    title1.appendChild(newTitle)
    deskDescriptionContainer.appendChild(deskDescription)
  }
  if (index === 2) {
    opt3.classList.add("active-opt")
    opt2.classList.remove("active-opt")
    opt1.classList.remove("active-opt")
    opt4.classList.remove("active-opt")
    opt5.classList.remove("active-opt")
    opt6.classList.remove("active-opt")
    opt7.classList.remove("active-opt")
    opt8.classList.remove("active-opt")
    opt9.classList.remove("active-opt")
    opt10.classList.remove("active-opt")
    const description = document.createElement('h1')
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = ""
    const title = document.createElement("div")
    titleContainer.innerHTML = "";
    title1.innerHTML = ""
    deskDescription.innerHTML = ""
    deskDescription.innerHTML = `С ароматом спелой вишни.`
    const newTitle = document.createElement('h1')
    newTitle.innerHTML = `СHERRY`
    titleContainer.classList.add("block-3__title-slider")
    descriptionContainer.innerHTML = "";
    prevDescription.innerHTML = "";
    title.innerHTML = `СHERRY`
    description.innerHTML = `
    С ароматом спелой вишни.
    `

    titleContainer.appendChild(title)
    descriptionContainer.appendChild(description)
    title1.appendChild(newTitle)
    deskDescriptionContainer.appendChild(deskDescription)

  }
  if (index === 3) {
    opt4.classList.add("active-opt")
    opt2.classList.remove("active-opt")
    opt3.classList.remove("active-opt")
    opt1.classList.remove("active-opt")
    opt5.classList.remove("active-opt")
    opt6.classList.remove("active-opt")
    opt7.classList.remove("active-opt")
    opt8.classList.remove("active-opt")
    opt9.classList.remove("active-opt")
    opt10.classList.remove("active-opt")
    const description = document.createElement('h1')
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = ""
    const title = document.createElement("div")
    titleContainer.innerHTML = "";
    title1.innerHTML = ""
    deskDescription.innerHTML = ""
    deskDescription.innerHTML = `С ароматом свежей клубники.`
    const newTitle = document.createElement('h1')
    newTitle.classList.add('animated-flavours')
    newTitle.innerHTML = `STRAWBERRY`
    titleContainer.classList.add("block-3__title-slider")
    descriptionContainer.innerHTML = "";
    prevDescription.innerHTML = "";
    title.innerHTML = `STRAWBERRY`
    description.innerHTML = `
    С ароматом свежей клубники.
    `

    titleContainer.appendChild(title)
    descriptionContainer.appendChild(description)
    title1.appendChild(newTitle)
    deskDescriptionContainer.appendChild(deskDescription)

  }
  if (index === 4) {
    opt5.classList.add("active-opt")
    opt2.classList.remove("active-opt")
    opt3.classList.remove("active-opt")
    opt4.classList.remove("active-opt")
    opt1.classList.remove("active-opt")
    opt6.classList.remove("active-opt")
    opt7.classList.remove("active-opt")
    opt8.classList.remove("active-opt")
    opt9.classList.remove("active-opt")
    opt10.classList.remove("active-opt")
    const description = document.createElement('h1')
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = ""
    const title = document.createElement("div")
    titleContainer.innerHTML = "";
    title1.innerHTML = ""
    deskDescription.innerHTML = ""
    deskDescription.innerHTML = `С ароматом кисло-сладкого зеленого яблока.`
    const newTitle = document.createElement('h1')
    newTitle.classList.add('animated-flavours')
    newTitle.innerHTML = `GREEN APPLE`
    titleContainer.classList.add("block-3__title-slider")
    descriptionContainer.innerHTML = "";
    prevDescription.innerHTML = "";
    title.innerHTML = `GREEN APPLE`
    description.innerHTML = `
    С ароматом кисло-сладкого зеленого яблока.
    `
    titleContainer.appendChild(title)
    descriptionContainer.appendChild(description)
    title1.appendChild(newTitle)
    deskDescriptionContainer.appendChild(deskDescription)

  }
  if (index === 5) {
    opt6.classList.add("active-opt")
    opt2.classList.remove("active-opt")
    opt3.classList.remove("active-opt")
    opt4.classList.remove("active-opt")
    opt5.classList.remove("active-opt")
    opt1.classList.remove("active-opt")
    opt7.classList.remove("active-opt")
    opt8.classList.remove("active-opt")
    opt9.classList.remove("active-opt")
    opt10.classList.remove("active-opt")
    const description = document.createElement('h1')
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = "" 
    const title = document.createElement("div")
    titleContainer.innerHTML = "";
    title1.innerHTML = ""
    deskDescription.innerHTML = ""
    deskDescription.innerHTML = `С ароматом кислого лимона.`
    const newTitle = document.createElement('h1')
    newTitle.innerHTML = `LEMON`
    titleContainer.classList.add("block-3__title-slider")
    descriptionContainer.innerHTML = "";
    prevDescription.innerHTML = "";
    title.innerHTML = `LEMON`
    description.innerHTML = `
    С ароматом кислого лимона.
    `

    titleContainer.appendChild(title)
    descriptionContainer.appendChild(description)
    title1.appendChild(newTitle)
    deskDescriptionContainer.appendChild(deskDescription)

  }
  if (index === 6) {
    opt7.classList.add("active-opt")
    opt2.classList.remove("active-opt")
    opt3.classList.remove("active-opt")
    opt4.classList.remove("active-opt")
    opt5.classList.remove("active-opt")
    opt6.classList.remove("active-opt")
    opt1.classList.remove("active-opt")
    opt8.classList.remove("active-opt")
    opt9.classList.remove("active-opt")
    opt10.classList.remove("active-opt")
    const description = document.createElement('h1')
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = "" 
    const title = document.createElement("div")
    titleContainer.innerHTML = "";
    title1.innerHTML = ""
    deskDescription.innerHTML = ""
    deskDescription.innerHTML = `С ароматом маракуйи.`
    const newTitle = document.createElement('h1')
    newTitle.innerHTML = `PASSION FRUIT`
    titleContainer.classList.add("block-3__title-slider")
    descriptionContainer.innerHTML = "";
    prevDescription.innerHTML = "";
    title.innerHTML = `PASSION FRUIT`
    description.innerHTML = `
    С ароматом маракуйи.
    `

    titleContainer.appendChild(title)
    descriptionContainer.appendChild(description)
    title1.appendChild(newTitle)
    deskDescriptionContainer.appendChild(deskDescription)

  }
  if (index === 7) {
    opt8.classList.add("active-opt")
    opt2.classList.remove("active-opt")
    opt3.classList.remove("active-opt")
    opt4.classList.remove("active-opt")
    opt5.classList.remove("active-opt")
    opt6.classList.remove("active-opt")
    opt7.classList.remove("active-opt")
    opt1.classList.remove("active-opt")
    opt9.classList.remove("active-opt")
    opt10.classList.remove("active-opt")
    const description = document.createElement('h1')
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = "" 
    const title = document.createElement("div")
    titleContainer.innerHTML = "";
    title1.innerHTML = ""
    deskDescription.innerHTML = ""
    deskDescription.innerHTML = `С ароматом вишни и приятным холодком.`
    const newTitle = document.createElement('h1')
    newTitle.innerHTML = `CHERRY ICE`
    titleContainer.classList.add("block-3__title-slider")
    descriptionContainer.innerHTML = "";
    title.innerHTML = `CHERRY ICE`
    prevDescription.innerHTML = "";
    description.innerHTML = `
    С ароматом вишни и приятным холодком.
    `

    titleContainer.appendChild(title)
    descriptionContainer.appendChild(description)
    title1.appendChild(newTitle)
    deskDescriptionContainer.appendChild(deskDescription)

  }
  if (index === 8) {
    opt9.classList.add("active-opt")
    opt2.classList.remove("active-opt")
    opt3.classList.remove("active-opt")
    opt4.classList.remove("active-opt")
    opt5.classList.remove("active-opt")
    opt6.classList.remove("active-opt")
    opt7.classList.remove("active-opt")
    opt8.classList.remove("active-opt")
    opt1.classList.remove("active-opt")
    opt10.classList.remove("active-opt")
    const description = document.createElement('h1')
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = ""
    const title = document.createElement("div")
    titleContainer.innerHTML = "";
    title1.innerHTML = ""
    deskDescription.innerHTML = ""
    deskDescription.innerHTML = `С ароматом сладкого винограда.`
    const newTitle = document.createElement('h1')
    newTitle.innerHTML = `GRAPE` 
    titleContainer.classList.add("block-3__title-slider")
    descriptionContainer.innerHTML = "";
    title.innerHTML = `GRAPE`
    prevDescription.innerHTML = "";
    description.innerHTML = `
    С ароматом сладкого винограда.
    `

    titleContainer.appendChild(title)
    descriptionContainer.appendChild(description)
    title1.appendChild(newTitle)
    deskDescriptionContainer.appendChild(deskDescription)

  }
  if (index === 9) {
    opt10.classList.add("active-opt")
    opt2.classList.remove("active-opt")
    opt3.classList.remove("active-opt")
    opt4.classList.remove("active-opt")
    opt5.classList.remove("active-opt")
    opt6.classList.remove("active-opt")
    opt7.classList.remove("active-opt")
    opt8.classList.remove("active-opt")
    opt9.classList.remove("active-opt")
    opt1.classList.remove("active-opt")
    const description = document.createElement('h1')
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = "" 
    const title = document.createElement("div")
    titleContainer.innerHTML = "";
    title1.innerHTML = ""
    deskDescription.innerHTML = ""
    deskDescription.innerHTML = `С ароматом сочного арбуза.`
    const newTitle = document.createElement('h1')
    newTitle.innerHTML = `WATERMELON`
    titleContainer.classList.add("block-3__title-slider")
    descriptionContainer.innerHTML = "";
    title.innerHTML = `WATERMELON`
    prevDescription.innerHTML = "";
    description.innerHTML = `
    С ароматом сочного арбуза.
    `

    titleContainer.appendChild(title)
    descriptionContainer.appendChild(description)
    title1.appendChild(newTitle)
    deskDescriptionContainer.appendChild(deskDescription)

  }
  if (index === 0) {
    opt1.classList.add("active-opt")
    opt2.classList.remove("active-opt")
    opt3.classList.remove("active-opt")
    opt4.classList.remove("active-opt")
    opt5.classList.remove("active-opt")
    opt6.classList.remove("active-opt")
    opt7.classList.remove("active-opt")
    opt8.classList.remove("active-opt")
    opt9.classList.remove("active-opt")
    opt10.classList.remove("active-opt")
    const description = document.createElement('h1')
    const deskDescription = document.createElement('h1')
    deskDescriptionContainer.innerHTML = "" 
    const title = document.createElement("div")
    titleContainer.innerHTML = "";
    title1.innerHTML = ""
    deskDescription.innerHTML = ""
    deskDescription.innerHTML = `С ароматом спелого банана.`
    const newTitle = document.createElement('h1')
    newTitle.innerHTML = `BANANA`
    titleContainer.classList.add("block-3__title-slider")
    descriptionContainer.innerHTML = "";
    title.innerHTML = `BANANA`
    prevDescription.innerHTML = "";
    description.innerHTML = `
    С ароматом спелого банана.
    `

    titleContainer.appendChild(title)
    descriptionContainer.appendChild(description)
    title1.appendChild(newTitle)
    deskDescriptionContainer.appendChild(deskDescription)

  }
});





