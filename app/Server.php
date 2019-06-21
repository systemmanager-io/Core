<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Server extends Model
{
    /**
     * Get the server statusses
     */

    public function statuses()
    {
        return $this->hasMany(ServerStatus::class, "serverId");
    }
}

