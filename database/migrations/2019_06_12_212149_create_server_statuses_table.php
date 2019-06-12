<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServerStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('server_statuses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger("serverId");
            $table->enum("status", ["ONLINE", "OFFLINE", "PINGING","UNKNOWN"]);
            $table->enum("messageType", ["NONE", "INFO", "WARNING", "ERROR", "FATAL" ])->default("NONE");
            $table->text("message");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('server_statuses');
    }
}
