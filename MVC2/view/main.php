<?php
    ob_start();
?>
<h2>MVC techonolgy project. GameNews</h2>
<article>
    <p>
        About Games and Other news.
    </p>
</article>
<?php
    $content = ob_get_clean();
?>
<?php include 'view/templates/layout.php';?>