$(document).ready(function () {
  $('.goto-top').on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 'slow');
  });

  if ($("#compare1").length) {
    $("#compare1").twentytwenty();
  }

 
  

  $('.hole-5').on('click', function(){
    $.magnificPopup.open({
      items: {
        src: '<div><div class="swiper-container"><div class="swiper-wrapper"><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image40.png"/><div class="des">本山五號坑海拔 295公尺，1972年停產，1978 年撤收，位於金瓜石黃金博物館園區內，為金瓜石保存最完善的礦坑，現仍保有昔日的礦道及礦車。為了讓遊客能親身體驗昔日採礦工人們在漆黑坑道中工作的經驗，利用本山五坑舊有坑道與新建坑道，設計成坑道體驗區，展示當年的採礦過程，模擬當時採礦工作的情境。</div></div></div><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image41.png"/><div class="des">本山五號坑海拔 295公尺，1972年停產，1978 年撤收，位於金瓜石黃金博物館園區內，為金瓜石保存最完善的礦坑，現仍保有昔日的礦道及礦車。為了讓遊客能親身體驗昔日採礦工人們在漆黑坑道中工作的經驗，利用本山五坑舊有坑道與新建坑道，設計成坑道體驗區，展示當年的採礦過程，模擬當時採礦工作的情境。</div></div></div><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image54.png"/><div class="des">本山五號坑海拔 295公尺，1972年停產，1978 年撤收，位於金瓜石黃金博物館園區內，為金瓜石保存最完善的礦坑，現仍保有昔日的礦道及礦車。為了讓遊客能親身體驗昔日採礦工人們在漆黑坑道中工作的經驗，利用本山五坑舊有坑道與新建坑道，設計成坑道體驗區，展示當年的採礦過程，模擬當時採礦工作的情境。</div></div></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div>', 
        type: 'inline',
        modal: true,
      },
      mainClass: 'mfp-custom',
      callbacks: {
        open: function() {
          var swiper = new Swiper('.swiper-container', {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        }
      }
    });
  })

  $('.hole-6').on('click', function(){
    $.magnificPopup.open({
      items: {
        src: '<div><div class="swiper-container"><div class="swiper-wrapper"><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image46.png"/><div class="des">「本山六坑」為因應地形設置斜坡索道，用來載運礦產。勸濟堂上方停車場旁索道保留台車間的斷垣殘壁，由此下斜坡可至本山六坑遺跡本山六坑位於海拔167公尺處，是與五坑一樣保存尚稱完整的坑道口。新北市政府於2013年 12月，已將水湳洞本山六坑口及索道系統登錄為歷史建築。本山六坑之坑口由紅磚砌成，牌匾寫著「本山六坑，長仁四番坑，昭和五年五月改修」。</div></div></div><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image47.png"/><div class="des">「本山六坑」為因應地形設置斜坡索道，用來載運礦產。勸濟堂上方停車場旁索道保留台車間的斷垣殘壁，由此下斜坡可至本山六坑遺跡本山六坑位於海拔167公尺處，是與五坑一樣保存尚稱完整的坑道口。新北市政府於2013年 12月，已將水湳洞本山六坑口及索道系統登錄為歷史建築。本山六坑之坑口由紅磚砌成，牌匾寫著「本山六坑，長仁四番坑，昭和五年五月改修」。</div></div></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div>', 
        type: 'inline',
        modal: true,
      },
      mainClass: 'mfp-custom',
      callbacks: {
        open: function() {
          var swiper = new Swiper('.swiper-container', {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        }
      }
    });
  })

  $('.hole-3').on('click', function(){
    $.magnificPopup.open({
      items: {
        src: '<div><div class="swiper-container"><div class="swiper-wrapper"><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image42.png"/><div class="des">金瓜石神社初建於明治30年（1897年），當時田中組投入開發金瓜石礦山，為了安定民心，於本山大金瓜岩嶂東側平地建此神社。1933年日本礦業株式會社接管金瓜石礦山後，將神社移至現址並擴建，為當時的信仰中心。</div></div></div><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image43.png"/><div class="des">金瓜石神社初建於明治30年（1897年），當時田中組投入開發金瓜石礦山，為了安定民心，於本山大金瓜岩嶂東側平地建此神社。1933年日本礦業株式會社接管金瓜石礦山後，將神社移至現址並擴建，為當時的信仰中心。</div></div></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div>', 
        type: 'inline',
        modal: true,
      },
      mainClass: 'mfp-custom',
      callbacks: {
        open: function() {
          var swiper = new Swiper('.swiper-container', {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        }
      }
    });
  })

  $('.hole-2').on('click', function(){
    $.magnificPopup.open({
      items: {
        src: '<div><div class="swiper-container"><div class="swiper-wrapper"><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image44.png"/><div class="des">金瓜石礦區因應地形設置，用來載運礦產的台車索道，至今保存完整的索道遺跡。從勸濟堂後方停車場可見到六坑斜坡索道遺址，沿索道而下即可抵達本山六坑前。而本山六坑前方有間礦場事務所建築遺跡，旁邊有座隧道分為南北隧道，為無極索道，由勸濟堂旁轉運站所運下的，或由六坑產出之礦石，皆經由此隧道運往十三層選礦廠，隧道的出口則接到十三層選礦廠的最上層建築。</div></div></div><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image45.png"/><div class="des">金瓜石礦區因應地形設置，用來載運礦產的台車索道，至今保存完整的索道遺跡。從勸濟堂後方停車場可見到六坑斜坡索道遺址，沿索道而下即可抵達本山六坑前。而本山六坑前方有間礦場事務所建築遺跡，旁邊有座隧道分為南北隧道，為無極索道，由勸濟堂旁轉運站所運下的，或由六坑產出之礦石，皆經由此隧道運往十三層選礦廠，隧道的出口則接到十三層選礦廠的最上層建築。</div></div></div><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image55.png"/><div class="des">金瓜石礦區因應地形設置，用來載運礦產的台車索道，至今保存完整的索道遺跡。從勸濟堂後方停車場可見到六坑斜坡索道遺址，沿索道而下即可抵達本山六坑前。而本山六坑前方有間礦場事務所建築遺跡，旁邊有座隧道分為南北隧道，為無極索道，由勸濟堂旁轉運站所運下的，或由六坑產出之礦石，皆經由此隧道運往十三層選礦廠，隧道的出口則接到十三層選礦廠的最上層建築。</div></div></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div>', 
        type: 'inline',
        modal: true,
      },
      mainClass: 'mfp-custom',
      callbacks: {
        open: function() {
          var swiper = new Swiper('.swiper-container', {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        }
      }
    });
  })

  $('.hole-1').on('click', function(){
    $.magnificPopup.open({
      items: {
        src: '<div><div class="swiper-container"><div class="swiper-wrapper"><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image50.png"/><div class="des">「金瓜石地質公園」即位於舊時的「本山礦場」，是一座露天開採的礦區，其中本山一坑（海拔560.5公尺）於明治30年（1897年）開坑，隔年二坑（海拔528公尺）開坑，再隔年則是三坑（海拔479公尺）。根據臺灣日日新報於明治31年（1899年）的報導，當時一、二坑即有輕便鐵路，將開採到的礦石運送到目前本山五坑附近的第一製鍊場。因為本山礦場採用露天採礦法，以重機具剷平山頭，取出礦石，今天一到三坑已不復見。這三處露天採礦場在1978年停礦後，便成為極佳的野外地質教室，圖為停採之本山一號坑最近整理後之現況。</div></div></div><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image53.png"/><div class="des">「金瓜石地質公園」即位於舊時的「本山礦場」，是一座露天開採的礦區，其中本山一坑（海拔560.5公尺）於明治30年（1897年）開坑，隔年二坑（海拔528公尺）開坑，再隔年則是三坑（海拔479公尺）。根據臺灣日日新報於明治31年（1899年）的報導，當時一、二坑即有輕便鐵路，將開採到的礦石運送到目前本山五坑附近的第一製鍊場。因為本山礦場採用露天採礦法，以重機具剷平山頭，取出礦石，今天一到三坑已不復見。這三處露天採礦場在1978年停礦後，便成為極佳的野外地質教室，圖為停採之本山一號坑最近整理後之現況。</div></div></div><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image51.png"/><div class="des">「金瓜石地質公園」即位於舊時的「本山礦場」，是一座露天開採的礦區，其中本山一坑（海拔560.5公尺）於明治30年（1897年）開坑，隔年二坑（海拔528公尺）開坑，再隔年則是三坑（海拔479公尺）。根據臺灣日日新報於明治31年（1899年）的報導，當時一、二坑即有輕便鐵路，將開採到的礦石運送到目前本山五坑附近的第一製鍊場。因為本山礦場採用露天採礦法，以重機具剷平山頭，取出礦石，今天一到三坑已不復見。這三處露天採礦場在1978年停礦後，便成為極佳的野外地質教室，圖為停採之本山一號坑最近整理後之現況。</div></div></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div>', 
        type: 'inline',
        modal: true,
      },
      mainClass: 'mfp-custom',
      callbacks: {
        open: function() {
          var swiper = new Swiper('.swiper-container', {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        }
      }
    });
  })

  $('.hole-4').on('click', function(){
    $.magnificPopup.open({
      items: {
        src: '<div><div class="swiper-container"><div class="swiper-wrapper"><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image48.png"/><div class="des">金瓜石本山火山體因產豐富之金礦，故俗稱「大金瓜」或「金瓜石」，本山露頭最初海拔約638公尺，比基隆山（588公尺）、茶壺山（599公尺）還高，現只餘500公尺，比基隆和茶壺山還矮了。對照老照片與現今GOOGLE EARTH所見金瓜石地區，可以看出逐漸消逝的大金瓜露頭。</div></div></div><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image52.png"/><div class="des">金瓜石本山火山體因產豐富之金礦，故俗稱「大金瓜」或「金瓜石」，本山露頭最初海拔約638公尺，比基隆山（588公尺）、茶壺山（599公尺）還高，現只餘500公尺，比基隆和茶壺山還矮了。對照老照片與現今GOOGLE EARTH所見金瓜石地區，可以看出逐漸消逝的大金瓜露頭。</div></div></div><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image49.png"/><div class="des">金瓜石本山火山體因產豐富之金礦，故俗稱「大金瓜」或「金瓜石」，本山露頭最初海拔約638公尺，比基隆山（588公尺）、茶壺山（599公尺）還高，現只餘500公尺，比基隆和茶壺山還矮了。對照老照片與現今GOOGLE EARTH所見金瓜石地區，可以看出逐漸消逝的大金瓜露頭。</div></div></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div>', 
        type: 'inline',
        modal: true,
      },
      mainClass: 'mfp-custom',
      callbacks: {
        open: function() {
          var swiper = new Swiper('.swiper-container', {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        }
      }
    });
  })

  $('.hole-7').on('click', function(){
    $.magnificPopup.open({
      items: {
        src: '<div><div class="swiper-container"><div class="swiper-wrapper"><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image56.png"/><div class="des">本山七坑位於海拔 9公尺處，是台金公司開採銅礦之礦坑，海拔約9米，位於濂洞煉銅廠下方，鄰近陰陽海，本山八坑及本山九坑皆位於海平面以下，因七、八、九坑被掩埋，使地下水向上游從六坑湧出，沿舊時長仁坑選礦場遺跡匯流，形成黃金瀑布。</div></div></div><div class="swiper-slide"><div class="swiper-inner"><img src="./images/image62.png"/><div class="des">本山七坑位於海拔 9公尺處，是台金公司開採銅礦之礦坑，海拔約9米，位於濂洞煉銅廠下方，鄰近陰陽海，本山八坑及本山九坑皆位於海平面以下，因七、八、九坑被掩埋，使地下水向上游從六坑湧出，沿舊時長仁坑選礦場遺跡匯流，形成黃金瀑布。</div></div></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div>', 
        type: 'inline',
        modal: true,
      },
      mainClass: 'mfp-custom',
      callbacks: {
        open: function() {
          var swiper = new Swiper('.swiper-container', {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        }
      }
    });
  })

});