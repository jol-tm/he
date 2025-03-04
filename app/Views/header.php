<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=chevron_left,chevron_right,close"/>
    <link rel="stylesheet" href="<?= base_url('style.css'); ?>">
    <link rel="shortcut icon" href="https://i.ibb.co/PdPJD7f/favicon.png" type="image/x-icon">
    <title>H.E.</title>
</head>
<body>
    <header id="top">
        <a href="#contacts" class="headerLink"><h5>CONTATOS</h5></a>
        <a href="#" class="headerLink"><h1 id="logo">H.E.</h1></a>
        <div id="loginAndBagWrapper">
            <h5 class="headerLink">ENTRAR</h5>
            <a href="" class="headerLink">
                <div class="bagWrapper">
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="bagPath" d="M5.5 8.5C5.5 2.5 6.26293 0.5 9.5 0.5C12.7371 0.5 13.5 2.5 13.5 8.5M9.5 5H1.5L1 19H9.5H18L17.5 5H9.5Z" stroke="black" stroke-linejoin="round"/></svg>
                    <div class="bagAmount">(0)</div>
                </div>
            </a>
        </div>
    </header>
    <nav>
        <div id="navOptions">
            <a href="<?= current_url() == base_url() . 'index.php/' ? '#' : base_url('/'); ?>" class="headerLink"><h5>INÍCIO</h5></a>
            <a href="<?= base_url('shop'); ?>" class="headerLink"><h5>SHOP</h5></a>
            <a href="#contacts" class="headerLink"><h5>CONTATOS</h5></a>
            <h5 id="" class="headerLink">ENTRAR</h5>
            <a href="" class="headerLink">
                <div class="bagWrapper">
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="bagPath" d="M5.5 8.5C5.5 2.5 6.26293 0.5 9.5 0.5C12.7371 0.5 13.5 2.5 13.5 8.5M9.5 5H1.5L1 19H9.5H18L17.5 5H9.5Z" stroke="black" stroke-linejoin="round"/></svg>
                    <div class="bagAmount">(0)</div>
                </div>
            </a>
        </div>
        <a href="<?= current_url() == base_url() . 'index.php/' ? '#' : base_url('/'); ?>" class="headerLink"><h2 id="miniLogo">H.E.</h3></a>
    </nav>