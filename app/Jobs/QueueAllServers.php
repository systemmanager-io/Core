<?php

namespace App\Jobs;

use App\Server;
use App\Setting;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class QueueAllServers implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        $servers = Server::all();

        $automaticPinger = Setting::where('key', '=', 'automaticPinger')->get();


        if ($automaticPinger) {
            foreach ($servers as $server) {
                RetrieveServerStatus::dispatch($server->id)->onQueue('serverstatus');
            }
        } else {
            print_r("Automatic pinger turned off");
        }
    }
}
