<?php

echo json_encode(getMatches());


function escape($conn,$input)
{
    if (!get_magic_quotes_gpc()) {
        $input = mysqli_real_escape_string($conn,$input);
    }
    return $input;
}

function connect(){
    $servername = "localhost";
   $username = "deb38057_pleintje";
       $password = "pleintje";
    $dbname = "deb38057_pleintje";

   // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
    if ($conn->connect_error) {
       die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
}


function getMatches(){
	// 	Create connection
	$conn = connect();
	// 	Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$sql = "SELECT * FROM `match`";
	
	$conn->query('SET CHARACTER SET utf8');
	$result = $conn->query($sql);
	$matches = array();
	while ($match = mysqli_fetch_object($result)) {
		//get the team
		$match->lineup = getLineup($match->id);
		$match->goals = getGoals($match->id);
		$matches[] = $match;
	}
	return $matches;
}

function getLineup($matchid){
	// 	Create connection
	$conn = connect();
	// 	Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$sql = "SELECT * FROM `lineup` WHERE match_id = " .$matchid;
	$conn->query('SET CHARACTER SET utf8');
	$result = $conn->query($sql);
	$lineup = array();
	while ($player_lineup = mysqli_fetch_object($result)) {
		$player_lineup->player = getPlayer($player_lineup->player_id);
		$lineup[] = $player_lineup;		
	}
	return $lineup;
}

function getGoals($matchid){
	// 	Create connection
	$conn = connect();
	// 	Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$sql = "SELECT * FROM `goal` WHERE match_id = " .$matchid;
	
	$conn->query('SET CHARACTER SET utf8');
	$result = $conn->query($sql);
	$goals = array();
	while ($goal = mysqli_fetch_assoc($result)) {
		if(isset($goal["scorer_id"])){
			$goal["scorer"] = getPlayer($goal["scorer_id"]);
		}
		if(isset($goal["assist_id"])){
			$goal["assist"] = getPlayer($goal["assist_id"]);
		}
		$goals[] = $goal;
	}
	return $goals;
}

function getPlayer($playerid){
	// 	Create connection
	$conn = connect();
	// 	Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$sql = "SELECT * FROM `player` WHERE id = " . $playerid;
	$conn->query('SET CHARACTER SET utf8');
	$result = $conn->query($sql);
	$player = mysqli_fetch_assoc($result);
	return $player;
}
?>