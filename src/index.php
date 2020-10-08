<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <title>MortgageCalculator</title>
  <base href="/calculator">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="styles.4a7841b9d51345233b5e.css"></head>
<body>

<app-root
  class="angular"
  id="calculator_root"
  realty_id="<?=$_GET['realty_id']//ID объекта недвижимости?>"
  ipoteka_order_url="<?=$_GET['ipoteka_order_url']//URL для кнопки оформления заявки?>"
  years="<?=$_GET['years']//Срок кредита в годах?>"
  realty_price="<?=$_GET['realty_price']//Стоимость недвижимости?>"
  down_percent="<?=$_GET['down_percent']//Первоначальный взнос в процентах?>"
  percent="<?=$_GET['percent']//Ставка по кредиту в процентах?>"
  show_overpayment="<?=$_GET['show_overpayment']//Показывать в результатах сумму переплаты?>"
  show_credit_sum="<?=$_GET['show_credit_sum']//Показывать в результатах сумму кредита?>"
  top_text="<?=$_GET['top_text']//Текст над формой?>"
  bottom_text="<?=$_GET['bottom_text']//Текст под формой?>">
</app-root>
<script src="runtime.e227d1a0e31cbccbf8ec.js" defer></script><script src="polyfills.a4021de53358bb0fec14.js" defer></script><script src="main.46c72e9b00ae96df68a5.js" defer></script></body>
</html>
