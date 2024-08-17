
<?php

$update = file_get_contents("php://input");
$update_array = json_decode($update, true); #JSON


if (isset($update_array["message"])) {

  $text = $update_array["message"]["text"];
  $chat_id = $update_array["message"]["chat"]["id"];
}

$reply = $GLOBALS['text'];

$url = "https://api.telegram.org/bot" . "7314721230:AAFEejOfNCyZ8N0jiVOiDS7JPKdVoVliwx8" . "/sendMessage";
$send = ['chat_id' => $GLOBALS['chat_id'], 'text' => $reply];

send_reply($url, $send);

function send_reply($url, $send)
{
  $c = curl_init();
  curl_setopt($c, CURLOPT_URL, $url);
  curl_setopt($c, CURLOPT_POSTFIELDS, $send);

  $result = curl_exec($c);
  curl_close($c);
}

?>