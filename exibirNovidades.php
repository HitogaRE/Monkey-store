<?php
//if($titulo){
    $sql = "
        select titulo,novidade from novidades

    ";
    if($result=$db->query($sql)){
        while($linha=$result->fetch_array()){$res[]=$linha;}
        //echo "<table><tr><th>ID</th><th>Título</th></tr><tr><th colspan='2'>Novidade</th></tr>";
        foreach($res as $memo){
            echo "<tr>
                    <td><br><b>Título: {$memo[0]}</b></td>
                    </tr>
                    <tr>
                        <td colspan='2'><br><b>Novidade:</b><br><br>{$memo[1]}</td>
                    </tr>
                    <tr>
                        <br><br>

                </tr>";

        }
        echo "</table>";
    }
    else{
        echo "Erro na consulta";
    }
//}
?>