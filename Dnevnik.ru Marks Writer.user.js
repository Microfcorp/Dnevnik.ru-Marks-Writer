// ==UserScript==
// @name         Dnevnik.ru Marks Writer
// @namespace    https://*.dnevnik.ru/*
// @version      1.0
// @description  Deleted marks))
// @author       MicrofCorp
// @match        https://*.dnevnik.ru/*
// ==/UserScript==

(function() {
    'use strict';

    var marcsthreegl = document.getElementsByClassName('_1O0E2');
    var marcsthreegll = document.getElementsByClassName('_2Netl');
    var marcsthreeglbal = document.getElementsByClassName('_2p-Jk');
    var marcsthreeglitog = document.getElementsByClassName('qNJLN');

    var marcsthreeglsvg = document.getElementById("SvgjsSvg1017");

    var marcsthree = document.getElementsByClassName('mY');
    var marcstwo = document.getElementsByClassName('mR');

    var tmp = '<defs id="SvgjsDefs1020"><linearGradient id="SvgjsLinearGradient1022" gradientUnits="userSpaceOnUse" x1="176" y1="1081" x2="176" y2="1121"><stop id="SvgjsStop1023" stop-color="#fdff06" offset=".03"></stop><stop id="SvgjsStop1024" stop-color="#f90" offset="1"></stop></linearGradient><clipPath id="SvgjsClipPath1027"><path id="SvgjsPath1026" d="M162 1081h27.57v40.35l-13.64-7.71-13.93 7.71z" fill="#fff"></path></clipPath><linearGradient id="SvgjsLinearGradient1029" gradientUnits="userSpaceOnUse" x1="161.145" y1="1046.818" x2="183.704" y2="1085.63"><stop id="SvgjsStop1030" stop-color="#a5cf24" offset="0"></stop><stop id="SvgjsStop1031" stop-color="#83a51c" offset="1"></stop></linearGradient></defs><path id="SvgjsPath1021" d="M162 1081h27.57v40.35l-13.64-7.71-13.93 7.71z" fill="url(#SvgjsLinearGradient1022)" transform="translate(-145.5 -1044.5)"></path><path id="SvgjsPath1025" d="M162 1081h27.57v40.35l-13.64-7.71-13.93 7.71z" fill-opacity="0" fill="#fff" stroke-dasharray="0" stroke="#e2b209" stroke-miterlimit="50" stroke-width="2" clip-path="url(&quot;#SvgjsClipPath1027&quot;)" transform="translate(-145.5 -1044.5)"></path><path id="SvgjsPath1028" d="M204.04 1073.85c0 .3-.11.56-.34.79l-4.76 3.93 2.83 5.52c.08.15.12.41.12.78-.16.3-.38.49-.68.56l-6.01 1.8.56 6.19c.08.3 0 .56-.22.79-.23.22-.49.3-.8.22l-6.23-.56-1.81 5.96c-.08.3-.27.53-.57.68-.38 0-.64-.04-.79-.12l-5.56-2.81-3.97 4.73c-.22.22-.49.33-.79.33-.3 0-.57-.11-.79-.33l-3.97-4.73-5.56 2.81c-.15.08-.41.12-.79.12-.3-.15-.49-.38-.57-.68l-1.81-5.96-6.23.56c-.31.08-.57 0-.8-.22-.22-.23-.3-.49-.22-.79l.56-6.19-6.01-1.8c-.3-.07-.53-.26-.68-.56 0-.37.04-.63.12-.78l2.83-5.52-4.76-3.93c-.23-.23-.34-.49-.34-.79 0-.3.11-.56.34-.79l4.76-3.93-2.83-5.52c-.08-.15-.12-.41-.12-.78.15-.3.38-.49.68-.57l6.01-1.79-.56-6.19c-.08-.3 0-.56.22-.79.23-.22.49-.3.8-.22l6.23.56 1.81-5.96c.15-.38.34-.56.57-.56.3-.15.57-.15.79 0l5.56 2.81 3.97-4.73c.53-.52 1.05-.52 1.58 0l3.97 4.73 5.56-2.81c.22-.15.49-.15.79 0 .23 0 .41.18.57.56l1.81 5.96 6.23-.56c.31-.08.57 0 .8.22.22.23.3.49.22.79l-.56 6.19 6.01 1.79c.3.08.52.27.68.57 0 .37-.04.63-.12.78l-2.83 5.52 4.76 3.93c.23.23.34.49.34.79z" fill="url(#SvgjsLinearGradient1029)" transform="translate(-145.5 -1044.5)"></path><path id="SvgjsPath1032" d="M58.54 29.35c0 .3-.11.56-.34.79l-4.76 3.93 2.83 5.52c.08.15.12.41.12.78-.16.3-.38.49-.68.56l-6.01 1.8.56 6.19c.08.3 0 .56-.22.79-.23.22-.49.3-.8.22l-6.23-.56-1.81 5.96c-.08.3-.27.53-.57.68-.38 0-.64-.04-.79-.12l-5.56-2.81-3.97 4.73c-.22.22-.49.33-.79.33-.3 0-.57-.11-.79-.33l-3.97-4.73-5.56 2.81c-.15.08-.41.12-.79.12-.3-.15-.49-.38-.57-.68l-1.81-5.96-6.23.56c-.31.08-.57 0-.8-.22-.22-.23-.3-.49-.22-.79l.56-6.19-6.01-1.8c-.3-.07-.53-.26-.68-.56 0-.37.04-.63.12-.78l2.83-5.52-4.76-3.93c-.23-.23-.34-.49-.34-.79 0-.3.11-.56.34-.79l4.76-3.93-2.83-5.52c-.08-.15-.12-.41-.12-.78.15-.3.38-.49.68-.57l6.01-1.79-.56-6.19c-.08-.3 0-.56.22-.79.23-.22.49-.3.8-.22l6.23.56 1.81-5.96c.15-.38.34-.56.57-.56.3-.15.57-.15.79 0l5.56 2.81L28.73.89c.53-.52 1.05-.52 1.58 0l3.97 4.73 5.56-2.81c.22-.15.49-.15.79 0 .23 0 .41.18.57.56l1.81 5.96 6.23-.56c.31-.08.57 0 .8.22.22.23.3.49.22.79l-.56 6.19 6.01 1.79c.3.08.52.27.68.57 0 .37-.04.63-.12.78l-2.83 5.52 4.76 3.93c.23.23.34.49.34.79z" fill-opacity="0" fill="#fff" stroke-dasharray="0" stroke="#83a51c" stroke-miterlimit="50"></path>';
    if(marcsthreeglsvg != null) {marcsthreeglsvg.innerHTML = tmp;}

    if(document.getElementsByClassName('_2_lRu').length > 0){
    for (var iqqqqqq = 0; iqqqqqq < document.getElementsByClassName('_2_lRu').length; iqqqqqq++) {
        var marcsqqqqqq = document.getElementsByClassName('_2_lRu')[iqqqqqq];
        marcsqqqqqq.innerHTML = "";
    }
    }

    if(marcsthreeglitog.length > 0){
    for (var iqqqqq = 0; iqqqqq < marcsthreeglitog.length; iqqqqq++) {
        var marcsqqqqq = marcsthreeglitog[iqqqqq];
        if(marcsqqqqq.innerHTML == "3" || marcsqqqqq.innerHTML == "2"){
            marcsqqqqq.innerHTML = 4;
        }
    }
    }

    if(marcsthreeglbal.length > 0){
    for (var iqqqq = 0; iqqqq < marcsthreeglbal.length; iqqqq++) {
        var marcsqqqq = marcsthreeglbal[iqqqq];
        marcsqqqq.innerHTML = 4;
        marcsqqqq.style.backgroundColor = "#83a51c";
        marcsqqqq.style.border = "thin solid #5b750d";
    }
    }

    if(marcsthreegll.length > 0){
    for (var iqqq = 0; iqqq < marcsthreegll.length; iqqq++) {
        var marcsqqq = marcsthreegll[iqqq];
        if(marcsqqq.innerHTML == "3" || marcsqqq.innerHTML == "2"){
            marcsqqq.innerHTML = 4;
        }
    }
    }

    if(marcsthreegl.length > 0){
    for (var iqq = 0; iqq < marcsthreegl.length; iqq++) {
        var marcsqq = marcsthreegl[iqq];
        marcsqq.style.backgroundColor = "#83a51c";
        marcsqq.style.border = "thin solid #5b750d";
        marcsqq.innerHTML = 4;
    }
    }

    if(marcsthree.length > 0){
    for (var i = 0; i < marcsthree.length; i++) {
        var marcs = marcsthree[i];
        marcs.style.backgroundColor = "#c2d23a";
        marcs.style.color = "#fff !important";
        marcs.innerHTML = 4;
    }
    }

    if(marcstwo.length > 0){
    for (var iq = 0; iq < marcstwo.length; iq++) {
        var marcsq = marcstwo[iq];
        marcsq.style.backgroundColor = "#c2d23a";
        marcsq.style.color = "#fff !important";
        marcsq.innerHTML = 4;
    }
    }
})();