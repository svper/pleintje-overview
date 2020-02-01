<?php
$postdata = file_get_contents("php://input");
saveLineup($postdata);

function escape($conn, $input)
{
    if (!get_magic_quotes_gpc()) {
        $input = mysqli_real_escape_string($conn, $input);
    }
    return $input;
}

function connect()
{
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

function saveLineup($postdata)
{

    $lineup = json_decode($postdata);

    if (isset($lineup->match)) {
        foreach ($lineup->linedupPlayers as $pl) {
            if (isset($pl->id) && isset($pl->number)) {
                insertLinedupPlayer($lineup->match, $pl);
            }
        }
    } else {
        echo "no match id present";
    }
}

function insertLinedupPlayer($matchid, $pl)
{
    //     Create connection
    $conn = connect();
    //     Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $isKeeper = 1;
    if (!isset($pl->isKeeper) || $pl->isKeeper == false) {
        $isKeeper = 0;
    }

    $sql = "INSERT INTO `lineup` (`id`, `match_id`, `player_id`, `shirt_number`, `is_keeper`) VALUES (NULL, $matchid , $pl->id, $pl->number,  $isKeeper);";
    echo $sql;
    $conn->query('SET CHARACTER SET utf8');
    $result = $conn->query($sql);

    echo $result;
}
