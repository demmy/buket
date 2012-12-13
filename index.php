<?php
//include twig
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/import.php';

$loader = new Twig_Loader_Filesystem(__DIR__ . '/template');
$twig = new Twig_Environment($loader);

$twig->addGlobal('products', $bouqets);

echo $twig->render('layout.twig', $bouqets);
