<?php
//reik dar prijungti butinai susitvarkyma
$servername = "localhost";
$username = "tomas";
$password = "tomas";
$dbname = "manoDuombaze";
$id='';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection

$method = $_SERVER['REQUEST_METHOD'];
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

switch ($method){
    case 'GET':
        $sql="select* from activityInfo";
        break;
}

$result=mysqli_query($conn, $sql);

if (!$result){
    http_response_code(404);
    die(mysql_errno($conn));
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

//$sql = "SELECT id, city, price FROM activityInfo";
//$result = $conn->query($sql);
//
//if ($result->num_rows > 0) {
//    echo "<table><tr><th>ID</th><th>Name</th></tr>";
//    // output data of each row
//    while($row = $result->fetch_assoc()) {
//        echo "<tr><td>".$row["id"]."</td><td>".$row["name"]." ".$row["price"]."</td></tr>";
//    }
//    echo "</table>";
//} else {
//    echo "0 results";
//}
//$conn->close();
//?>