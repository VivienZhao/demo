document.addEventListener('DOMContentLoaded', function(){
    var oUl=document.querySelector('.section1 ul');
    var aLi=oUl.children[0];
    var oA=document.querySelector('#a1');
    var dir=30;
    var iNow=0;
    var oDiv=document.querySelector('#div2');
    oUl.addEventListener('touchstart', function(ev){
        var disX=ev.targetTouches[0].pageX-oUl.offsetLeft;
        var disY=ev.targetTouches[0].pageY-oUl.offsetTop;
        var oldX=ev.targetTouches[0].pageX;
        function fnMove(ev){
            var x=ev.targetTouches[0].pageX-disX;
            var y=ev.targetTouches[0].pageY-disY;
        }
        function fnEnd(ev){
            document.removeEventListener('touchmove',fnMove, false)
            document.removeEventListener('touchend',fnEnd, false)
            var upX=ev.changedTouches[0].pageX;
            if(Math.abs(upX-oldX)>50){
                if(upX-oldX>0){
                    if(iNow==0){
                        iNow=0;
                    }else{
                        iNow++;
                    }
                }
                if(upX-oldX<0){
                    if(iNow==-3){
                        iNow=-3;
                    }else{
                        iNow--;
                    }
                }
                oUl.style.left=iNow*aLi.offsetWidth+'px';
                oUl.style.transition='1s all linear';
            }
        }
        document.addEventListener('touchmove',fnMove, false)
        document.addEventListener('touchend',fnEnd, false)
    }, false)
    oA.addEventListener('touchstart',function () {
        var iScroll=document.documentElement.scrollTop;
    },false)
}, false)