/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-01-14 12:17:15
 * @version $Id$
 */

(function(win,doc){
    function change(){
        doc.documentElement.style.fontSize=doc.documentElement.clientWidth*20/320+'px';
    }
    change();
    win.onresize=change;
})(window,document)