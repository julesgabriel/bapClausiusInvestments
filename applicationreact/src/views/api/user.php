<?php
require('./includes/jsonheader.php');
require './includes/dbconnect.php';


$data = json_decode(file_get_contents("php://input"), true);

if (isset($_POST) && !empty($_POST)) {


    $user = $data['user'];
    $email = $data['email'];
    $password = $data['password'];
    $answers_A = $data['answers_A'];
    $answers_B = $data['answers_B'];
    $answers_C = $data['answers_C'];
    $answers_D = $data['answers_D'];

    $qry = $db->prepare('INSERT INTO user(`user`, `email`,`password`,`answers_A`, `answers_B`,`answers_C`, `answers_D` ) VALUES(?, ?,?,?,?,?,?)');
    $qry->execute(array($_POST["user"], $_POST["email"], $_POST['password'], $_POST['answers_A'], $_POST['answers_B'], $_POST['answers_C'], $_POST['answers_D']));
    echo json_encode(array('status' => 'success'));

}
else if(isset($_GET) && !empty($_GET)){


    $user = $data['user'];


    $qry = $db->prepare('SELECT * from user WHERE user= ?');

    $qry->execute(array($_GET["user"]));

    $ans = $qry->fetchAll();

    $infos = array_map(function ($dbentry) {
        return array('user' => $dbentry['user'],
            'email' => $dbentry['email'],
            'password' => $dbentry['password']);
    }, $ans);
    echo json_encode(array('infos' => $infos));
}




