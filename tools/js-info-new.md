---
layout: "default"
title: "JavaScript Accessed Information"
description: "testing tool | sunarch"
permalink: "/tools/js-info-new"
---

[< home](../index.md)

<style type="text/css">
    input.refreshbutton {
        width: 120px;
        height: 40px;
        font-size: 20px;
        padding: 2px;
        position: fixed;
        top: 5px;
        right: 5px;
        opacity: 1.0;
    }
    th {
        font-size: 20px;
        padding-bottom: 10px;
        text-decoration: underline;
    }
    td {
        font-size: 16px;
        vertical-align: top;
    }
    td.label {
        width: 110px;
    }
</style>

<script type="text/javascript" language="JavaScript">
    function w(s) {document.write(s);}
    var jai = [
        ["window","closed","defaultStatus","innerHeight","innerWidth","name","opener","outerHeight","outerWidth","pageXOffset","pageYOffset","screenLeft","screenTop","screenX","screenY","status"],
        ["navigator","appCodeName","appName","appVersion","cookieEnabled","platform","userAgent"],
        ["screen","availHeight","availWidth","colorDepth","height","pixelDepth","width"],
        ["history","length"],
        ["location","hash","host","hostname","href","pathname","port","protocol","search"]
    ];
    function refresh() {
        document.getElementById("errormessage").style.display = "none";
        for (n1=0;n1<=jai.length-1;n1=n1+1) {
            for (n2=1;n2<=jai[n1].length-1;n2=n2+1) {
                document.getElementById(jai[n1][0]+"_"+jai[n1][n2]).innerHTML = eval(jai[n1][0]+"."+jai[n1][n2]);
            }
        }
    }
</script>

<h3 id="errormessage">JavaScript is not enabled in your browser!</h3>

<input type="button" class="refreshbutton" onClick="refresh()" value="Refresh" />

## Window

<table>
    <tbody>
        <tr>
            <td class="label">closed: </td>
            <td><div id="window_closed"></div></td>
        </tr>
        <tr>
            <td class="label">defaultStatus: </td>
            <td><div id="window_defaultStatus"></div></td>
        </tr>
        <tr>
            <td class="label">innerHeight: </td>
            <td><div id="window_innerHeight"></div></td>
        </tr>
        <tr>
            <td class="label">innerWidth: </td>
            <td><div id="window_innerWidth"></div></td>
        </tr>
        <tr>
            <td class="label">name: </td>
            <td><div id="window_name"></div></td>
        </tr>
        <tr>
            <td class="label">opener: </td>
            <td><div id="window_opener"></div></td>
        </tr>
        <tr>
            <td class="label">outerHeight: </td>
            <td><div id="window_outerHeight"></div></td>
        </tr>
        <tr>
            <td class="label">outerWidth: </td>
            <td><div id="window_outerWidth"></div></td>
        </tr>
        <tr>
            <td class="label">pageXOffset: </td>
            <td><div id="window_pageXOffset"></div></td>
        </tr>
        <tr>
            <td class="label">pageYOffset: </td>
            <td><div id="window_pageYOffset"></div></td>
        </tr>
        <tr>
            <td class="label">screenLeft: </td>
            <td><div id="window_screenLeft"></div></td>
        </tr>
        <tr>
            <td class="label">screenTop: </td>
            <td><div id="window_screenTop"></div></td>
        </tr>
        <tr>
            <td class="label">screenX: </td>
            <td><div id="window_screenX"></div></td>
        </tr>
        <tr>
            <td class="label">screenY: </td>
            <td><div id="window_screenY"></div></td>
        </tr>
        <tr>
            <td class="label">status: </td>
            <td><div id="window_status"></div></td>
        </tr>
    </tbody>
</table>

## Navigator

<table>
    <tbody>
        <tr>
            <td class="label">appCodeName: </td>
            <td><div id="navigator_appCodeName"></div></td>
        </tr>
        <tr>
            <td class="label">appName: </td>
            <td><div id="navigator_appName"></div></td>
        </tr>
        <tr>
            <td class="label">appVersion: </td>
            <td><div id="navigator_appVersion"></div></td>
        </tr>
        <tr>
            <td class="label">cookieEnabled: </td>
            <td><div id="navigator_cookieEnabled"></div></td>
        </tr>
        <tr>
            <td class="label">platform: </td>
            <td><div id="navigator_platform"></div></td>
        </tr>
        <tr>
            <td class="label">userAgent: </td>
            <td><div id="navigator_userAgent"></div></td>
        </tr>
        <tr>
            <td class="label">javaEnabled: </td>
            <td>
                <script type="text/javascript">
                var javaEnabled = navigator.javaEnabled();
                document.write("javaEnabled() = "+javaEnabled);
                </script>
            </td>
        </tr>
    </tbody>
</table>

## Screen

<table>
    <tbody>
        <tr>
            <td class="label">availHeight: </td>
            <td><div id="screen_availHeight"></div></td>
        </tr>
        <tr>
            <td class="label">availWidth: </td>
            <td><div id="screen_availWidth"></div></td>
        </tr>
        <tr>
            <td class="label">colorDepth: </td>
            <td><div id="screen_colorDepth"></div></td>
        </tr>
        <tr>
            <td class="label">height: </td>
            <td><div id="screen_height"></div></td>
        </tr>
        <tr>
            <td class="label">pixelDepth: </td>
            <td><div id="screen_pixelDepth"></div></td>
        </tr>
        <tr>
            <td class="label">width: </td>
            <td><div id="screen_width"></div></td>
        </tr>
    </tbody>
</table>

## History

<table>
    <tbody>
        <tr>
            <td class="label">length: </td>
            <td><div id="history_length"></div></td>
        </tr>
    </tbody>
</table>

## Location

<table>
    <tbody>
        <tr>
            <td class="label">hash: </td>
            <td><div id="location_hash"></div></td>
        </tr>
        <tr>
            <td class="label">host: </td>
            <td><div id="location_host"></div></td>
        </tr>
        <tr>
            <td class="label">hostname: </td>
            <td><div id="location_hostname"></div></td>
        </tr>
        <tr>
            <td class="label">href: </td>
            <td><div id="location_href"></div></td>
        </tr>
        <tr>
            <td class="label">pathname: </td>
            <td><div id="location_pathname"></div></td>
        </tr>
        <tr>
            <td class="label">port: </td>
            <td><div id="location_port"></div></td>
        </tr>
        <tr>
            <td class="label">protocol: </td>
            <td><div id="location_protocol"></div></td>
        </tr>
        <tr>
            <td class="label">search: </td>
            <td><div id="location_search"></div></td>
        </tr>
    </tbody>
</table>

<script type="text/javascript" language="JavaScript">
    refresh();
</script>
