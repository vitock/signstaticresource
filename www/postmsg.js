 
var sc2 = document.createElement('script');
sc2.src = location.protocol + '//libs.baidu.com/jquery/2.0.0/jquery.min.js'

document.body.appendChild(sc2);

sc2.onload = function(){
    var sc3 = document.createElement('script');
    sc3.text = `
    $('#a903').click(function(){
        location.href = location.protocol + '//' + location.host;
    })
    $('#hexopage').click(function(){
        location.href = "//vitock.now.sh"
    })
    
    $('#a901').click(function(){
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

 
let html = `
<div  class="a904"></div>
<div class='a901' id="hexopage">hexo 主页</div>

<div id="a903"  class="a901">回到主页</div>
<div id="a901"  class="a901">提交留言</div>
<textarea class="a902" name="" value='' placeholder="留言" id="a902"  ></textarea>
<p>
<img style='width:200px'  src='//imxsw.herokuapp.com' ></img>
`

document.write(html)
// window.document.body.insertAdjacentHTML('beforeend',html)

