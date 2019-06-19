<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

class RetrieveServerStatus implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $serverId;

    /**
     * Create a new job instance.
     *
     * @param $serverId
     */
    public function __construct($serverId)
    {
        $this->serverId = $serverId;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        $ch = curl_init("http://127.0.0.1:3000/status");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER , 0);
        $result = curl_exec($ch);
        curl_close($ch);
    }
}
