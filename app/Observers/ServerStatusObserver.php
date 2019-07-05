<?php

namespace App\Observers;

use App\Mail\ServerOnline;
use App\ServerStatus;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ServerStatusObserver
{
    /**
     * Handle the server status "created" event.
     *
     * @param  \App\ServerStatus  $serverStatus
     * @return void
     */
    public function created(ServerStatus $serverStatus)
    {
//        Log::info("Sending Mail");
//        Mail::to("tigo.middelkoop@gmail.com")->queue(new ServerStatusChanged());
//        Log::info("Mail Send");
    }

    /**
     * Handle the server status "updated" event.
     *
     * @param  \App\ServerStatus  $serverStatus
     * @return void
     */
    public function updated(ServerStatus $serverStatus)
    {
        //
    }

    /**
     * Handle the server status "deleted" event.
     *
     * @param  \App\ServerStatus  $serverStatus
     * @return void
     */
    public function deleted(ServerStatus $serverStatus)
    {
        //
    }

    /**
     * Handle the server status "restored" event.
     *
     * @param  \App\ServerStatus  $serverStatus
     * @return void
     */
    public function restored(ServerStatus $serverStatus)
    {
        //
    }

    /**
     * Handle the server status "force deleted" event.
     *
     * @param  \App\ServerStatus  $serverStatus
     * @return void
     */
    public function forceDeleted(ServerStatus $serverStatus)
    {
        //
    }
}
