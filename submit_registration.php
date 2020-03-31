<html>
<body>

Shop Name: <?php echo $_POST["shop_name"]; ?><br>
Email: <?php echo $_POST["shop_email"]; ?>
Telefon: <?php echo $_POST["shop_phone"]; ?>
Erreichbarkeit: <?php echo isset($_POST["Freitag"]); ?> von <?php echo $_POST["Freitag_phone_availability_from"]; ?> bis <?php echo $_POST["Montag_phone_availability_to"]; ?>
Beschreibung: <?php echo $_POST["shop_description"]; ?>
Webseite: <?php echo $_POST["shop_website"]; ?>
Kategorien: <?php echo $_POST["shop_categories"]; ?>


<?php
   if(isset($_FILES['image'])){
      $errors= array();
      $file_name = $_FILES['image']['name'];
      $file_size =$_FILES['image']['size'];
      $file_tmp =$_FILES['image']['tmp_name'];
      $file_type=$_FILES['image']['type'];
      $file_ext=strtolower(end(explode('.',$_FILES['image']['name'])));
      
      $extensions= array("jpeg","jpg","png");
      
      if(in_array($file_ext,$extensions)=== false){
         $errors[]="extension not allowed, please choose a JPEG or PNG file.";
      }
      
      if($file_size > 2097152){
         $errors[]='File size must be excately 2 MB';
      }
      
      if(empty($errors)==true){
         move_uploaded_file($file_tmp,"images/".$file_name);
         echo "Success";
      }else{
         print_r($errors);
      }
   }
?>



</body>
</html>