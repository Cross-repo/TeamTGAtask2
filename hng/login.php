<?php
include('connect.php');
$message = ''; 
if(isset($_POST['submit'])){
    // username and password sent from form 
    
    $myusername = mysqli_real_escape_string($link,$_POST['username']);
    $mypassword = mysqli_real_escape_string($link,$_POST['password']);    


    $sql1 = "Select * from admin where username = '$myusername' and password = '$mypassword'";
    $query = mysqli_query($link, $sql1) or die(mysql_error());
    $result = mysqli_fetch_array($query);
    $count = mysqli_num_rows($query);
    if ($count ==1 ) {
        $_SESSION['login_user'] = $myusername;
        $_SESSION['login_id'] = $result['id'];
        header("location: dashboard.php");
    } else {
        $message = '<p class="text-warning">Invalid login credentials</p>';
       
    }}
?>