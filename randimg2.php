<?php 
$url = 'https://vee.cyclic.app/randImg2?type='.($_GET['type'] ? $_GET['type']:'color').'&img='.$_GET['img'];
header( 'Location: '.$url ) ; 
?>