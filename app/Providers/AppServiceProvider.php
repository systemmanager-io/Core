<?php

namespace App\Providers;

use App\Observers\ServerObserver;
use App\Observers\UserObserver;
use App\Server;
use App\User;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
        Server::observe(ServerObserver::class);
        User::observe(UserObserver::class);
    }
}
