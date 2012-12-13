<?php

// одномерный массив из файла
$a[] = get_data("bouqets.csv");


//prn_arr($a);
// ассоциативный массив букетов по категориям
$bouqets[] = "";
foreach ($a[0] as $row) {
    $bouqets[] = array(
        "id" => $row[0],
        "cat" => $row[1],
        "name" => $row[2],
        "price" => $row[3],
        "foto1" => $row[4],
        "foto2" => $row[5],
        "foto3" => $row[6],
    );
}
unset($bouqets[0]);


function get_data($file)
{
    $array = array();
    $fp = fopen(__DIR__ . "/data/" . $file, r);
    while (!feof($fp)) {
        $array[] = fgetcsv($fp, 1024, ";");
    }
//    усекаем строку заголовков
    unset($array[0]);
    return $array;
}


function prn_arr($arr)
{
    echo "<pre>";
    print_r($arr);
    echo "</pre>";

}