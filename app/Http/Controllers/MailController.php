<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function send()
    {
        $data = ['body' => request()->message];

        Mail::send('mails.main', $data, function($mail) {
            $mail->from(request()->email, request()->name)->to("maximpozdnyakow@gmail.com", "Maxim Pozdnyakow")->subject("Work offer");
        });
    }
}
