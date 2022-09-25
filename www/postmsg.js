!function(){

 
    let html = `
    <div  class="a904"></div>
    <div id="a903"  class="a901">回到主页</div>
    <div id="a901"  class="a901">提交留言</div>
    <textarea class="a902" name="" value='' placeholder="留言" id="a902"  ></textarea>
    <p>
    <img style='width:200px'  src='//imxsw.herokuapp.com' ></img>
    `
    
    document.write(html)


var sc2 = document.createElement('script');
sc2.src = location.protocol + '//libs.baidu.com/jquery/2.0.0/jquery.min.js'

document.body.appendChild(sc2);


sc2.onload = function(){
    if(location.href.indexOf('list')> 0 ){
        var div = document.createElement('div');
        div.className = 'bgimg31';
        div.style.background = `url('//vee.cyclic.app/randimg?v=${Math.random().toString(16).substr(2)}') center`
        $('body').prepend(div);
    }
    
    
    $('#a903').click(function(){
        location.href = "/"
    })
    $('#hexopage').click(function(){
        location.href = "/"
    })
    
    $('#a901').click(function(){
        var msg = $("#a902").val();

        if(msg){
            var url = '//vee.cyclic.app/postcomment?msg=' +encodeURIComponent(msg);
            $.get(url,function(data){
                alert(JSON.stringify(data,null,'\t'));
                location.reload();
            });
        }else{
            alert('写点啥吧,哪怕一个字呢')
        }
			 
    })
}

 

// window.document.body.insertAdjacentHTML('beforeend',html)

}()