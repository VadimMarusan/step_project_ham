
let ourServicesTab = document.querySelector('.our-services-content-container1');
    ourServicesTab.addEventListener('click', function (e) {
        document.querySelector('.our-services-item-active').classList.remove('our-services-item-active');
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('our-services-item-active');
        let data = e.target.dataset.tab;
        document.querySelector(`[data-content = ${data}]`).classList.add('active');
        if ( document.querySelector(`[data-content = ${data}]`)) {
            document.getElementById('services-content-img').src = `img/section_our_services/${data}.png`
        } else {
            document.getElementById('services-content-img').src = 'img/section_our_services/1.png'
        }
})


let loadMore = document.querySelector('.load-more-button');
let allDivs = document.querySelectorAll('.our-amazing-work-content-item');

loadMore.addEventListener('click',()=>{
    load()
    loadMore.classList.add('display-none');
});
function load() {
    let hiddenDivs = document.querySelectorAll('.all');
    if (hiddenDivs.length === 12) {

        for (let i = hiddenDivs.length; i < hiddenDivs.length +12; i++) {
            allDivs[i].classList.remove('display-none') ;
            allDivs[i].classList.add('all');
        }
    }
}





    let ourAmazingTab = document.querySelector('.our-amazing-menu');
    ourAmazingTab.addEventListener('click', function (e) {
        let data = e.target.dataset.tab2;
        console.log(data)
        document.querySelector('.amazing-item-active').classList.remove('amazing-item-active');
        e.target.classList.add('amazing-item-active')


        let targetItem = document.querySelectorAll('.our-amazing-work-content-item')

      if (data === "all") {
          targetItem.forEach(function (e){
              e.classList.remove("display-none");
          })
          targetItem.classList.remove('display-none');
      } else {
        targetItem.forEach(function (e) {
            e.classList.remove('display-none');
            if (data !== e.dataset.content2) {
                e.classList.add('display-none');

            }

        })

      }
    })


/*
function ourAmazingWorkFilter () {

    let graphicDesign = document.getElementById('graphic_design');
    let webDesign = document.getElementById('web_design');
    let landingPages = document.getElementById('landing_pages');
    let wordpress = document.getElementById('wordpress');
    console.log(graphicDesign, webDesign, landingPages, wordpress);

    let graphicDesignItem = document.querySelectorAll('.graphic-design-item');
    let webDesignItem = document.querySelectorAll('.web-design-item');
    let landingPagesItem = document.querySelectorAll('.landing-pages-item')
    let

    graphicDesign.addEventListener('click', function () {
        for (let i = 0; i < graphicDesignItem.length; i++ ) {
            graphicDesignItem[i].style.display = "none";
        }
    })
}

ourAmazingWorkFilter()

 */



