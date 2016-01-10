var pos_playing_left = -125 ;
var pos_playing_top = -$(window).height()*.42;
var window_var_width = $(window).width();
//function to handle the frames when the document is inintailly loaded
function load_frames(){
  var var_class, postion;
  var width = $(window).width();
  var height = $(window).height();
  var default_top = height*0.45;
  var default_left = -width*0.2;
  for(var i = 0;i<11;i++){
    var_class = "#card_" + i;

    position = $(var_class).position();
    $(var_class).animate({
      "top": "-="+(position.top - default_top)+"px",
      "left": "-="+(position.left - default_left)+"px"
    },1000);
    $(var_class).fadeIn();
  }

}
$(function(){
  load_frames();
  set_z_axis();
  initial_pos();
  enable_player();
});

function set_z_axis(){
  var var_class;
  for(var i = 0;i<11;i++){
    var_class = "#card_" + i;
    $(var_class).css('z-index',i);
  }
}
function initial_pos(){

  var var_class;
  var last_pos = $(window).width()*.45;
  var position;
  for(var i = 10;i>=0;i--){
    var_class = "#card_" + i;
    $(var_class).animate({
      "left": "+="+last_pos+"px"

    },1000);
    last_pos -= 60;
    if(i > 9){

      position = $(var_class).position();
      $(var_class).animate({

        "left": "-="+(position.left - pos_playing_left)+"px",
        "top": "-="+(position.top - pos_playing_top)+"px"
      },1000);

    }
  }
}
function cycle(){
  for(var i = 0;i<11;i++){

  }
}
function reset_pos(div_edit) {
  div_edit.animate({
  "top": "+="+(div_edit.position.top)+"px",
  "left": "+="+(div_edit.position.left)+"px"
  },1000)
  //window.alert("wait");

}
function enable_player(){

  reset_pos($('.player'));
  var position = $('.player').position();
  //window.alert(position.left);
  $('.player').animate({
     "top": "+="+($(window).width()*.1)+"px",
     "left": "+="+($(window).height()*.245)+"px"
    //"left":"+="+()+"px"
  },1000);
  $('.player').fadeIn();

}
