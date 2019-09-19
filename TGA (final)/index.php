<?php
  include 'hng/connect.php';
  session_start();
  if (!isset($_SESSION['email'])) {
      header("Location: login.php");
  }
  $email = $_SESSION['email'];
  $sql1 = "SELECT * FROM users WHERE `email` = '$email'";
  $res1 = mysqli_query($conn , $sql1);
  $result = mysqli_fetch_array($res1);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Landing page</title>
  <link rel="stylesheet" href="landing.css">
</head>
<body>

  <main>
    <div class=cont>
      <h1 style="font-size: 32px">Welcome <?=$result['fullname']?>, you are logged in!!</h1>
      <p><a href="logout.php" class="sign-out">Sign Out</a></p>
    </div>
  </main>
  <script src="landing.js"></script>
</body>
</html>