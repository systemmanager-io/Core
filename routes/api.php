<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['middleware' => ['api.headers', 'jwt.verify']], function () {


    Route::prefix('server')->group(function () {

        Route::get('list', 'ServerController@index');
        Route::get('get', 'ServerController@show');
        Route::post('create', 'ServerController@store');
        Route::post('edit', 'ServerController@update');
        Route::get('queue', 'ServerController@queue');

    });

});

Route::group(['middleware' => 'api.headers'], function () {

    // The registration and login requests doesn't come with tokens
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them
    Route::post('auth/login', 'Auth\AuthenticatorController');
    Route::post('auth/register', 'Auth\RegisterController');


});

