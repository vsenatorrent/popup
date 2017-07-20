window.onscroll = function () {
  var video = document.querySelector('iframe'),
    scrollTop = window.pageYOffset, // размер прокрутки от верха страницы
    bodyHeight = document.body.offsetHeight, // высота контента всего документа
    subtr = bodyHeight - scrollTop;
  if (subtr < 1200) {
    video.style.display = 'block';
  }

}
