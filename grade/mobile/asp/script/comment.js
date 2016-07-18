/**
 * [comment]
 * @Author   changshuangYu
 * @DateTime 2016-03-8T11:45:18+0800
 */

//添加首页ifame
function indexOpenCommon (name,title){
    api.openWin({
        name: name,
        url: './'+name+'.html',
        pageParam: {
            name: name,
            title: title
        },
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        }
    });
}

//重置input
function resetInput (obj) {
    var oInput = $api.prev(obj);
    $api.addEvt(obj, 'click', function () {
        $api.val(oInput, '');
    });
}

//隐藏多个frame
function hiddenFrame(arr) {
    for (var i=0; i<arr.length;i++) {
        api.setFrameAttr({
               name: arr[i],
               hidden: true
        });
    }
}
