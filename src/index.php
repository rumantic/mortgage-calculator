<?php
$version = 3;
?>
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <title>MortgageCalculator</title>
  <base href="/preview/mortgage-prod/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="styles.css?version=<?php echo $version;?>"></head>
<body>

<app-root
  class="angular"
  id="app_root"
  show_toolbar="0"
  hide_order_button="0"
  realty_id="<?=$_GET['realty_id']//ID объекта недвижимости?>"
  ipoteka_order_url="<?=$_GET['ipoteka_order_url']//URL для кнопки оформления заявки?>"
  years="<?=$_GET['years']//Срок кредита в годах?>"
  realty_price="<?=$_GET['realty_price']//Стоимость недвижимости?>"
  max_realty_price="<?=$_GET['max_realty_price']//Стоимость недвижимости?>"
  down_percent="<?=$_GET['down_percent']//Первоначальный взнос в процентах?>"
  percent="<?=$_GET['percent']//Ставка по кредиту в процентах?>"
  show_overpayment="<?=$_GET['show_overpayment']//Показывать в результатах сумму переплаты?>"
  show_credit_sum="<?=$_GET['show_credit_sum']//Показывать в результатах сумму кредита?>"
  top_text="<?=$_GET['top_text']//Текст над формой?>"
  bottom_text="<?=$_GET['bottom_text']//Текст под формой?>">
</app-root>
<script src="polyfills.js?version=<?php echo $version;?>" type="module"></script><script src="main.js?version=<?php echo $version;?>" type="module"></script></body>
</html>
