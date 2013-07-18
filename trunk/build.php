<?php
    require_once 'simple_html_dom.php';
    $html = file_get_html('index.html');
    $result = "";
    foreach($html->find('script') as $element){
        $link = $element->src;
        $file = file_get_contents($link, true);
        $result .= "\n".$file;
    }
    $outdir = "dis\main.js";
    
    file_put_contents($outdir, $result);
    header( 'Location: index.html' ) ;
?>
