<?php
    require_once 'simple_html_dom.php';
    $html = file_get_html('index.copy.html');
    $result = "";
    print_r("Concating all js file .....\n");
    
    /*
     * include all javascript file into 1 file
     */
    foreach($html->find('script') as $element){
        $link = $element->src;
        print_r($link."\n");
        if (strlen($link)){
            $file = file_get_contents($link, true);
        }        
        $result .= "\n".$file;
    }
    
    print_r("done ...\n");
    print_r("Writing to disk ...\n");
    
    $outdir = "dis\main1.js";    
    file_put_contents($outdir, $result);
    
    print_r("done ...\n");
    print_r("Minify javascript  ...\n");
    
    exec("java -jar compiler.jar --js=dis/main1.js --js_output_file=dis/main.js");
    exec("del ".$outdir);
    
    print_r("done ...\n");
    
    /*
     * include all css file into 1 file
     */
    print_r("Concating all css file .....\n");
    $result = "";
    foreach($html->find('link') as $element){
        $link = $element->href;
        $file = file_get_contents($link, true);
        $result .= "\n".$file;
    }
    
    print_r("done ...\n");
    print_r("Writing to disk .....\n");
    
    $outdir = "dis\main.css";    
    file_put_contents($outdir, $result);        
    
    print_r("done ...\n");
    
    header( 'Location: index.html' ) ;
?>
