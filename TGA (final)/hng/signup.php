<?php
$message = '';
    
if(isset($_POST['submit'])){
    include('connect.php');
        $fullname = mysqli_escape_string($conn, $_POST ['fullname']);
        $email = mysqli_escape_string($conn, $_POST['email']);
        $password = mysqli_escape_string($conn, $_POST['password']);
        if(empty($fullname) || empty($email) || empty($password)){
            die ("All fields are Required");
            }
            elseif ( strlen ( $fullname ) < 3 || strlen ( $fullname ) > 20) {
                $message .= '<div class="alert alert-danger" role="alert">Full name must be between 3 and 20 characters</div>';
                }
                elseif ( strlen ( $email ) < 3 || strlen( $email ) > 50) {
                $message .= '<div class="alert alert-danger" role="alert">Email must be between 3 and 50 characters</div>';
                }
                elseif ( strlen ( $password ) < 8) {
                $message .= '<div class="alert alert-danger" role="alert">password should be at least 8 digits long</div>';
                }
        else{
            $password = md5($password);
        $sql = "INSERT INTO users(`fullname` , `email`,  `password`)
        VALUES('$fullname', 
                '$email',
                '$password')";

            // check existing email

        $sql1 = "SELECT * FROM users WHERE `email` = '$email'";
        $res1 = mysqli_query($conn , $sql1);
        $count = mysqli_num_rows($res1);
        if ($count == 1) {
            $message .= 'Email already in use';
        }
        else{
            $result = mysqli_query($conn , $sql);
            if($result){
                session_start();
                $_SESSION['email'] = $email;
                header("Location: index.php");
            }
            else{
                $message .= '<div class="alert alert-danger" role="alert">
                Record not Saved ' . mysqli_error($conn) . '<button class="btn"><a href = "index.php">Home</a></button>
                </div>';
            
            }
        }
        
        }
    }
 ?>
 