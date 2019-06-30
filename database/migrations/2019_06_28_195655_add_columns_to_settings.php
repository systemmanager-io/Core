<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnsToSettings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('settings')->insert(
            [
                [
                    "key" => "emailNotifications",
                    "value" => "true"
                ],
                [
                    "key" => "pushNotifications",
                    "value" => "true"
                ],
                [
                    "key" => "automaticPinger",
                    "value" => "true"
                ]
            ]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('settings', function (Blueprint $table) {
        });
    }
}
