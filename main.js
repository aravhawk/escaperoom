player_input_box = document.getElementById("player_name");
function submit_name(player_name, hello_player_name){  
    if(player_input_box.value.length == 0){
      player_input_box.placeholder = "⚠ NAME REQUIRED!! ⚠";
    }
    else{
      player_name = player_input_box.value;
      localStorage.setItem("player_name", player_name);
      hello_player_name = "Welcome to the Escape Room, " + player_name + ". Please click start to begin";
      document.getElementById("hello_name").innerHTML = hello_player_name;
    }
    
  }

  function start_game(){
    if(player_input_box.value.length == 0){
      player_input_box.placeholder = "⚠ NAME REQUIRED!! ⚠";
    }
    else{
      window.location.replace("game.html");
    }
  }

  function submit_code(){
    real_code = "2652181-12-18-177-1991251435-115252151184-11-51420-3-18";
    entered_code = document.getElementById("final_code_input_box").value;

    if(real_code == entered_code){
      window.location.replace("you-win.html");
      console.log("🥳 The player escaped! 🥳")
    }
    else{
      document.getElementById("error").innerHTML = "⚠ ERROR!! WRONG CODE!! PLEASE TRY AGAIN!! ⚠"
      console.log("⚠ The player entered the wrong code. ⚠")
    }
  }