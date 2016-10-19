var data=[];
datas=data;

$.get('/postdata',function(datas) {
for (var j = 0; j < 4; j++) {      
                  alert(i);
                var div1=$('<div class="division1class" id=division1id'+i+'></div>');
                div1.append('<p>'+datas[i].color1+'</p>');
                $('.dynamic').append(div1);
                 i++;         
                  };}
}