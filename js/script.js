
let counts  = document.querySelectorAll(".our-services-item");
counts.forEach(ourServicesHandler);

function ourServicesHandler (our_services_item) {

    let ourServiceContent = document.querySelector('.services-content');
    let servicesContentImg = document.getElementById('services-content-img')

    let serviceWebDesign = our_services_item.querySelector('.web-design');
    let serviceGraphicDesign = our_services_item.querySelector('.graphic-design');
    let serviceOnlineSupport = our_services_item.querySelector('.online-support');
    let serviceAppDesign = our_services_item.querySelector('.app-design');
    let serviceOnlineMarketing = our_services_item.querySelector('.online-marketing');
    let serviceSeoService = our_services_item.querySelector('.seo-service');


    our_services_item.addEventListener("click", function () {

        if (serviceWebDesign) {
            ourServiceContent.innerHTML = "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization. Often many individuals will work in teams covering different aspects of the design process, although some designers will cover them all.[1] The term \"web design\" is normally used to describe the design process relating to the front-end (client side) design of a website including writing markup. Web design partially overlaps web engineering in the broader scope of web development. Web designers are expected to have an awareness of usability and if their role involves creating markup then they are also expected to be up to date with web accessibility guidelines.";
            servicesContentImg.src = 'img/section_our_services/11.png'
        } else if (serviceGraphicDesign) {
            ourServiceContent.innerHTML = "Graphic design is the process of visual communication through the use of typography, photography, iconography and illustration. The field is considered a subset of visual communication and communication design, but sometimes the term \"graphic design\" is used synonymously. Graphic designers create and combine symbols, images and text to form visual representations of ideas and messages.";
            servicesContentImg.src = 'img/section_our_services/12.png'
        } else if (serviceOnlineSupport) {
            ourServiceContent.innerHTML = "Technical support (often shortened to tech support) refers to services that entities provide to users of technology products or services. In general, technical support provides help regarding specific problems with a product or service, rather than providing training, provision or customization of product, or other support services. Most companies offer technical support for the services or products they sell, either included in the cost or for an additional fee. Technical support may be delivered by phone, e-mail, live support software on a website, or other tools where users can log an incident. Larger organizations frequently have internal technical support available to their staff for computer-related problems. The Internet can also be a good source for freely available tech support, where experienced users help users find solutions to their problems.[not verified in body] In addition, some fee-based service companies charge for premium technical support services.";
            servicesContentImg.src = 'img/section_our_services/13.png'
        } else if (serviceAppDesign) {
            ourServiceContent.innerHTML = "A mobile application, also referred to as a mobile app or simply an app, is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch. Apps were originally intended for productivity assistance such as email, calendar, and contact databases, but the public demand for apps caused rapid expansion into other areas such as mobile games, factory automation, GPS and location-based services, order-tracking, and ticket purchases, so that there are now millions of apps available. Apps are generally downloaded from application distribution platforms which are operated by the owner of the mobile operating system, such as the App Store (iOS) or Google Play Store. Some apps are free, and others have a price, with the profit being split between the application's creator and the distribution platform. Mobile applications often stand in contrast to desktop applications which are designed to run on desktop computers, and web applications which run in mobile web browsers rather than directly on the mobile device.";
            servicesContentImg.src = 'img/section_our_services/14.png'
        } else if (serviceOnlineMarketing) {
            ourServiceContent.innerHTML = "Online advertising, also known as online marketing, Internet advertising, digital advertising or web advertising, is a form of marketing and advertising which uses the Internet to deliver promotional marketing messages to consumers. Many consumers find online advertising disruptive[1] and have increasingly turned to ad blocking for a variety of reasons.When software is used to do the purchasing, it is known as programmatic advertising.";
            servicesContentImg.src = 'img/section_our_services/15.png'
        } else if (serviceSeoService) {
            ourServiceContent.innerHTML = "Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.[1] SEO targets unpaid traffic (known as \"natural\" or \"organic\" results) rather than direct traffic or paid traffic. Unpaid traffic may originate from different kinds of searches, including image search, video search, academic search,[2] news search, and industry-specific vertical search engines.";
            servicesContentImg.src = 'img/section_our_services/16.png'
        } else {
            ourServiceContent.innerHTML = "error";
        }
    });
}

function ourAmazingWorkButton () {
    let loadMore = document.querySelector('.load-more-button');
    let dispayNone = document.querySelectorAll('.display-none');
    loadMore.addEventListener("click", function () {
        for(let i = 0; i < dispayNone.length; i++ ) {
            dispayNone[i].style.display = "block";
        }
        document.querySelector('.load-more-button').remove('.load-more-button')
    })
}
ourAmazingWorkButton();

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



