/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
define(function(require,exports){
    var min=10;
    var offset=1;
    function calFromNum(number){
        
        var str=number+"";
        var nums=str.split("");
        var len=nums.length;
        var val="";

        for(var i=0;i<nums.length;i++){
            var n=nums[i];
            var dis=parseInt(n)-min-i*offset;
            if(dis<0){
                dis=10*(parseInt(-dis/10)+1)+dis;
            }
            
            val=val+(dis);
        }
        return parseInt(val);
        
    }
    function getArray(toNum){
        var fromNum=calFromNum(toNum);
        var fromNumStr=fromNum+"";
        var toNumStr=toNum+"";
        var toNums=toNumStr.split("");

        var nums=fromNumStr.split("");
        var len=nums.length;
        var val=[];
        
        var totalLen=parseInt((len+min)/10)*10+(len+min)%10;
        var totalVal=[];

        for(var i=0;i<nums.length;i++){
            val[i]=[];
            var n=nums[i];
            var to=toNums[i];
            var index=i;
            for(var j=0;j<totalLen;j++){
                if(n>=10){
                    n=0;
                }
                if(n!=to){
                    val[i][j]=n+"";
                    n++;
                }else if(index+min>=10){
                    val[i][j]=n+"";
                    index=index-10;
                    n++;
                }else{
                   val[i][j]=n+""; 
                }
                
            }
            

        }

        for(var i=0;i<val.length;i++){
            for(var j=0;j<val[i].length;j++){
                if(totalVal[j]){
                    totalVal[j]=totalVal[j]+val[i][j]+"";
                }else{
                     totalVal[j]=val[i][j]+"";
                }
                
            }  
        }
        for(var i=0;i<totalVal.length;i++){
            totalVal[i]=fmoney(totalVal[i]);
            var valArrs=totalVal[i].split("");
            var temp="";
            for(var j=0;j<valArrs.length;j++){
                if(valArrs[j]==","){
                    temp=temp+"<span class='comma'>"+valArrs[j]+"</span>"
                }else{
                    temp=temp+"<span>"+valArrs[j]+"</span>"
                }
                
            }
            // console.log(totalVal)
            totalVal[i]=temp;
        }
        return totalVal;
    }
    function fmoney(s, n) {  
        n = n > 0 && n <= 20 ? n : 2;  
        // s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";  
        s=s+"";
        console.log(s)
        var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];  
        t = "";  
        for (i = 0; i < l.length; i++) {  
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
        }  
        return t.split("").reverse().join("") ;  
    }  
    exports.animation=function(element,toNum,params){
        var settings = $.extend({
            'delay': 10
        }, params);
        $(element).each(function(index,el){

            // Store the object
            var $this = $(el);
            var arrs=getArray(toNum);
            $this.html(arrs[0]);
            
            var now=1;
            var timer=setInterval(function(){
                if(now<arrs.length){
                    $this.html(arrs[now++]);
                }else{
                    clearInterval(timer);
                }
            },settings.delay);
            

        });
    }
    

        
});