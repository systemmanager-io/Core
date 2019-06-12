<?php

namespace App\Http\Controllers;

use App\Jobs\RetrieveServerStatus;
use App\Notifications\ServerStatusChangedNotification;
use Illuminate\Http\Request;
use Illuminate\Queue\Jobs\Job;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;


class DataController extends Controller
{
    public function open()
    {
        RetrieveServerStatus::dispatch();
//        Job::dispatch()->onQueue('emails');
        $data = "This data is open and can be accessed without the client being authenticated";
        return response()->json(compact('data'),200);

    }

    public function closed()
    {
        $data = "Only authorized users can see this";
        return response()->json(compact('data'),200);
    }
}
