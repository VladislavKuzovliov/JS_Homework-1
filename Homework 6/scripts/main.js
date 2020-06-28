function stretchingSearch(){
    document.querySelector(".content_search-buttons").classList.add('unstratched');
    document.querySelector(".content_search-form").classList.add('stretched-form');
}
function unstretchingSearch() {
    document.querySelector(".content_search-buttons").classList.remove('unstratched');
    document.querySelector(".content_search-form").classList.remove('stretched-form');
}

function show() {
    if(!document.querySelector(".content-m_search-form > form").classList.contains("m-show")){
        document.querySelector(".content-m_search-form > form").classList.add("m-show");
        document.querySelector(".content-m_search-form").classList.add('m-stratched');
        document.querySelector(".content-m_search-buttons").classList.add('m-unstratched');
        document.querySelector(".content-m_search-form > form > input[type=text]").focus();
    }
    else{
        document.querySelector(".content-m_search-form > form").classList.remove("m-show");
        document.querySelector(".content-m_search-form").classList.remove('m-stratched');
        document.querySelector(".content-m_search-buttons").classList.remove('m-unstratched');
    }
}

function slideHeadSearch() {
    if(!document.querySelector(".header_input-item").classList.contains("header_input-item-2")){
        document.querySelector(".header_input-item").classList.add("header_input-item-2");
        document.querySelector("body > div > div.header > div.header_body > div > div.header_search > form > input").focus();
    }
    else {
        document.querySelector(".header_input-item").classList.remove('header_input-item-2');
    }
}
function slideHeadSearch2() {
    setTimeout(function(){
        document.querySelector(".header_input-item").classList.remove('header_input-item-2');
    }, 300);

}

function menuSlide() {
    if(document.querySelector("body > div > div.nav-m").classList.contains('display_none')){
        document.querySelector("body > div > div.nav-m").classList.remove('display_none');
        document.querySelector("body > div > div.nav-m").classList.add('appearing');
    }
    else {
        document.querySelector("body > div > div.nav-m").classList.remove('appearing');
        setTimeout(function(){
            document.querySelector("body > div > div.nav-m").classList.add('display_none');
        }, 300);
    }

}