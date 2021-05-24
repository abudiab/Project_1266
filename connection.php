<?php 
    // Connection details
	$servername = "localhost:3306";
    $username = "root";
    $password = "";
    $dbname = "diab";
    // Create a connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if($conn->connect_error){
        die("Failed to connect: " .$conn->connect_error);
    }
    echo "Connected successfully!"."<br />";


    // MYSQL Commands
    // Get data from db
    $sql = "SELECT * FROM manal";
    $result = $conn->query($sql);
    if($result == TRUE){
        // Show table content
        if($result-> num_rows > 0){
            while($row = $result->fetch_assoc()){
                echo $row["ItemId"]."<br />";
                echo $row["ItemName"]."<br />";
                echo $row["Price"]."<br />";
                echo $row["Quantity"]."<br />";
                echo $row["Price"]*$row["Quantity"]."<br />";
                echo "============"."<br />";

            }
            $result->free();
        }else {
            echo "0 results";
        }
        
    }
    else {
        echo "Failed: ".$conn->error;
    }
    

    // Insert data to db
    $sql = 'INSERT INTO manal (ItemName, Price, Quantity)
    VALUES(shal1, 29, 2)';
    $result1 = $conn->query($sql);
    if($result1 == TRUE){ echo "Data inserted successfully"."<br />";}
    else{ echo "Failed to insert: ".$conn->error;}

    // Close connection
    // mysqli_close($conn);

 ?>