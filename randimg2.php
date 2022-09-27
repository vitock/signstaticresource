<?php 
$url = 'https://zeo.onrender.com/randImg2?type='.($_GET['type'] ? $_GET['type']:'color').'&img='.$_GET['img'];
header( 'Location: '.$url ) ; 
?>