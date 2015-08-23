/**
 * Created by majy on 15/8/1.
 */
var o={
    m: function(){
        var self=this;
        console.log(this===o);
        f();
        function f(){
            console.log(this===o);
            console.log(self===o);
        }
    }
}

function getPropertyNames(o,a){
    //if(a===undefined) a=[];
    a=a||[];
    for(var property in o){
        a.push(property);
    }
    return a;
}
var a=[1,2];
getPropertyNames(o,a);
window.console.log(a);
window.console.log(getPropertyNames(o));