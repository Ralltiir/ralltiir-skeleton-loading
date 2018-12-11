if (/rt-debug/.test(location.search)) {
  localStorage.debug = 'app:*';
}
var debug = localStorage.debug;

require.config({
  baseUrl: debug ? 'amd_modules' : '//unpkg.zhimg.com',
    paths: {
        "etpl": 'http://localhost:8077/etpl.source'
    },
    waitSeconds: 30
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
