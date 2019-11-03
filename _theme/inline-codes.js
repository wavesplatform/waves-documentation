jQuery(document).ready(function() {
    const
        COPY_ICO = '<svg ' +
                       'class="wd-ico wd-ico_for_copy" ' +
                       'xmlns="http://www.w3.org/2000/svg" ' +
                       'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
                       'width="14" ' +
                       'height="14" ' +
                       'viewBox="0 0 14 14"' +
                   '>' +
                       '<defs>' +
                           '<path id="durba" d="M1059 536v-2h9v2z"/>' +
                           '<path id="durbb" d="M1058 535a1 1 0 0 1 1-1h1v11h-2z"/>' +
                           '<path id="durbc" d="M1062 537h7a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm1 2v7h5v-7z"/>' +
                       '</defs>' +
                       '<g><g transform="translate(-1058 -534)">' +
                           '<g><use class="wd-ico__recolor" fill="#6522ff" xlink:href="#durba"/></g>' +
                           '<g><use class="wd-ico__recolor" fill="#6522ff" xlink:href="#durbb"/></g>' +
                           '<g><use class="wd-ico__recolor" fill="#6522ff" xlink:href="#durbc"/></g>' +
                       '</g></g>' +
                   '</svg>';

    Array.protototype.forEach.
    call(document.querySelectorAll('.markdown-section code'), (item) => {
        var
            wrap = document.createElement('span');

        wrap.className = 'wd-code';
        wrap.innerHTML = COPY_ICO;
        item.parentNode.insertBefore(wrap, item);
        wrap.insertBefore(item, wrap.firstChild);
    });

});
