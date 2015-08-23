/**检查传入的实际参数和期望传入的参数是否一致*/
function check(args){
    var actual=args.length;//实参的真实个数
    var expected=args.callee.length;
    if(actual!==expected)
    throw Error("expected:"+expected+"args,got "+actual);

}
function f(x,y,z){
    check(arguments);
    return x+y+z;
};

console.log(f(1,2,3));

function traceCheck(o,orig){
    var orignal=o[orig];
    o[orig]=function(){
        console.log(new Date()+"entering:"+orig);
        var result=orignal.apply(this,arguments);
        for(var i=0;i<1000000000;i++){
            var j=i;
        }
        console.log(new Date()+"exiting:"+orig);
        return result;
    }
}

function f2(x,y,z){
    traceCheck(check);
    return x+y+z;
};

console.log(f2(1,2,3));

var operator={
    add: function(x,y){return x+y;},
    subtract: function(x,y){return x-y;}
}

var r=operator.add(2,3);
//包装方法
traceCheck(operator,'add');
var r1=operator.add(3,4);
console.log(r1);