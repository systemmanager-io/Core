<!DOCTYPE html>
<html class="h-full" lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"
      style="height:100%">
<head>
    <meta charset="utf8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title>Server Notice!</title>
    <!--[if mso]>
    <xml>
        <o:officedocumentsettings>
            <o:pixelsperinch>96</o:pixelsperinch>
        </o:officedocumentsettings>
    </xml>
    <style>table {
        border-collapse: collapse
    }

    a, div, h1, h2, h3, h4, h5, h6, p, td, th {
        font-family: "Segoe UI", sans-serif;
        mso-line-height-rule: exactly
    }</style><![endif]-->
    <style>
        .t:hover {
            background-color: #9b2c2c !important
        }

        @media screen {
            img {
                max-width: 100%
            }

            td, th {
                box-sizing: border-box
            }

            .z {
                font-family: -apple-system, "Segoe UI", sans-serif !important
            }
        }

        @media (min-width: 480px) {
            .pz {
                width: 100% !important
            }
        }

        @media (min-width: 768px) {
            .p {
                width: 100% !important
            }
        }

        @media (min-width: 992px) {
            .m {
                width: 50% !important
            }
        }

        @media (min-width: 1200px) {
            .e {
                width: 33.33333% !important
            }
        }</style>
</head>
<body
    style="box-sizing:border-box;margin:0;padding:0;width:100%;word-break:break-word;-webkit-font-smoothing:antialiased;height:100%">
<div class="z" style="background-color:#edf2f7;height:100%;width:100%">
    <div style="display:flex;align-items:center;justify-content:center;height:100%;margin-left:auto;margin-right:auto">
        <div align="center" class="e m pz p" style="border-radius:4px;align-items:center;justify-content:center">
            <div
                style="background-color:#fff;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)">
                <div style="background-color:#1a202c;align-items:center;justify-content:center;padding:64px;text-align:center">
                    <h1 style="margin:0;padding:0;color:#c53030;font-size:48px">PROBLEM</h1>
                    <h2 style="margin:0;padding:0;color:#fff;font-size:24px">{{ $serverName }}</h2>
                    <h3 style="margin:0;padding:0;color:#fff;font-size:24px">{{ $status }}</h3></div>
                <a class="t p" href="{{ $panelUrl }}" style="background-color:#c53030;border-radius:4px;padding-top:12px;padding-bottom:12px;padding-left:16px;padding-right:16px;color:#fff">OPEN SYSTEMMANAGER</a>
                <div style="padding-left:16px;padding-right:16px;padding-top:32px;padding-bottom:32px"><p>Hey {name}!<br><br>The
                        following server has gone offline<br></p>
                    <h1>{{ $serverName }}</h1>You might want to take action<br>When the server recovers you get an email about this.
                    <p></p></div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
