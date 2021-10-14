player_name = localStorage.getItem("player_name")
you_win_msg = "🥳 GREAT JOB, " + player_name + "! YOU ESCAPED! 🥳"

document.getElementById("you_win_msg").innerHTML = you_win_msg;