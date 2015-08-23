var extend=(function(){
    console.log(3);
    //修复它之前检查是否存在bug
    for(var p in {toString:null}){
        console.log(2);
        //如果代码执行到这里，那么for／in循环会正确工作
        //并返回一个简单版本的extend函数
        return function extend(o){
            for(var i=1;i<arguments.length;i++){
                var source=arguments[i];
                //复制所有可枚举的属性
                for(var prop in source) o[prop]=source[prop];
            }
            return o;
        }
        console.log(1);
    }
    //如果代码执行到这里，说明forin循环不会枚举测试对象的toString属性，
    return function patch_extend(o){
        console.log(4);
        for(var i=1;i<arguments.length;i++){
            var source=arguments[i];
            //复制所有可枚举的属性
            for(var prop in source) o[prop]=source[prop];
            //现在检查特殊属性
            for(var j=0;j<protoprops.length;j++){
               var prop=protoprops[j];
                if(source.hasOwnProperty(prop)) o[prop]=source[prop];
            }
        }
        return o;
    }
    var protoprops=['toString','valueOf','constructor'];

}());

var o={x:1, y:2};
var p=extend({},o);
console.log(p);