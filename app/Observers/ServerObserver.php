<?php

namespace App\Observers;

use App\Jobs\RetrieveServerStatus;
use App\Server;

class ServerObserver
{
    /**
     * Handle the server "created" event.
     *
     * @param  \App\Server  $server
     * @return void
     */
    public function created(Server $server)
    {
        RetrieveServerStatus::dispatch($server['id'])->onQueue('serverstatus');
    }

    /**
     * Handle the server "updated" event.
     *
     * @param  \App\Server  $server
     * @return void
     */
    public function updated(Server $server)
    {
        //
    }

    /**
     * Handle the server "deleted" event.
     *
     * @param  \App\Server  $server
     * @return void
     */
    public function deleted(Server $server)
    {
        //
    }

    /**
     * Handle the server "restored" event.
     *
     * @param  \App\Server  $server
     * @return void
     */
    public function restored(Server $server)
    {
        //
    }

    /**
     * Handle the server "force deleted" event.
     *
     * @param  \App\Server  $server
     * @return void
     */
    public function forceDeleted(Server $server)
    {
        //
    }
}
