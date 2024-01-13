//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  "url(/img/bg1.jpg)",
  "url(/img/bg2.jpg)",
  "url(/img/banner.webp)",
  "url(/img/田园小道.jpg)",
  "url(/img/bg3.jpg)",
  "url(/img/bg4.jpg)",
  "url(/img/bg5.jpg)",
  "url(/img/bg6.jpg)",
  "url(/img/bg7.jpg)",
  "url(/img/bg8.jpg)", 
  "url(/img/bg8.png)",  
  "url(/img/bg9.jpg)",
  "url(/img/bg10.jpg)",
  "url(/img/bg11.jpg)",
  "url(/img/bg12.png)",
  "url(/img/bg13.png)",
  //"url(/img/bg14.jpg)",
  "url(/img/bg15.png)",
  //"url(/img/bg16.png)",
  //"url(/img/bg17.jpg)",
  "url(/img/bg18.png)",
  //"url(/img/水波荡漾.png)",
  //"url(/img/bg19.jpg)",
  //"url(/img/bg21.jpg)",
  "url(/img/bg20.jpg)",
  "url(/img/bg22.jpg)",
  "url(/img/bg28.jpg)",
  "url(/img/bg29.webp)",
  "url(/img/bg23.jpg)",
  //"url(/img/bg20.png)",
  //"url(/img/bg24.png)",
  "url(/img/bg25.jpg)",
  //"url(/img/bg26.jpg)",
  //"url(/img/bg27.png)",
  "url(/img/bg29.jpg)",
  //"url(/img/article.jpg)",
  "url(/img/article1.jpg)",
  "url(/img/article2.jpg)",
  "url(/img/article29.png)",
  "url(/img/article15.jpg)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * backimg.length);
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  var bannerimg =[
    "url(/img/bg1.jpg)",
    "url(/img/bg2.jpg)",
    "url(/img/banner.webp)",
    "url(/img/田园小道.jpg)",
    "url(/img/bg3.jpg)",
    "url(/img/bg4.jpg)",
    "url(/img/bg5.jpg)",
    "url(/img/bg6.jpg)",
    "url(/img/bg7.jpg)",
    "url(/img/bg8.jpg)", 
    "url(/img/bg8.png)",  
    "url(/img/bg9.jpg)",
    "url(/img/bg10.jpg)",
    "url(/img/bg11.jpg)",
    "url(/img/bg12.png)",
    "url(/img/bg13.png)",
    //"url(/img/bg14.jpg)",
    "url(/img/bg15.png)",
    //"url(/img/bg16.png)",
    //"url(/img/bg17.jpg)",
    "url(/img/bg18.png)",
    //"url(/img/水波荡漾.png)",
    //"url(/img/bg19.jpg)",
    //"url(/img/bg21.jpg)",
    "url(/img/bg20.jpg)",
    "url(/img/bg22.jpg)",
    "url(/img/bg28.jpg)",
    "url(/img/bg29.webp)",
    "url(/img/bg23.jpg)",
    //"url(/img/bg20.png)",
    //"url(/img/bg24.png)",
    "url(/img/bg25.jpg)",
    //"url(/img/bg26.jpg)",
    //"url(/img/bg27.png)",
    "url(/img/bg29.jpg)",
    //"url(/img/article.jpg)",
    "url(/img/article1.jpg)",
    "url(/img/article2.jpg)",
    "url(/img/article29.png)",
    "url(/img/article15.jpg)"
  ];
  //获取banner图片总数,生成随机数
  var bannerindex =Math.floor(Math.random() * bannerimg.length);
  //重设banner图片
  document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];