<?php
require('./includes/jsonheader.php');
require './includes/dbconnect.php';


echo('ha');
if (isset($_POST) && !empty($_POST)) {

    $data = json_decode(file_get_contents("php://input"), true);

    $user = $data['user'];
    $email = $data['email'];
    $password = $data['password'];
    $answers_A = $data['answers_A'];
    $answers_B = $data['answers_B'];
    $answers_C = $data['answers_C'];
    $answers_D = $data['answers_D'];


    $reqmail = $db->prepare("SELECT * FROM user WHERE email=$email");
    $reqmail->execute(array($email));
    $mailexist = $reqmail->rowCount();

    $reqpassword = $db->prepare("SELECT * FROM user WHERE password=$password");
    $reqpassword->execute(array($password));
    $passwordexist = $reqmail->rowCount();

    $reqpuser = $db->prepare("SELECT * FROM user WHERE password=$user");
    $reqpuser->execute(array($user));
    $userexist = $reqmail->rowCount();


    if($mailexist && $userexist && $passwordexist === 0){
        $qry = $db->prepare('INSERT INTO user(`user`, `email`,`password`,`answers_A`, `answers_B`,`answers_C`, `answers_D` ) VALUES(?, ?,?,?,?,?,?)');
        $qry->execute(array($_POST["user"], $_POST["email"], $_POST['password'], $_POST['answers_A'], $_POST['answers_B'], $_POST['answers_C'], $_POST['answers_D']));
        echo json_encode(array('status' => 'success'));
    }
    else{
        var_dump('no');
    }

}




