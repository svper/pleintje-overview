<?php

echo json_encode(getPlayers());

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

function getPlayers()
{
    //     Create connection
    $conn = connect();
    //     Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT * FROM `player`";
    $conn->query('SET CHARACTER SET utf8');
    $result = $conn->query($sql);
    $players = array();
    while ($player = mysqli_fetch_object($result)) {
        $players[] = $player;
    }
    return $players;
}
