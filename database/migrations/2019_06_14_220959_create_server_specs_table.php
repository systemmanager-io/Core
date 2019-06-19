<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServerSpecsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('server_specs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('serverId');
            $table->string("cpuManufacture");
            $table->string("cpuModel");
            $table->string("cpuType");
            $table->string("cpuCores");
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
        Schema::dropIfExists('server_specs');
    }
}
