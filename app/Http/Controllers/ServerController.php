<?php

namespace App\Http\Controllers;

use App\Jobs\QueueAllServers;
use App\Jobs\RetrieveServerStatus;
use App\Server;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use PhpParser\Node\Expr\Array_;

class ServerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return array
     */
    public function index()
    {
        $serverList = Array();

        $servers = Server::all();
        foreach ($servers as $server) {
            $serverStatus = $server->statuses->last();
            $serverItem = Array();
            $serverItem['id'] = $server->id;
            $serverItem['name'] = $server->name;
            $serverItem['ipAddress'] = $server->ipAddress;
            $serverItem['port'] = $server->port;
            $serverItem['description'] = $server->description;
            $serverItem['portableMode'] = $server->portableMode;
            $serverItem['status'] = $serverStatus['status'];
            $serverItem['messageType'] = $serverStatus['messageType'];
            $serverItem['message'] = $serverStatus['message'];

            array_push($serverList, $serverItem);
        }

        return $serverList;
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
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'ipAddress' => 'required|string|max:255',
            'port' => 'int',
            'description' => 'string|max:255',
            'portableMode' => 'required|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()]);
        }

        $validated = $validator->validated();

        $server = new Server();
        $server->name = $validated['name'];
        $server->ipAddress = $validated['ipAddress'];
        if (isset($validated['port'])) {
            $server->port = $validated['port'];
        }
        if (isset($validated['description'])) {
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

    public function queue()
    {
        QueueAllServers::dispatch()->onQueue('serverstatus');
    }
}
