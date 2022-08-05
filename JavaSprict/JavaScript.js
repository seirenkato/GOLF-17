var top_number_01 = 0;
var top_number_02 = 0;
var top_number_03 = 0;

var bottom_number_01 = 0;
var bottom_number_02 = 0;
var bottom_number_03 = 0;

var Front_back = 0;

var backgraund_number = 0;

var fullscreen_effect = 0;

var price1 = 15000;
var price2 = 25000;

//画面起動
function open() {
  backgraund(backgraund_number);
  mannequin(Front_back);
  top_image(top_number_01, top_number_02, top_number_03, Front_back);
  bottom_image(bottom_number_01, bottom_number_02, bottom_number_03, Front_back);
  Image_information(Product_image[top_number_01][top_number_02][top_number_03][Front_back], Product_image_bottom[bottom_number_01][bottom_number_02][bottom_number_03][Front_back]);
  top_pattern_select();
  top_color_select();
  top_customize01_select();
  bottom_pattern_select();
  bottom_color_select();
  icon_select();
}

//上部画像表示
function top_image(top_number_01, top_number_02, top_number_03, Front_back) {
  var ele1 = document.getElementById("main_image_top");
  ele1.removeAttribute("id");
  ele1.classList.add("main_image_top_0");
  
  var img = document.createElement('img');
  file_name = Product_image[top_number_01][top_number_02][top_number_03][Front_back];
  img.setAttribute('src', file_name);
  img.setAttribute("id", "main_image_top");
  img.classList.add("feedin");
  img.classList.add("image_width");
  img.setAttribute('onerror', error_icon);

  document.getElementById('image_box').prepend(img);

  img.addEventListener('load', (e)=> {
    ele1.classList.toggle("out");
    ele1.addEventListener('transitionend', () => {
      var elements = document.getElementsByClassName("main_image_top_0");
      var len = elements.length;
      for (var i = 0; i < len; i++) {
        var e = elements[0];
        e.parentNode.removeChild(e);
      }
    });
  });
}

//下部画像表示
function bottom_image(bottom_number_01, bottom_number_02, bottom_number_03, Front_back) {
  var ele1 = document.getElementById("main_image_bottom");
  ele1.removeAttribute("id");
  ele1.classList.add("main_image_bottom_0");
  
  var img = document.createElement('img');
  file_name = Product_image_bottom[bottom_number_01][bottom_number_02][bottom_number_03][Front_back];
  img.setAttribute('src', file_name);
  img.setAttribute("id", "main_image_bottom");
  img.classList.add("feedin");
  img.classList.add("image_width");
  img.setAttribute('onerror', error_icon);
  
  document.getElementById('image_box').prepend(img);

  img.addEventListener('load', (e)=> {
    ele1.classList.toggle("out");
    ele1.addEventListener('transitionend', () => {
      var elements = document.getElementsByClassName("main_image_bottom_0");
      var len = elements.length;
      for (var i = 0; i < len; i++) {
        var e = elements[0];
        e.parentNode.removeChild(e);
      }
    });
  });
}

//マネキン表示
function mannequin(Front_back) {
  var ele1 = document.getElementById("main_image_mannequin");
  ele1.removeAttribute("id");
  ele1.classList.add("main_image_mannequin_0");
  
  var img = document.createElement('img');
  var file_name2 = mannequin_image[Front_back];
  img.setAttribute('src', file_name2);
  img.setAttribute("id", "main_image_mannequin");
  img.classList.add("feedin");
  img.classList.add("image_width");
  img.setAttribute('onerror', error_icon);

  document.getElementById('image_box').prepend(img);

  img.addEventListener('load', (e)=> {
    ele1.classList.toggle("out");
    ele1.addEventListener('transitionend', () => {
      var elements = document.getElementsByClassName("main_image_mannequin_0");
      var len = elements.length;
      for (var i = 0; i < len; i++) {
        var e = elements[0];
        e.parentNode.removeChild(e);
      }
    });
  });
}

//背景表示
function backgraund(backgraund_number) {

  var ele1 = document.getElementById("backgraund_image");
  ele1.removeAttribute("id");
  ele1.classList.add("backgraund_image_0");
  
  var img = document.createElement('img');
  var file_name = backgraund_image[backgraund_number];
  img.setAttribute('src', file_name);
  img.setAttribute("id", "backgraund_image");
  img.classList.add("feedin");
  img.setAttribute('onerror', error_icon);

  document.getElementById('main2').prepend(img);
  img.addEventListener('load', (e)=> {
    ele1.classList.toggle("out");
    ele1.addEventListener('transitionend', () => {
      var elements = document.getElementsByClassName("backgraund_image_0");
      var len = elements.length;
      for (var i = 0; i < len; i++) {
        var e = elements[0];
        e.parentNode.removeChild(e);
      }
    });
  });
};

//背景切り替え
function backgraund_change() {
  backgraund_number++;
  if(backgraund_number >= backgraund_image.length){
    backgraund_number = 0;
  }

  backgraund(backgraund_number);
};

//注文画面切り替え
function open_orderbox(){
  Front_back = 0;
  mannequin(Front_back);
  top_image(top_number_01, top_number_02, top_number_03, Front_back);
  bottom_image(bottom_number_01, bottom_number_02, bottom_number_03, Front_back);

  var elme1 = document.getElementsByClassName("select_box");
  for (var i = 0; i < elme1.length; i++) {
    elme1[i].classList.add("hidden");
  }

  var elme2 = document.getElementById("table01");
  elme2.classList.remove("hidden");

  // var elme2_2 = document.getElementById("comment");
  // elme2_2.classList.remove("hidden");
  // elme2.classList.add("flex_display");

  var elme3 = document.getElementById("main_image_mannequin");
  elme3.classList.remove("image_width");
  var elme4 = document.getElementById("main_image_top");
  elme4.classList.remove("image_width");
  var elme5 = document.getElementById("main_image_bottom");
  elme5.classList.remove("image_width");

  var elme6 = document.getElementById("event");
  elme6.classList.add("non_display");

  var elme7 = document.getElementById("cart");
  elme7.classList.add("non_display");

  var elme8 = document.getElementById("backgraund_button");
  elme8.classList.add("non_display");

  var elme9 = document.getElementById("order_back");
  elme9.classList.remove("hidden");

  document.getElementById("order_text").innerText = "印刷";
}

function order_back(){
  var elme1 = document.getElementById("table01");
  elme1.classList.add("hidden");
  // var elme2_2 = document.getElementById("comment");
  // elme2_2.classList.add("hidden");
  // elme2.classList.remove("flex_display");

  var elme2 = document.getElementById("main_image_mannequin");
  elme2.classList.add("image_width");
  var elme3 = document.getElementById("main_image_top");
  elme3.classList.add("image_width");
  var elme4 = document.getElementById("main_image_bottom");
  elme4.classList.add("image_width");

  var elme5 = document.getElementById("event");
  elme5.classList.remove("non_display");

  var elme6 = document.getElementById("cart");
  elme6.classList.remove("non_display");
  var elme7 = document.getElementById("backgraund_button");
  elme7.classList.remove("non_display");
  var elme8 = document.getElementById("order_back");
  elme8.classList.add("hidden");
  document.getElementById("order_text").innerText = "";
}

//注文画面表示
function order(){
  var sampleElement = document.getElementById('table01');
  var result = sampleElement.classList.contains('hidden');

  if(result){
    open_orderbox();
    // print();
    var elme_f = document.getElementById("table01");
    elme_f.classList.remove("hidden");
  
    var img = document.getElementById('main_image_top');
    var src = img.getAttribute('src');
    match = src.match(/[^/]+$/);
    filename = src.match(/([^/]+)\./)[1];
    extend = src.match(/[^.]+$/);
  
    document.getElementById("product_top").innerText = filename.substr(0, 23);
  
    for(let i = 0; i < types.length; i++){
      if(~filename.indexOf(types[i][1])){
        typename = types[i][0];
      }
    }
    document.getElementById("type_name_top").innerText = typename;
  
    for(let i = 0; i < coors.length; i++){
      if(~filename.indexOf(coors[i][1])){
        colorname = coors[i][0];
      }
    }

    document.getElementById("color_name_top").innerText = colorname;
  
    var img = document.getElementById('main_image_bottom');
    var src = img.getAttribute('src');
    match = src.match(/[^/]+$/);
    filename = src.match(/([^/]+)\./)[1];
    extend = src.match(/[^.]+$/);
  
    document.getElementById("product_bottom").innerText = filename.substr(0, 23);
  
    for(let i = 0; i < types.length; i++){
      if(~filename.indexOf(types[i][1])){
        typename = types[i][0];
      }
    }
    document.getElementById("type_name_bottom").innerText = typename;
  
    for(let i = 0; i < coors.length; i++){
      if(~filename.indexOf(coors[i][1])){
        colorname = coors[i][0];
      }
    }
    document.getElementById("color_name_bottom").innerText = colorname;
  }
  else{
    var size_top_Value = document.getElementById("size_top").value;
    var size_size_botton_Value = document.getElementById("size_botton").value;
    let first_check_boxes = document.getElementById("checked01");
    let second_check_boxes = document.getElementById("checked02");
    if((first_check_boxes.checked && (size_top_Value == "選択してください")) || (second_check_boxes.checked && (size_size_botton_Value == "選択してください"))){
      alert("サイズを選択してください");
    }else{
      var elme_1 = document.getElementById("top_checked_div");
      var elme_2 = document.getElementById("top_checked_table");
      var elme_3 = document.getElementById("bottom_checked_div");
      var elme_4 = document.getElementById("bottom_checked_table");
      if(first_check_boxes.checked){
        elme_1.classList.remove("hidden-print");
        elme_2.classList.remove("hidden-print");
      }
      else{
        elme_1.classList.add("hidden-print");
        elme_2.classList.add("hidden-print");
      }
      if(second_check_boxes.checked){
        elme_3.classList.remove("hidden-print");
        elme_4.classList.remove("hidden-print");
      }
      else{
        elme_3.classList.add("hidden-print");
        elme_4.classList.add("hidden-print");
      }
      // var element = document.getElementById('comment');
      // if(element.value){
      //   element.classList.remove("hidden-print");
      // } else{
      //   element.classList.add("hidden-print");
      // }
      print();
    }

  }

  
  document.getElementById("amount_top").innerText = "￥" + price1.toLocaleString() + "（税込）";

  document.getElementById("amount_bottom").innerText = "￥" + price2.toLocaleString() + "（税込）";

  checked01();
}

//前後切り替え
function rotate() {
  if (Front_back == 0) {
    Front_back = 1;
  }
  else {
    Front_back = 0;
  }

  mannequin(Front_back);
  top_image(top_number_01, top_number_02, top_number_03, Front_back);
  bottom_image(bottom_number_01, bottom_number_02, bottom_number_03, Front_back);
}

//上部色選択
function top_color_click(x){
  top_number_03 = x;
  top_image(top_number_01, top_number_02, top_number_03, Front_back);
  top_pattern_select();
  top_customize01_select();
  icon_select();
}

//上部柄選択
function top_pattern_click(x){
  top_number_02 = x;
  top_image(top_number_01, top_number_02, top_number_03, Front_back);
  top_color_select();
  top_customize01_select();
  icon_select();
}

//上部カスタマイズ1選択
function top_customize1_click(x){
  top_number_01 = x;
  top_image(top_number_01, top_number_02, top_number_03, Front_back);
  top_pattern_select();
  top_color_select();
  icon_select();
}

//下部柄選択
function bottom_pattern_click(x){
  bottom_number_02 = x;
  bottom_image(bottom_number_01, bottom_number_02, bottom_number_03, Front_back);
  bottom_color_select();
  icon_select();
}

//下部色選択
function bottom_color_click(x){
  bottom_number_03 = x;
  bottom_image(bottom_number_01, bottom_number_02, bottom_number_03, Front_back);
  bottom_pattern_select();
  icon_select();
}

//選択画像の情報取得
function Image_information(top_file_pass, bottom_file_pass){  
  top_match = top_file_pass.match(/[^/]+$/);
  top_filename = top_file_pass.match(/([^/]+)\./)[1];
  top_extend = top_file_pass.match(/[^.]+$/);

  for(let i = 0; i < customize1.length; i++){
    if(~top_filename.indexOf(customize1[i][1])){
      top_customize1name = customize1[i][0];
    }
  }

  for(let i = 0; i < types.length; i++){
    if(~top_filename.indexOf(types[i][1])){
      top_typename = types[i][0];
    }
  }

  for(let i = 0; i < coors.length; i++){
    if(~top_filename.indexOf(coors[i][1])){
      top_colorname = coors[i][0];
    }
  }

  bottom_match = bottom_file_pass.match(/[^/]+$/);
  bottom_filename = bottom_file_pass.match(/([^/]+)\./)[1];
  bottom_extend = bottom_file_pass.match(/[^.]+$/);

  for(let i = 0; i < types.length; i++){
    if(~bottom_filename.indexOf(types[i][1])){
      bottom_typename = types[i][0];
    }
  }

  for(let i = 0; i < coors.length; i++){
    if(~bottom_filename.indexOf(coors[i][1])){
      bottom_colorname = coors[i][0];
    }
  }

  // document.getElementById("top_customize1name").innerText = top_customize1name;
  // document.getElementById("top_typename").innerText = top_typename;
  // document.getElementById("top_colorname").innerText = top_colorname;
  // document.getElementById("bottom_typename").innerText = bottom_typename;
  // document.getElementById("bottom_colorname").innerText = bottom_colorname;
}

function checked01(){
  var price01;
  var price02;
  var price03;
  let first_check_boxes = document.getElementById("checked01");
  let second_check_boxes = document.getElementById("checked02");
  if(first_check_boxes.checked){
    price01 = price1;
  }
  else{
    price01 = 0;
  }
  if(second_check_boxes.checked){
    price02 = price2;
  }
  else{
    price02 = 0;
  }
  price03 = price01 + price02;
  document.getElementById("amount_all").innerText = "￥" + price03.toLocaleString() + "（税込）";
}


function top_event(){
  // var elme1 = document.getElementById("top_pattern_select_box_01");
  // elme1.classList.remove("hidden");
  // var elme2 = document.getElementById("top_color_select_box_01");
  // elme2.classList.remove("hidden");
  var elme2 = document.getElementById("select_box2")
  elme2.classList.remove("hidden");
  var elme3 = document.getElementById("top_customize01_select_box_01");
  elme3.classList.remove("hidden");
  var elme4 = document.getElementById("top_event");
  elme4.classList.add("hidden");
  // var elme5 = document.getElementById("bottom_pattern_select_box_01");
  // elme5.classList.add("hidden");
  // var elme6 = document.getElementById("bottom_color_select_box_01");
  // elme6.classList.add("hidden");
  var elme5 = document.getElementById("select_box3");
  elme5.classList.add("hidden")
  var elme7 = document.getElementById("bottom_event");
  elme7.classList.remove("hidden");
}

function bottom_event(){
  // var elme1 = document.getElementById("bottom_pattern_select_box_01");
  // elme1.classList.remove("hidden");
  // var elme2 = document.getElementById("bottom_color_select_box_01");
  // elme2.classList.remove("hidden");
  var elme1 = document.getElementById("select_box3");
  elme1.classList.remove("hidden");
  var elme3 = document.getElementById("bottom_event");
  elme3.classList.add("hidden");
  // var elme4 = document.getElementById("top_pattern_select_box_01");
  // elme4.classList.add("hidden");
  // var elme5 = document.getElementById("top_color_select_box_01");
  // elme5.classList.add("hidden");
  var elme4 = document.getElementById("select_box2");
  elme4.classList.add("hidden");
  var elme6 = document.getElementById("top_customize01_select_box_01");
  elme6.classList.add("hidden");
  var elme7 = document.getElementById("top_event");
  elme7.classList.remove("hidden");
}

function delete_event(){
  // var elme1 = document.getElementById("top_pattern_select_box_01");
  // elme1.classList.add("hidden");
  // var elme2 = document.getElementById("top_color_select_box_01");
  // elme2.classList.add("hidden");
  var elme3 = document.getElementById("top_customize01_select_box_01");
  elme3.classList.add("hidden");
  // var elme4 = document.getElementById("bottom_pattern_select_box_01");
  // elme4.classList.add("hidden");
  // var elme5 = document.getElementById("bottom_color_select_box_01");
  // elme5.classList.add("hidden");
  var elme4 = document.getElementById("select_box2");
  elme4.classList.add("hidden");
  var elme5 = document.getElementById("select_box3");
  elme5.classList.add("hidden")
  var elme6 = document.getElementById("top_event");
  elme6.classList.remove("hidden");
  var elme7 = document.getElementById("bottom_event");
  elme7.classList.remove("hidden");
}

//選択アイコン表示
function icon_select() {
  var elme_10 = document.getElementsByClassName("Choices");
  for (var i = 0; i < elme_10.length; i++) {
    elme_10[i].classList.remove("choosing");
  }

  var elme_0 = document.getElementById("top_customize01_icon_" + top_number_01);
  elme_0.classList.add("choosing");
  var elme_1 = document.getElementById("top_pattern_icon_" + top_number_02);
  elme_1.classList.add("choosing");
  var elme_2 = document.getElementById("top_color_icon_" + top_number_03);
  elme_2.classList.add("choosing");
  var elme_3 = document.getElementById("bottom_pattern_icon_" + bottom_number_02);
  elme_3.classList.add("choosing");
  var elme_4 = document.getElementById("bottom_color_icon_" + bottom_number_03);
  elme_4.classList.add("choosing");
}

//セレクト画面_上部柄選択
function top_pattern_select(){

  var ele1 = document.getElementById("top_pattern_select_box_02");
  ele1.remove();

  var div_1 = document.createElement('div');
  div_1.setAttribute("id", "top_pattern_select_box_02");
  div_1.className = "swiper-container gallery-thumbs";

  var div_2 = document.createElement('div');
  div_2.setAttribute("id", "top_pattern_select_box_03");
  div_2.className = "swiper-wrapper";
  div_1.appendChild(div_2);

  var div_3 = document.createElement('div');
  div_3.className = "swiper-button-next";
  div_1.appendChild(div_3);

  var div_4 = document.createElement('div');
  div_4.className = "swiper-button-prev";
  div_1.appendChild(div_4);

  document.getElementById('top_pattern_select_box_01').appendChild(div_1);


  for (l = 0; l < top_pattern_Thumbnails.length; l++) {
    if(Product_image[top_number_01][l][top_number_03][Front_back]){
    var div = document.createElement('div');
    div.className = ('swiper-slide');

    var img = document.createElement('img');
    
      (function (n) {
        img.onclick = function () {
          top_pattern_click(n);
        };
      })(l);
    
    img.src = top_pattern_Thumbnails[l];
    img.id = "top_pattern_icon_" + l;
    img.className = ("Choices");
    div.appendChild(img);

    document.getElementById('top_pattern_select_box_03').appendChild(div);
    }
  }

  let client_h = document.getElementById('top_pattern_select_box_03').clientHeight;
  var galleryThumbs = new Swiper('#top_pattern_select_box_02', {
    direction: 'vertical',
    slidesPerView: (client_h - 0) / 100,
    preventClicks: true,
    initialSlide: top_number_02,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
  });
}

//セレクト画面_上部色選択
function top_color_select(){

  var ele1 = document.getElementById("top_color_select_box_02");
  ele1.remove();

  var div_1 = document.createElement('div');
  div_1.setAttribute("id", "top_color_select_box_02");
  div_1.className = "swiper-container gallery-thumbs";

  var div_2 = document.createElement('div');
  div_2.setAttribute("id", "top_color_select_box_03");
  div_2.className = "swiper-wrapper";
  div_1.appendChild(div_2);

  var div_3 = document.createElement('div');
  div_3.className = "swiper-button-next";
  div_1.appendChild(div_3);

  var div_4 = document.createElement('div');
  div_4.className = "swiper-button-prev";
  div_1.appendChild(div_4);

  document.getElementById('top_color_select_box_01').appendChild(div_1);
  for (l = 0; l < top_color_Thumbnails.length; l++) {
    if(Product_image[top_number_01][top_number_02][l][Front_back]){
    var div = document.createElement('div');
    div.className = ('swiper-slide');

    var img = document.createElement('img');
    
      
      (function (n) {
        img.onclick = function () {
          top_color_click(n);
        };
      })(l);
    
    img.src = top_color_Thumbnails[l];
    img.id = "top_color_icon_" + l;
    img.className = ("Choices colorimage");
    div.appendChild(img);

    document.getElementById('top_color_select_box_03').appendChild(div);
    }
  }

  let client_h = document.getElementById('top_color_select_box_03').clientHeight;
  var galleryThumbs = new Swiper('#top_color_select_box_02', {
    direction: 'vertical',
    slidesPerView: (client_h - 0) / 100,
    preventClicks: true,
    initialSlide: top_number_03,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
  });
}

//セレクト画面_上部カスタマイズ1選択
function top_customize01_select(){

  var ele1 = document.getElementById("top_customize01_select_box_02");
  ele1.remove();

  var div_1 = document.createElement('div');
  div_1.setAttribute("id", "top_customize01_select_box_02");
  div_1.className = "swiper-container gallery-thumbs";

  var div_2 = document.createElement('div');
  div_2.setAttribute("id", "top_customize01_select_box_03");
  div_2.className = "swiper-wrapper";
  div_1.appendChild(div_2);

  var div_3 = document.createElement('div');
  div_3.className = "swiper-button-next";
  div_1.appendChild(div_3);

  var div_4 = document.createElement('div');
  div_4.className = "swiper-button-prev";
  div_1.appendChild(div_4);

  document.getElementById('top_customize01_select_box_01').appendChild(div_1);
  for (l = 0; l < top_customize1_Thumbnails.length; l++) {
    if(Product_image[l][top_number_02][top_number_03][Front_back]){
    var div = document.createElement('div');
    div.className = ('swiper-slide');

    var img = document.createElement('img');
    
      (function (n) {
        img.onclick = function () {
          top_customize1_click(n);
        };
      })(l);
    
    img.src = top_customize1_Thumbnails[l];
    img.id = "top_customize01_icon_" + l;
    img.className = ("Choices");
    div.appendChild(img);
    
    document.getElementById('top_customize01_select_box_03').appendChild(div);
    }
  }

  let client_h = document.getElementById('top_customize01_select_box_03').clientHeight;
  var galleryThumbs = new Swiper('#top_customize01_select_box_02', {
    direction: 'vertical',
    slidesPerView: (client_h - 0) / 100,
    preventClicks: true,
    initialSlide: top_number_01,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
  });
}

//セレクト画面_下部色選択
function bottom_color_select(){

  var ele1 = document.getElementById("bottom_color_select_box_02");
  ele1.remove();

  var div_1 = document.createElement('div');
  div_1.setAttribute("id", "bottom_color_select_box_02");
  div_1.className = "swiper-container gallery-thumbs";

  var div_2 = document.createElement('div');
  div_2.setAttribute("id", "bottom_color_select_box_03");
  div_2.className = "swiper-wrapper";
  div_1.appendChild(div_2);

  var div_3 = document.createElement('div');
  div_3.className = "swiper-button-next";
  div_1.appendChild(div_3);

  var div_4 = document.createElement('div');
  div_4.className = "swiper-button-prev";
  div_1.appendChild(div_4);

  document.getElementById('bottom_color_select_box_01').appendChild(div_1);
  for (l = 0; l < bottom_color_Thumbnails.length; l++) {
    if(Product_image_bottom[bottom_number_01][bottom_number_02][l][Front_back]){
    var div = document.createElement('div');
    div.className = ('swiper-slide');

    var img = document.createElement('img');
    
      (function (n) {
        img.onclick = function () {
          bottom_color_click(n);
        };
      })(l);
    
    img.src = bottom_color_Thumbnails[l];
    img.id = "bottom_color_icon_" + l;
    img.className = ("Choices  colorimage");
    div.appendChild(img);

    document.getElementById('bottom_color_select_box_03').appendChild(div);
    }
  }

  let client_h = document.getElementById('bottom_color_select_box_03').clientHeight;
  var galleryThumbs = new Swiper('#bottom_color_select_box_02', {
    direction: 'vertical',
    slidesPerView: (client_h - 0) / 100,
    preventClicks: true,
    initialSlide: bottom_number_03,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
  });
}

//セレクト画面_下部柄選択
function bottom_pattern_select(){

  var ele1 = document.getElementById("bottom_pattern_select_box_02");
  ele1.remove();

  var div_1 = document.createElement('div');
  div_1.setAttribute("id", "bottom_pattern_select_box_02");
  div_1.className = "swiper-container gallery-thumbs";

  var div_2 = document.createElement('div');
  div_2.setAttribute("id", "bottom_pattern_select_box_03");
  div_2.className = "swiper-wrapper";
  div_1.appendChild(div_2);

  var div_3 = document.createElement('div');
  div_3.className = "swiper-button-next";
  div_1.appendChild(div_3);

  var div_4 = document.createElement('div');
  div_4.className = "swiper-button-prev";
  div_1.appendChild(div_4);

  document.getElementById('bottom_pattern_select_box_01').appendChild(div_1);
  for (l = 0; l < bottom_pattern_Thumbnails.length; l++) {
    if(Product_image_bottom[bottom_number_01][l][bottom_number_03][Front_back]){
    var div = document.createElement('div');
    div.className = ('swiper-slide');

    var img = document.createElement('img');
    
      (function (n) {
        img.onclick = function () {
          bottom_pattern_click(n);
        };
      })(l);
    
    img.src = bottom_pattern_Thumbnails[l];
    img.id = "bottom_pattern_icon_" + l;
    img.className = ("Choices");
    div.appendChild(img);
    
    document.getElementById('bottom_pattern_select_box_03').appendChild(div);
    }
  }

  let client_h = document.getElementById('bottom_pattern_select_box_03').clientHeight;
  var galleryThumbs = new Swiper('#bottom_pattern_select_box_02', {
    direction: 'vertical',
    slidesPerView: (client_h - 0) / 100,
    preventClicks: true,
    initialSlide: bottom_number_02,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
  });
};


var startX = null;
var endX = null;

window.addEventListener('load', function(){

  // スワイプ／フリック
  document.getElementById("main_box").addEventListener('touchmove', logSwipe);
  
  // タッチ開始
  document.getElementById("main_box").addEventListener('touchstart', logSwipeStart);
  
  // タッチ終了
  document.getElementById("main_box").addEventListener('touchend', logSwipeEnd);

});

function logSwipeStart(event) {
  // event.preventDefault();
  startX = event.touches[0].pageX;
  startY = event.touches[0].pageY;
}

function logSwipe(event) {
  // event.preventDefault();
  endX = event.touches[0].pageX;
  endY = event.touches[0].pageY;
}

function logSwipeEnd(event) {
  // event.preventDefault();
  var sampleElement = document.getElementById('table01');
  var result = sampleElement.classList.contains('hidden');

  if(result){
    if(endX && (Math.abs(endY - startY) < 100)){
      if(endX < startX - 100) {
        rotate();
      }
      else if(endX > startX + 100) {
        rotate();
      }
    }
  }

  startX = null;
  endX = null;  
}

function tutorial(){
  var ele = document.getElementById("tutorial");
  ele.remove();
  top_event();
}

function load_finish(){
  var ele = document.getElementById("loading");
  ele.remove();
}

function load_out(){
  var ele = document.getElementById("loading2");
  ele.classList.add("non_display");
  var ele2 = document.getElementById("loading3");
  ele2.classList.remove("non_display");
}