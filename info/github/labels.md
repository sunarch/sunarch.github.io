---
layout: "default"
title: "labels"
description: "GitHub info | sunarch"
permalink: "/info/github/labels"
---

[< GitHub](index.md)

<style>
.cpv {
	width: 3pt;
}
</style>

## Simple scheme v1

- types
    - bug (#ff0000)
    - chore (#00ffff)
    - feature (#0000ff)
- states
    - discuss (#ff00ff)
    - WIP (#ffff00)
    - LGTM (#00ff00)

## Complex scheme v2

- components (#bfd4f2)
    - "comp: ?"</li>
- effort (#d4c5f9)
    - "effort (1): easy (mins)"</li>
    - "effort (2): medium (hour-s)"</li>
    - "effort (3): hard (day-s)"</li>
- pull request
    - "pull request: clean up" (#ff7700)</li>
    - "pull request: mergable" (#00dd00)</li>
- states
    - "state (0): duplicate" (#006b75)</li>
    - "state (0): ExtDependency" (#006b75)</li>
    - "state (0): WontFix" (#006b75)</li>
    - "state (1): discuss" (#ff3333)</li>
    - "state (2): WIP" (#ff7700)</li>
    - "state (3): review" (#ffdd00)</li>
    - "state (4): LGTM" (#00dd00)</li>
- types (#5319e7)&nbsp;<span class="cpv" style="background-color: #5319e7;"></span>
    - "type: bug"</li>
    - "type: chore"</li>
    - "type: feature"


## List of colors

### Simple color scheme

<div class="table-responsive">
    <table class="table table-striped table-sm">
        <tr>
            <th>Color</th>
            <th>Hex (RGB)</th>
            <th>Name</th>
            <th>Usage</th>
        </tr>
        <tr>
            <td style="background-color: #ff0000;">&nbsp;</td>
            <td>#ff0000</td>
            <td>Red</td>
            <td>bug</td>
        </tr>
        <tr>
            <td style="background-color: #00ff00;">&nbsp;</td>
            <td>#00ff00</td>
            <td>Lime</td>
            <td>LGTM</td>
        </tr>
        <tr>
            <td style="background-color: #0000ff;">&nbsp;</td>
            <td>#0000ff</td>
            <td>Blue</td>
            <td>feature</td>
        </tr>
        <tr>
            <td style="background-color: #ffff00;">&nbsp;</td>
            <td>#ffff00</td>
            <td>Yellow</td>
            <td>WIP</td>
        </tr>
        <tr>
            <td style="background-color: #ff00ff;">&nbsp;</td>
            <td>#ff00ff</td>
            <td>Magenta / Fuchsia</td>
            <td>discuss</td>
        </tr>
        <tr>
            <td style="background-color: #00ffff;">&nbsp;</td>
            <td>#00ffff</td>
            <td>Cyan / Aqua</td>
            <td>chore</td>
        </tr>
    </table>
</div>

### Complex color scheme

<div class="table-responsive">
    <table class="table table-striped table-sm">
        <tr>
            <th>Hex (RGB)</th>
            <th>Usage</th>
        </tr>
        <tr>
            <td>#bfd4f2</td>
            <td>(components)</td>
        </tr>
        <tr>
            <td>#d4c5f9</td>
            <td>(effort)</td>
        </tr>
        <tr>
            <td>#006b75</td>
            <td>(state 0)</td>
        </tr>
        <tr>
            <td>#ff3333</td>
            <td>(state 1)</td>
        </tr>
        <tr>
            <td>#ff7700</td>
            <td>(state 2 / clean up)</td>
        </tr>
        <tr>
            <td>#ffdd00</td>
            <td>(state 3)</td>
        </tr>
        <tr>
            <td>#00dd00</td>
            <td>(state 4 / mergable)</td>
        </tr>
        <tr>
            <td>#5319e7</td>
            <td>(types)</td>
        </tr>
    </table>
</div>

### List of all types

- components (#bfd4f2)
    - "comp: ?"
- effort (#d4c5f9)
    - "effort (1): easy (mins)"
    - "effort (2): medium (hour-s)"
    - "effort (3): hard (day-s)"
- pull request
    - "pull request: clean up" (#ff7700)
    - "pull request: mergable" (#00dd00)
- states
    - "state (0): duplicate" (#006b75)
    - "state (0): ExtDependency" (#006b75)
    - "state (0): WontFix" (#006b75)
    - "state (1): discuss" (#ff3333)
    - "state (2): WIP" (#ff7700)
    - "state (3): review" (#ffdd00)
    - "state (4): LGTM" (#00dd00)
- types (#5319e7)
    - "type: bug"
    - "type: chore"
    - "type: feature"
    - "type: refactor"
    - "type: RFC"
