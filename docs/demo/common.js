if (/rt-debug/.test(location.search)) {
  localStorage.debug = 'app:*';
}
var debug = localStorage.debug;

require.config({
  baseUrl: debug ? 'amd_modules' : '//unpkg.zhimg.com',
    paths: {
        "etpl": '//unpkg.zhimg.com/etpl'
    },
    waitSeconds: 30
});

// apmjs auto-creates these entries when installed locally
define('etpl', function (require) {
  return require('etpl/src/main');
});
define('ralltiir-skeleton', function (require) {
  return require('ralltiir-skeleton/dist/index');
});
define('ralltiir-skeleton-loading', function (require) {
  return require('ralltiir-skeleton-loading/dist/index');
});


require(
    ['etpl', 'ralltiir-skeleton', 'ralltiir-skeleton-loading'],
    function(Etpl, Skeleton, Loading) {
    Etpl.config({
        commandOpen: "<%",
        commandClose: "%>"
    });
    var skeleton;
    var container =  document.querySelector('.rt-body');
    var appearances = [
      null,
      new Loading.BaiduLoading({Etpl: Etpl,toplight: true}),
      new Loading.BounceLoading({Etpl: Etpl,toplight: true})
    ];

    document.querySelector(".rt-body").style.display="block";



    var container =  document.querySelector('.rt-body');
    function start(index) {
      skeleton = new Skeleton.Skeleton(container, appearances[index], {
          background: "#FFF"
          ,fadeOut: true
          ,fadeOutDuration: 400
          ,isOffset: true
          //,isFixed: true
      });
      skeleton.create();
      setTimeout(function() {
        skeleton && skeleton.destroy();
      }, 800);
    }
    document.querySelectorAll(".rt-tools span").forEach((tab) => {
      tab.onclick =  function() {
        document.querySelectorAll(".active").forEach((a) => a.className = "");
        this.className = "active";
        var index = this.getAttribute("index");
        if (!index) return;
        start(index * 1);
      }
    });
    start(1);

});
