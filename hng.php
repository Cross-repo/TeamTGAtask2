<?php
$message = '';
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $password = $POST['password'];
    if (empty($name)) {
        $message .= '<p class="error">All fields are required</p>'; 
    }
    elseif (strlen($name) < 3 || strlen($name) > 20) { 
        $message .= '<p class = "error">name must be between 3 and 20 characters</p>'; 
    }
    elseif (strlen($password) < 5 || strlen($password) > 12) { 
        $message .= '<p class = "error">Password should be at least 5 characters to make a strong password </p>'; 
    }
    if (empty($message)) {
        $message .= '<p class = "success">All inputs are valid, thank you</p>'; 
        saveToFile ($name,$password );
        header('Location:home.html');
        function saveToFile ($name, $password) {
            $fileHandler = fopen ('record.txt', 'a');
            $string = $firstname . ',' . $password ."\n";
            fwrite ($fileHandler, $string);
            fclose ($fileHandler);
            }
       
    }
}
?>
