<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServerStatus extends Model
{
    /**
     * Get server that relates to the status
     */
    public function post()
    {
        return $this->belongsTo(Server::class);
    }
}
