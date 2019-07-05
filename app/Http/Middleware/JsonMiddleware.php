<?php

namespace App\Http\Middleware;

use Closure;

class JsonMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (in_array('api', $request->route()->middleware())) {
            $request->headers->set('Accept', 'application/json');
        }

        return $next($request);
    }
}
