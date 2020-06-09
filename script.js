$(function(){
  
  $('#top-btn').click(function(){
     $('.a-square').css('display','none');
     $('.b-square').css('display','inline-block').css('float','right').css('margin',2.0+'rem');
     $('.global-nav-2 li').css('display','inline-block').fadeIn();
  });
  
  $('#top-btn2').click(function(){
     $('.b-square').css('display','none');
     $('.a-square').css('display','inline-block');
     $('.global-nav-2 li').css('display','none').fadeOut();
  });
  
   $('header a').click(function(){
    var id=$(this).attr('href');
    var position=$(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    }, 1000);
  });
  
  $('#top-btn').click(function(){
    $('html,body').animate({ 
      'scrollTop': position
    }, 1000);
  });
  
  function showElementAnimation() {

  var element = document.getElementsByClassName('js-animation');
  if(!element) return;
  
  var showTiming = window.innerHeight > 650 ? 130 : 15; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {
      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);
  
  if (window.matchMedia( '(max-width: 670px)' ).matches) {
$(function(){
    $('.contact-text').html('ここまで読んで頂き誠に有難うございます。<br> <br>エンジニア、DJ、Youtubeの企業案件。<br>どれも既に取り組ませて頂いた<br>経験があり初めての物はないので<br>安心してお仕事を発注できるかと思います。<br> <br>まずは自分のホームページを作る事から教えている<br><a href="https://twitter.com/Tech_University">学生IT団体Tech University</a>の代表です。<br>是非プログラミングが出来るようになりたい<br>方はお気軽にDMを送って下さい。<br> <br>団体に教材や紹介先インターン等も<br>導入するのでそのご連絡を<br>個人様、企業様よりお待ちしております。<br> <br>お付き合い頂き、誠に有難うございます。<br>今後ともよろしくお願い致します。');
    $('.about-text').html('こんにちは、私のHPに足を運んで下さり<br>誠に有難うございます。<br> <br>さて、現在青山学院大学理工学部に在学し<br>化学生命系を学んでおります野澤和正です。<br> <br>2018年10月よりピアノ歴12年を生かし<br>渋谷六本木で<a href="https://youtu.be/93-Pz8-aIlA">DJ_NOZAXとしてDJ活動</a><br>を開始し約60現場を経験。<br> <br>2019年12月より<a href="https://www.youtube.com/channel/UCUtutKtl4dVlGNXoh_5VBvA?view_as=subscriber">Youtube開始-登録者2950名。<br></a>恋愛コンサルタントとして150名の悩みを解決。<br>開始1ヶ月で収益化。企業案件もこなす。<br> <br>サイバーエージェントでワード分析のインターン<br>を機にPCに触れる機会が多くなる。<br> <br>Webを中心に<a href="https://twitter.com/dj_nozax_SE">プログラミングを勉強中</a>。<br>自称日本一<a href="https://twitter.com/dj_nozax">出会い系</a>に強いエンジニア。<br> <br>筋トレが趣味でありベンチプレスは92.5kg。<br>その他、そろばん8段全国大会金賞多数回獲得。<br>スキー検定一級。絶対音感を持つ。');
});
    };
  
});

