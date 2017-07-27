<?php

$date = filter_input(INPUT_POST, 'date_input');
$data = filter_input(INPUT_POST, 'number_data');

include_once ('connect.php');


try {
    $sql = 'INSERT INTO main VALUES(NULL, :date_rec, :input_data)';
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(':date_rec', $date);
    $stmt->bindValue(':input_data', $data, PDO::PARAM_INT);

    $stmt->execute();

} catch (PDOException $e) {
    echo 'Error - ' . $e->getMessage();
}

$stmt = NULL;

?>
