$(function(){
	  var $gginner=$('.bigbannerout');
    var $bigbannerul=$('.bigbannerul');

    var $ggbox=$('.bigbannerul');
    var $img=$('.bigbannerul li');
    var $anniuli=$('.xiaoanniu li');
    //console.log($anniuli)
    $img.eq(0).css({
    	marginLeft:0,
    })
    $img.eq(0).css({
    	display:"block"
    })
   var t=setInterval(move,1000);
    $gginner.hover(
            function(){
                clearInterval(t);
            },
            function(){
                t=setInterval(move,1000);
            }
        )
   	var $imgw=$('.bigbannerul li').width();
    
    var now=0;
    var next=0;
    //move()
    var flag=true;
    var $imglen=$('.bigbannerul li').length;

    //console.log($imglen)
    // var $img=$('.bigbox li');
     var $anniu=$('.xiaoanniu li');
    function move(){
      if(!flag){return}
      flag=false;
      next++;
      if(next==$imglen){
      next=0;
      } 
      if(next>now){//如果当前的这一张大于即将要显示的那一张
        $img.eq(now).animate({
            marginLeft:-$imgw
            },function(){
            	$(this).css({
		      	display:"none"
		      })
            })

      $img.eq(next).css({
      		display:"block"
      })
      $img.eq(next).css({
            marginLeft:0
            }).animate({
               marginLeft:0
            },function(){
              flag=true;
            })
      }if(next<now){
      	$img.eq(now).animate({
            marginLeft:0
            },function(){
            	$(this).css({
		      	display:"none"
		      })
        })

	      $img.eq(next).css({
	      		display:"block"
	      })
	      $img.eq(next).css({
	            marginLeft:-$imgw
	            }).animate({
	               marginLeft:0
	            },function(){
	              flag=true;
	            })

      	 $img.eq(next).css({
      		display:"block"
      	})      
      }
      $anniu.eq(now).removeClass();
      $anniu.eq(next).addClass("bian");
      
      now=next
    }
    
   function move1(){
      if(!flag){return}
      flag=false;
      next--;
      if(next<=-1){
      next=$imglen-1;
      } 
      if(next>now){
        $img.eq(now).animate({
            marginLeft:-$imgw
            },function(){
              $(this).css({
            display:"none"
          })
            })

      $img.eq(next).css({
          display:"block"
      })
      $img.eq(next).css({
            marginLeft:0
            }).animate({
               marginLeft:0
            },function(){
              flag=true;
            })
      }if(next<now){
        $img.eq(now).animate({
            marginLeft:0
            },function(){
              $(this).css({
            display:"none"
          })
            })

        $img.eq(next).css({
            display:"block"
        })
        $img.eq(next).css({
              marginLeft:-$imgw
              }).animate({
                 marginLeft:0
              },function(){
                flag=true;
              })

         $img.eq(next).css({
          display:"block"
        })      
      }
      $anniu.eq(now).removeClass();
      $anniu.eq(next).addClass("bian");
      
      now=next
    }
    var $btnleft=$('.btnleft');
    $btnleft.click(function(){
      move1()
    })
    var $btnright=$('.btnright');
    $btnright.click(function(){
      move()
    })
     

     $anniuli.click(function(){
        var index=$(this).index();
        //console.log(index)
        if(index>now){
        $img.eq(now).animate({
            marginLeft:-$imgw
            },function(){
              $(this).css({
            display:"none"
          })
            })

      $img.eq(index).css({
          display:"block"
      })
      $img.eq(index).css({
            marginLeft:0
            }).animate({
               marginLeft:0
            },function(){
              flag=true;
            })
      }if(index<now){
        $img.eq(now).animate({
            marginLeft:0
            },function(){
              $(this).css({
            display:"none"
          })
            })

        $img.eq(index).css({
            display:"block"
        })
        $img.eq(index).css({
              marginLeft:-$imgw
              }).animate({
                 marginLeft:0
              },function(){
                flag=true;
              })

         $img.eq(index).css({
          display:"block"
        })      
      }
      $anniu.eq(now).removeClass();
      $anniu.eq(index).addClass("bian");
      
      now=next=index

     })

})