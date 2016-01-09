//here will hold the function that will control the different states for the animation of the dif framse

//global variables that will be used to keep track of the specific frames that are in certian positions
var playing_pos = 10; //holds the value for which frame is in the playing position
var next_pos = 9;//hold the value for which frame is in the next to be played position
var queue_begining = 0;//hold the value for which frame is at the begining of the queue
//var queue_array [0,1,2,3,4,5,6,7,8];//the list of frames that are in the queue, from pos 2 to 10

//function that moves the frame that is in the next position to the playing position
move_next_frame = function(){
  move_playing_frame(); //moves the frame that is in the playing position to the begining of the queue
  sycle_queue_frames();
}
//function that shuffles the queue top ten down when a new song is about to being playing
sycle_queue_frames = function(){
  var new_pos_frame;
  var old_pos_frame;
  var pos = queue_begining;
  var done = false;
  var count = 0;
  while(!done){ //since the values wrap after 10 using a for lood only works for the inital case of queue_begining being 0 so a while loop will work for all cases
    frame = "frame-" + pos;
    new_pos_frame = "pos-" + pos + '-div';
    if(pos - 1 < 0){
      pos = 11;
    }else{
      pos = pos - 1;
    }
    old_pos_frame = "pos-" + pos +"-div";
    $(frame).addClass(old_pos_frame);
    //$(frame).addClass(new_pos_frame);
    if(count + 1 > 9){
      done = true;
    }else {
      count ++;
    }
  }
  //change the position of the begingin of the queue to one less than what it currently is
  if(queue_begining == 0){
    queue_begining == 10;
  }else{
    queue_begining =-1;
  }
}
//function that moves the frame that is in the playing position to the back of the queue to get used as a new song frame
move_playing_frame = function(){
  var playing = 'music_frame_'+playing_pos;
  if(playing_pos == 0){ //changes the current playing to one less than what is currently is
    palying_pos == 10;
  }else{
    playing_pos=-1;
  }
  $(playing).toggleClass('playing-pos-div');
  //change the active class to the begining of the queue
}

//function to handle the frames when the document is inintailly loaded
load_frames = function(){


}
