telegram.php
 
https://api.telegram.org/bot1438114382:AAEIHJUhkIMkL9y2pAcPPhIfhYulAmYF20c/getUpdates

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];

$token = "1438114382:AAEIHJUhkIMkL9y2pAcPPhIfhYulAmYF20c";
 
$chat_id = "403463719";

$arr = array(
  'User name: ' => $name,
  'Phone: ' => $phone,
);
 

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
if ($sendToTelegram) {
  echo "Дякуємо!";
} else {
  echo "Помилочка!";
}

telegram>