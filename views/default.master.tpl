<!DOCTYPE html>
<html lang="en">
<head>
  {asset name='Head'}
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href='http://fonts.googleapis.com/css?family=Berkshire+Swash&subset=latin,latin-ext'
        rel='stylesheet' type='text/css'>
  {literal}
    <script type="text/javascript">$('html').hide();</script>
  {/literal}
</head>
<body id="{$BodyID}" class="{$BodyClass}">

<!-- Navbar
================================================== -->

<div class="navbar navbar-inverse navbar-fixed-top" id="bootstrap-navbar">
  <div class="navbar-inner">
    <div class="container">
      <a class="logo" href="/"></a>
      <ul id="menu-primary-navigation" class="nav">
        <li class="dropdown menu-knihy">
          <a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="/knihy/">
            <i class="icon-book icon-white"></i> <span>Knihy</span>
            <i class="icon-caret-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li class="menu-rozcestnik">
              <a href="/knihy/pisen-ledu-a-ohne/pisen-ledu-a-ohne/">Rozcestník</a>
            </li>
            <li><hr></li>
            <li class="menu-pisen-ledu-a-ohne">
              <a href="/knihy/pisen-ledu-a-ohne/">Píseň ledu a ohně</a>
            </li>
            <li class="menu-george-r-r-martin">
              <a href="/knihy/george-r-r-martin/">George R. R. Martin</a>
            </li>
            <li class="menu-preklady">
              <a href="/knihy/preklady/">Překlady</a>
            </li>
          </ul>
        </li>
        <li class="dropdown menu-svet">
          <a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="/svet/">
            <i class="icon-flag icon-white"></i> <span>Svět</span>
            <i class="icon-caret-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li class="menu-rozcestnik">
              <a href="/svet/svet-ledu-a-ohne/">Rozcestník</a>
            </li>
            <li><hr></li>
            <li class="menu-historie">
              <a href="/svet/historie/">Historie</a>
            </li>
            <li class="menu-geografie">
              <a href="/svet/geografie/">Geografie</a>
            </li>
            <li class="menu-organizace">
              <a href="/svet/organizace/">Organizace</a>
            </li>
            <li class="menu-postavy">
              <a href="/svet/postavy/">Postavy</a>
            </li>
            <li class="menu-proroctvi">
              <a href="/svet/proroctvi/">Proroctví</a>
            </li>
            <li class="menu-rodokmeny">
              <a href="/svet/rodokmeny/">Rodokmeny</a>
            </li>
          </ul>
        </li>
        <li class="dropdown menu-serial">
          <a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="/serial/ruzne/">
            <i class="icon-film icon-white"></i> <span>Seriál</span>
            <i class="icon-caret-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li class="menu-rozcestnik">
              <a href="/serial/hra-o-truny-na-hbo/">Rozcestník</a>
            </li>
            <li><hr></li>
            <li class="menu-1-rada">
              <a href="/serial/1-rada/">1. řada</a>
            </li>
            <li class="menu-2-rada">
              <a href="/serial/2-rada/">2. řada</a>
            </li>
            <li class="menu-3-rada">
              <a href="/serial/3-rada/">3. řada</a>
            </li>
            <li class="menu-video">
              <a href="/serial/video/">Video</a>
            </li>
            <li class="menu-ruzne">
              <a href="/serial/ruzne/">Různé</a>
            </li>
          </ul>
        </li>
        <li class="dropdown menu-komunita">
          <a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="/komunita/">
            <i class="icon-user icon-white"></i> <span>Komunita</span>
            <i class="icon-caret-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li class="menu-rozcestnik">
              <a href="/komunita/nocni-hlidka-komunita-ice-fire/">Rozcestník</a>
            </li>
            <li><hr></li>
            <li class="menu-deskove-hry">
              <a href="/komunita/deskove-hry/">Deskové hry</a>
            </li>
            <li class="menu-lcg">
              <a href="/komunita/lcg/">LCG</a>
            </li>
            <li class="menu-rpg-hry-na-hrdiny">
              <a href="/komunita/rpg-hry-na-hrdiny/">RPG – hry na hrdiny</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="nav pull-right">
        <li class="menu-forum active">
          <a href="/forum/">
            <i class="icon-comment icon-white"></i> <span>Fórum</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

<!-- Container
================================================== -->

<div class="container" id="bootstrap-container">
  <noscript>
    <p></p>
    <div class="alert alert-error">
      <strong>Pozor!</strong> Pro zobrazení obsahu je nutné povolit javascript.
    </div>
  </noscript>
  <div class="row">
    <div class="span8" id="content">
      {breadcrumbs}
      {asset name="Content"}
    </div>
    <div class="span4" id="panel">
      <div>
        {module name="MeModule"}
        {asset name="Panel"}
        <div class="Box">
          <h4>Sociální Sítě</h4>
          <div class="socsite text-center">
            <a href="http://www.youtube.com/icefirecz">
              <span class="icon-youtube-sign icon-3x" title="YouTube"></span>
            </a>
            <a href="http://www.pinterest.com/icefirecz/">
              <span class="icon-pinterest-sign icon-3x" title="Pinterest"></span>
            </a>
            <a href="http://www.icefire.cz/feed/">
              <span class="icon-rss-sign icon-3x" title="RSS"></span>
            </a>
            <a href="http://www.twitter.com/icefirecz">
              <span class="icon-twitter-sign icon-3x" title="Twitter"></span>
            </a>
            <a href="http://plus.google.com/106413913643255962911/">
              <span class="icon-google-plus-sign icon-3x" title="Twitter"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Footer
================================================== -->

<footer class="footer" id="bootstrap-footer">
    <div class="container">
        <div class="crow"></div>
        {asset name="Foot"}
        <p>Dotazy, náměty či nabídky spolupráce směřujte na alek/zav/icefire.cz. Fórum běží na <a href="{vanillaurl}">Vanille</a> s pomocí <a href="http://twitter.github.com/bootstrap/">Bootstrap</a>.</p>
        <p>Obsahový tým: Alek, heavy-head, Nevada, sveva | Vývojový tým: Alek, Montezuma3, paulcz</p>
        <p>Copyright &copy; 2006&mdash;2014 Ice &amp; Fire</p>
    </div>
</footer>

<div style="display:none;" class="nav_up" id="nav_up" title="nahoru">
  <i class="icon-chevron-up"></i>
</div>
<div style="display:none;" class="nav_comments" id="nav_comments" title="komentáře">
  <i class="icon-comments"></i>
</div>
<div style="display:none;" class="nav_down" id="nav_down" title="dolů">
  <i class="icon-chevron-down"></i>
</div>

{event name="AfterBody"}

</body>
</html>
