// cache vars

var parent = document.querySelector(".media-links"),
    items  = parent.querySelectorAll(".media-item"),
    loadMoreBtn =  document.querySelector('#load-more-comments'),
    maxItems = 6,
    hiddenClass = "visually-hidden";


[].forEach.call(items, function(item, idx){
    if (idx > maxItems - 1) {
        item.classList.add(hiddenClass);
    }
});

loadMoreBtn.addEventListener('click', function(){

  [].forEach.call(document.querySelectorAll('.' + hiddenClass), function(item, idx){
      console.log(item);
      if (idx < maxItems - 1) {
          item.classList.remove(hiddenClass);
      }

      if ( document.querySelectorAll('.' + hiddenClass).length === 0) {
          loadMoreBtn.style.display = 'none';
      }

  });

});


