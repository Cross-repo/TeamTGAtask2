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
                elseif (!is_numeric ( $password )) {
                $message .= '<div class="alert alert-danger" role="alert">password should not be numeric</div>';
                }
                elseif ( strlen ( $password ) != 11) {
                $message .= '<div class="alert alert-danger" role="alert">password should be at least 11 digits long</div>';
                }
        else{
        $sql = "INSERT INTO table(fullname , email,  password)
        VALUES('$fullname', 
                '$email',
                '$password',
                 NOW())";
                $result = mysqli_query($conn , $sql);
        if($result){
        $message .= '<div class="alert alert-success" role="alert">
        Record Saved Successfully <button class="btn"><a href = "landing.html">Home</a></button></div>';
        }
        else{
            $message .= '<div class="alert alert-danger" role="alert">
            Record not Saved ' . mysqli_error($conn) . '<button class="btn"><a href = "index.html">Home</a></button>
            </div>';
        
        }
        }
    }
 ?>
 