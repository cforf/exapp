<?php
include_once ('connect.php');

$sql = 'SELECT id, DATE_FORMAT(date_rec,"%d.%m.%Y"), input_data FROM main ORDER BY date_rec DESC LIMIT 8';
$stmt = $conn->prepare($sql);
$stmt->execute();

$arrForJSON = [];
$result = $stmt->fetchAll(PDO::FETCH_NUM);
for ($i = count($result) - 1; $i >= 0; $i--) {
     //fill our array-->
    $arrForJSON[] = $result[$i];
}

$stmt = NULL;

header('Content-Type: application/json');
$json = json_encode($arrForJSON);

echo $json;
?>
