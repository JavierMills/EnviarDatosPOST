<?php
$usuario = $_POST['usuario'];
$pass = $_POST['Password'];

if($usuario ==='' || $pass ==='' ){
    echo json_encode('error');


}else{
    echo json_encode('correcto: <br>Usuario:'.$usuario.'<br>Pass:'.$pass);

}