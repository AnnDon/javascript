/**
 * Created by majy on 15/7/30.
 */
Function.prototype.isArray=Function.isArray||function(o){
        return typeof o=== 'object'&&
                Object.prototype.toString.call(o)==='[oject Array]'
    }

var o={1:'one',2:'two',3:'three'};

window.console.log(Array.isArray(o));