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
Route::prefix('frontend')->group(function () {
    Route::group(['middleware' => ['jwt.verify', 'api-header']], function () {

        // all routes to protected resources are registered here
        Route::get('users/list', function () {
            $users = App\User::all();

            $response = ['success' => true, 'data' => $users];
            return response()->json($response, 201);
        });
    });

    Route::group(['middleware' => 'api-header'], function () {

        // The registration and login requests doesn't come with tokens
        // as users at that point have not been authenticated yet
        // Therefore the jwtMiddleware will be exclusive of them
        Route::post('auth/login', 'UserController@authenticate');
        Route::post('auth/register', 'UserController@register');
    });
    Route::get('open', 'DataController@open');
});
