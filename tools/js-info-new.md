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
    
    table.jsinfo {
        display: table;
        width: 100%;
    }
    table.jsinfo td {
        width: 50%;
    }
</style>

<script type="text/javascript" language="JavaScript">

    var jai = [
        [ "window",
            ["closed", "defaultStatus", "innerHeight", "innerWidth", "name", "opener", "outerHeight", "outerWidth", "pageXOffset", "pageYOffset", "screenLeft", "screenTop", "screenX", "screenY", "status"] ],
        [ "navigator",
            ["appCodeName", "appName", "appVersion", "cookieEnabled", "platform", "userAgent"] ],
        [ "screen",
            ["availHeight", "availWidth", "colorDepth", "height", "pixelDepth", "width"] ],
        [ "history",
            ["length"] ],
        [ "location",
            ["hash", "host", "hostname", "href", "pathname", "port", "protocol", "search"] ]
    ];
        
    var jai_2 = {
        "window":    ["closed", "defaultStatus", "innerHeight", "innerWidth", 
                      "name", "opener", "outerHeight", "outerWidth", 
                      "pageXOffset", "pageYOffset", "screenLeft", "screenTop", 
                      "screenX", "screenY", "status"],
        "navigator": ["appCodeName", "appName", "appVersion", "cookieEnabled", 
                      "platform", "userAgent"],
        "screen":    ["availHeight", "availWidth", "colorDepth", 
                      "height", "pixelDepth", "width"],
        "history":   ["length"],
        "location":  ["hash", "host", "hostname", "href", 
                      "pathname", "port", "protocol", "search"]
    };
    
    categ = Object.keys(jai_2) // categories

    function refresh() {
        document.getElementById("errormessage").style.display = "none";
        for (n1=0; n1<=jai.length-1; n1=n1+1) {
            for (n2=0; n2<=jai[n1][1].length-1; n2=n2+1) {
                document.getElementById(jai[n1][0]+"_"+jai[n1][1][n2]).innerHTML = String(eval(jai[n1][0]+"."+jai[n1][1][n2]));
            }
        }
    }
    
    function refresh_2() {
        document.getElementById("errormessage").style.display = "none";
        
        for (n1=0; n1<=categ.length-1; n1=n1+1) {
            for (n2=0; n2<=jai_2[categ[n1]].length-1; n2=n2+1) {
            
                tag_id = categ[n1] + "_" + jai_2[categ[n1]][n2]
                value = eval(categ[n1] + "." + jai_2[categ[n1]][n2]);
                
                document.getElementById(tag_id).innerHTML = String(value);
            }
        }
    }

</script>

<h3 id="errormessage">JavaScript is not enabled in your browser!</h3>

<input type="button" class="refreshbutton" onClick="refresh_2()" value="Refresh" />

## Window

<table class="jsinfo">
    <tbody>
        <tr>
            <td>closed</td>
            <td><div id="window_closed"></div></td>
        </tr>
        <tr>
            <td>defaultStatus</td>
            <td><div id="window_defaultStatus"></div></td>
        </tr>
        <tr>
            <td>innerHeight</td>
            <td><div id="window_innerHeight"></div></td>
        </tr>
        <tr>
            <td>innerWidth</td>
            <td><div id="window_innerWidth"></div></td>
        </tr>
        <tr>
            <td>name</td>
            <td><div id="window_name"></div></td>
        </tr>
        <tr>
            <td>opener</td>
            <td><div id="window_opener"></div></td>
        </tr>
        <tr>
            <td>outerHeight</td>
            <td><div id="window_outerHeight"></div></td>
        </tr>
        <tr>
            <td>outerWidth</td>
            <td><div id="window_outerWidth"></div></td>
        </tr>
        <tr>
            <td>pageXOffset</td>
            <td><div id="window_pageXOffset"></div></td>
        </tr>
        <tr>
            <td>pageYOffset</td>
            <td><div id="window_pageYOffset"></div></td>
        </tr>
        <tr>
            <td>screenLeft</td>
            <td><div id="window_screenLeft"></div></td>
        </tr>
        <tr>
            <td>screenTop</td>
            <td><div id="window_screenTop"></div></td>
        </tr>
        <tr>
            <td>screenX</td>
            <td><div id="window_screenX"></div></td>
        </tr>
        <tr>
            <td>screenY</td>
            <td><div id="window_screenY"></div></td>
        </tr>
        <tr>
            <td>status</td>
            <td><div id="window_status"></div></td>
        </tr>
    </tbody>
</table>

## Navigator

<table class="jsinfo">
    <tbody>
        <tr>
            <td>appCodeName</td>
            <td><div id="navigator_appCodeName"></div></td>
        </tr>
        <tr>
            <td>appName</td>
            <td><div id="navigator_appName"></div></td>
        </tr>
        <tr>
            <td>appVersion</td>
            <td><div id="navigator_appVersion"></div></td>
        </tr>
        <tr>
            <td>cookieEnabled</td>
            <td><div id="navigator_cookieEnabled"></div></td>
        </tr>
        <tr>
            <td>platform</td>
            <td><div id="navigator_platform"></div></td>
        </tr>
        <tr>
            <td>userAgent</td>
            <td><div id="navigator_userAgent"></div></td>
        </tr>
        <tr>
            <td>javaEnabled</td>
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

<table class="jsinfo">
    <tbody>
        <tr>
            <td>availHeight: </td>
            <td><div id="screen_availHeight"></div></td>
        </tr>
        <tr>
            <td>availWidth: </td>
            <td><div id="screen_availWidth"></div></td>
        </tr>
        <tr>
            <td>colorDepth: </td>
            <td><div id="screen_colorDepth"></div></td>
        </tr>
        <tr>
            <td>height: </td>
            <td><div id="screen_height"></div></td>
        </tr>
        <tr>
            <td>pixelDepth: </td>
            <td><div id="screen_pixelDepth"></div></td>
        </tr>
        <tr>
            <td>width: </td>
            <td><div id="screen_width"></div></td>
        </tr>
    </tbody>
</table>

## History

<table class="jsinfo">
    <tbody>
        <tr>
            <td>length: </td>
            <td><div id="history_length"></div></td>
        </tr>
    </tbody>
</table>

## Location

<table class="jsinfo">
    <tbody>
        <tr>
            <td>hash: </td>
            <td><div id="location_hash"></div></td>
        </tr>
        <tr>
            <td>host: </td>
            <td><div id="location_host"></div></td>
        </tr>
        <tr>
            <td>hostname: </td>
            <td><div id="location_hostname"></div></td>
        </tr>
        <tr>
            <td>href: </td>
            <td><div id="location_href"></div></td>
        </tr>
        <tr>
            <td>pathname: </td>
            <td><div id="location_pathname"></div></td>
        </tr>
        <tr>
            <td>port: </td>
            <td><div id="location_port"></div></td>
        </tr>
        <tr>
            <td>protocol: </td>
            <td><div id="location_protocol"></div></td>
        </tr>
        <tr>
            <td>search: </td>
            <td><div id="location_search"></div></td>
        </tr>
    </tbody>
</table>

<script type="text/javascript" language="JavaScript">
    //refresh();
</script>
