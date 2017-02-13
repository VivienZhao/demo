/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-25 15:27:03
 * @version $Id$
 */

Vue.filter('date',function(input){
    function toDub(n){
        return n<10?'0'+n:''+n;
    }
    var oDate=new Date();
    oDate.setTime(input*1000);//设置一个时间戳
    return oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+oDate.getDate()+' '+toDub(oDate.getHours())+':'+toDub(oDate.getMinutes())+':'+toDub(oDate.getSeconds());
}); 