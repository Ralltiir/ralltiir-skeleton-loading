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
    var container =  document.querySelector('.rt-body');
    var appearance = new Loading.BaiduLoading({
        Etpl: Etpl,
        toplight: true
    }); // BounceLoading BaiduLoading
    const skeleton = new Skeleton.Skeleton(container, appearance, {
        background: "#FFF"
        ,fadeOut: true
        ,isOffset: true
        //,isFixed: true
    });
    skeleton.create();
    setTimeout(function() {
        console.log('pause');
        skeleton.pause();
    }, 1000);
    setTimeout(function() {
        console.log('destroy');
        skeleton.destroy();
    }, 3000);
    setTimeout(function() {
        console.log('resume');
        skeleton.resume();
    }, 5000);
    setTimeout(function() {
        const skeleton2 = new Skeleton.Skeleton(container, new Loading.BounceLoading({
            Etpl: Etpl,
            toplight: true
        }), {
            background: "#FFF"
            ,fadeOut: true
            ,isOffset: true
        });
        console.log("new");
        skeleton2.create();
    }, 7000);
});
