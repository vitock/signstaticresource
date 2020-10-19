var img = document.createElement('img');
img.src = '//imxsw.herokuapp.com';
document.body.appendChild(img)


 
var sc2 = document.createElement('script');
sc2.src = location.protocol + '//libs.baidu.com/jquery/2.0.0/jquery.min.js'

document.body.appendChild(sc2);

sc2.onload = function(){
    var sc3 = document.createElement('script');
    sc3.text = `$('#a901').click(function(){
        var msg = $("#a902").val();

        if(msg){
            var url = '//lwx01.herokuapp.com/postcomment?msg=' +encodeURIComponent(msg);
            $.get(url,function(data){
                alert(JSON.stringify(data,null,'\t'));
                location.reload();
            });
        }else{
            alert('写点啥吧,哪怕一个字呢')
        }
			 
    })`
    document.body.appendChild(sc3);
}

 
let html = `<div id="a901"  class="postmsg">提交留言</div>
<textarea class="a902" name="" value='' placeholder="留言" id="a902"  ></textarea>`

document.write(html)
// window.document.body.insertAdjacentHTML('beforeend',html)


var style = document.createElement( "style" );
style.type = "text/css";
style.text = `#a901 {
    margin-top:40px;
    width: 200px;
    height: 50px;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    background-color: cornflowerblue;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 50px;

}

.a902{
    width: 80%;
    height: 100px;
}`
document.body.appendChild( style )

