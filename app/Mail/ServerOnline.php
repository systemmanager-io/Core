<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ServerOnline extends Mailable
{
    use Queueable, SerializesModels;

    protected $serverstatus;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($serverstatus)
    {
        $this->serverstatus = $serverstatus;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.recovery')
            ->with([
                'serverName' => $this->serverstatus['serverName'],
                'status' => $this->serverstatus['status'],
                'message' => $this->serverstatus['message'],
                'panelUrl' => env("APP_URL")
            ])->subject($this->serverstatus['serverName'] . " ONLINE");
    }
}
