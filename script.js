(function () {
  var swipeAble = document.querySelector('.swipeable');
  var hammertime = new Hammer(swipeAble);

  hammertime.on('swipe', function (ev) {

    if (ev.deltaTime > 250 || Math.abs(ev.distance) < 50) {
      return;
    }

    const toLeft = ev.direction == 2 || ev.direction == 6;

    document.querySelector('.slide_2').style.transform = `translateX(${toLeft ? '0px' : '100vw'})`;
    
    const bodyClassList = document.querySelector('body').classList;
    toLeft ? bodyClassList.add('lock') : bodyClassList.remove('lock');
  });
})();
