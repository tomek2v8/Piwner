<?php


$host= "mysql.cba.pl";
$user="piwner2v8";
$pass="Szatan666";
$db="piwner_cba_pl";


$con = new mysql($host,$user,$pass,$dn);

if($con->connection_error){
	die ("DB connection failed:". $con->connection_error);
	
	
}
$sql= "SELECT * FROM 'PiwoMarka' ORDER BY 'id_piwoMarka' DESC"
$qry= $con->query($sql);

$data= array();


if($qry->num_rows >0 ) {
	
	while($row= $gry->fetch_object()){
		
		$data[]= $row;
	} 
	} else {
		%data[]=null;
	}
	
	$con->close();
	
	echo json_encode($data);