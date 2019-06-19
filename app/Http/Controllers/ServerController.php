<?php

namespace App\Http\Controllers;

use App\Jobs\QueueAllServers;
use App\Jobs\RetrieveServerStatus;
use App\Server;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ServerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return Server
     * @throws \Exception
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'ipAddress' => 'required|string|max:255',
            'description' => 'string|max:255',
            'portableMode' => 'required|boolean',
        ]);

        $server = new Server();
        $server->name = $validated['name'];
        $server->ipAddress = $validated['ipAddress'];
        if (isset($validated->description)) {
            $server->description = $validated['description'];
        }
        $server->portableMode = $validated['portableMode'];
        $server->authKey = bin2hex(random_bytes(256));

        $server->save();

        return response()->json(['status' => 'Server saved', "code" => 201], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
