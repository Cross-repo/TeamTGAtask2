<?php
include('connect.php');
$message = ''; 
if(isset($_POST['submit'])){
    // username and password sent from form 
    
    $myemail = mysqli_real_escape_string($conn,$_POST['email']);
    $mypassword = mysqli_real_escape_string($conn,$_POST['password']);  
    $mypassword = md5($mypassword);  


    $sql1 = "SELECT * FROM users WHERE `email` = '$myemail' and `password` = '$mypassword'";
    $query = mysqli_query($conn, $sql1) or die(mysqli_error($conn));
    $result = mysqli_fetch_array($query);
    $count = mysqli_num_rows($query);
    if ($count == 1 ) {
        session_start();
        $_SESSION['email'] = $myemail;
        $_SESSION['login_id'] = $result['id'];
        header("location: index.php");
    } else {
        $message = '<p class="text-warning">Invalid login credentials</p>';
       
    }}
?>