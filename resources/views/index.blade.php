<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token">

        <title>Laravel</title>

        <!-- Fonts -->
    </head>
    <body>
        <noscript>You need JavaScript to run this application</noscript>
        <div id="systemmanagerapp"></div>

        <!-- Scripts -->
        <script src="{{ asset('js/index.js') }}"></script>
    </body>
</html>
