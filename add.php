<?php

//echo $_POST['number_data'];
// $date = $_POST['date_input'];
// $data = $_POST['number_data'];
$date = filter_input(INPUT_POST, 'date_input');
$data = filter_input(INPUT_POST, 'number_data');

include_once ('connect.php');


try {
    $sql = 'INSERT INTO main VALUES(NULL, :date_rec, :input_data)';
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(':date_rec', $date);
    $stmt->bindValue(':input_data', $data, PDO::PARAM_INT);

    /*$sql = "INSERT INTO main (`id`, `date_rec`, `input_data`, `loc`) VALUES (NULL, '".$date."' , '".$data."', 1)";
     $stmt = $conn->prepare($sql);*/
    $stmt->execute();

} catch (PDOException $e) {
    echo 'Error - ' . $e->getMessage();
}

$stmt = NULL;
//echo $firstName;
?>
