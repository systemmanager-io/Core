<?php

namespace App\Jobs;

use App\Server;
use App\ServerStatus;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;
use PhpParser\JsonDecoder;

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
        $server = Server::find($this->serverId);
        $serverStatus = $server->statuses->last();
        $decodedStatus = json_decode($serverStatus);


        Log::info($serverStatus);
//        echo($server);
//        echo($serverStatus);
        if (!$server->portableMode == 1) {
            $ch = curl_init($server->ipAddress . ":" . $server->port . "/status");

            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//            $result = curl_exec($ch);
            if (!curl_exec($ch) === false) {
                if ($serverStatus['status'] === "ONLINE") {
//                    echo($serverStatus);
                    echo("ONLINE WITH RECORD");
                } elseif ($serverStatus['status'] === "OFFLINE") {
                    $newServerStatus = new ServerStatus;
                    $newServerStatus->serverId = $server->id;
                    $newServerStatus->status = "ONLINE";
                    $newServerStatus->messageType = "INFO";
                    $newServerStatus->message = "Server marked as Online";
                    $newServerStatus->save();
                } else {
                    echo($serverStatus);
                    $newServerStatus = new ServerStatus;
                    $newServerStatus->serverId = $server->id;
                    $newServerStatus->status = "ONLINE";
                    $newServerStatus->messageType = "INFO";
                    $newServerStatus->message = "Server marked as Online";
                    $newServerStatus->save();
                }
            } else {
                if ($serverStatus['status'] === "OFFLINE") {
//                    echo($serverStatus);
                    echo("OFFLINE WITH RECORD");
                } elseif ($serverStatus['status'] === "ONLINE") {
                    $newServerStatus = new ServerStatus;
                    $newServerStatus->serverId = $server->id;
                    $newServerStatus->status = "OFFLINE";
                    $newServerStatus->messageType = "FATAL";
                    $newServerStatus->message = "Server marked as Offline";
                    $newServerStatus->save();
                } else {
                    echo($serverStatus);
                    $newServerStatus = new ServerStatus;
                    $newServerStatus->serverId = $server->id;
                    $newServerStatus->status = "ONLINE";
                    $newServerStatus->messageType = "FATAL";
                    $newServerStatus->message = "Server marked as Offline";
                    $newServerStatus->save();
                }
            }
            echo("\n");
            curl_close($ch);

        } else {
            echo "Portable Mode";
            echo("\n");
        }
    }
}
