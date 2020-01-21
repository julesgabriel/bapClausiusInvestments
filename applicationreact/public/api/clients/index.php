<?php
require('../includes/jsonheader.php');
require '../includes/dbconnect.php';

$method = $_SERVER['REQUEST_METHOD'];

if (isset($_GET["name"])) {
    $qry = $db->prepare('SELECT * from clients WHERE name= ?');
    $qryclients = $db->prepare('SELECT name from projects WHERE client= ?');

    $qry->execute(array($_GET["name"]));
    $qryclients->execute(array($_GET["name"]));
    $ans = $qry->fetchAll();
    $ansclients = $qryclients->fetchAll();
    $infosclients = array_map(function ($dbentry) {
        return array(
            $dbentry['name']);
    }, $ansclients);

    $infos = array_map(function ($dbentry) {
        global $infosclients;
        return array('name' => $dbentry['name'],
            'workingon' => $infosclients,
            'name_contact' => $dbentry['name_contact']);
    }, $ans);
    echo json_encode(array('infos' => $infos));
} else
    if (isset($_POST['user'], $_POST['email'],$_POST['password'], $_POST['answers_A'],$_POST['answers_B'], $_POST['answers_C'],$_POST['answers_D'], $_POST['email'])) {
        $qry = $db->prepare('INSERT INTO user(`user`, `email`,``password, `answers_A`,`answers_B`, `answers_D`, ) VALUES(?, ?,?,?,?,?)');
        $qry->execute(array($_POST["name"], $_POST["name_contact"]));
        echo json_encode(array('status' => 'success'));
    } else
        if ('DELETE' === $method) {
            $query = file_get_contents("php://input");
            parse_str($query, $result);
            $del = "DELETE from clients WHERE name  = '" . $result["name"] . "'";
            $db->exec($del);
            echo json_encode(array('status' => 'success'));
        } else {
            if ('PUT' === $method) {
                $query = parse_str(file_get_contents('php://input'), $_PUT);
                $put = "UPDATE clients SET name_contact ='" . $_PUT["name_contact"] . "' WHERE name = '" . $_PUT["name"] . "'";
                $db->query($put);
                echo json_encode(array('status' => 'success'));
            } else {
                $qry = $db->query('SELECT * from clients');
                $ans = $qry->fetchAll();
                $clients = array_map(function ($dbentry) {
                    return array(
                        $dbentry['name'],
                        $dbentry['name_contact']);
                }, $ans);
                echo json_encode(array('employees' => $clients));
            }
        }