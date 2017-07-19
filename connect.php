<?php
require_once('../settings.php');

try {
    $conn = new PDO(
        sprintf(
            'mysql:host=%s;dbname=%s;port=%s;charset=%s',
            $settings['host'],
            $settings['name'],
            $settings['port'],
            $settings['charset']
        ),
        $settings['username'],
        $settings['password']
    );
   // echo 'Database connected. Again!';


} catch (PDOException $e) {
    //Database connection failed
    echo 'Database connection failed';
    exit;
}
?>