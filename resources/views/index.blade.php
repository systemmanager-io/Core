<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token">
{{--        <link rel="stylesheet" href="{{ asset('css/app.css') }}">--}}
{{--        <link rel="stylesheet" href="{{ asset('css/sidebar.css') }}">--}}

        <title>SystemManager</title>

        <!-- Fonts -->
    </head>
    <body>
        <noscript>You need JavaScript to run this application</noscript>
        <div id="systemmanagerapp"></div>

        <!-- Scripts -->

        @if(env('APP_ENV') === 'local')
            <script src="http://192.168.178.60:3000/js/index.js"></script>
        @else
            <script src="{{ asset('js/index.js') }}"></script>
        @endif


    </body>
</html>
