<?php
//reik dar prijungti butinai susitvarkyma
header("Access-Control-Allow-Origin: *");
$servername = "localhost";
$username = "tomas";
$password = "tomas";
$dbname = "kcs_db";
$id='';

$conn = new mysqli($servername, $username, $password, $dbname);


$method = $_SERVER['REQUEST_METHOD'];
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

switch ($method){
    case 'GET':
        $sql="SELECT * FROM activity_info";
        break;
}

$result=mysqli_query($conn, $sql);

if (!$result){
    http_response_code(404);
    die(mysqli_error($conn));
}

if($method == 'GET'){
    if(!$id) echo '[';
    for ($i=0; $i<mysqli_num_rows($result); $i++){
        echo($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if(!$id) echo']';
}else{
    mysqli_affected_rows($conn);
}
$conn->close();

