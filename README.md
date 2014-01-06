jquery-boxer
============

A simple, lightweight jQuery plugin for handling check/uncheck all on checkbox lists

## What it does

Boxer wires up the "check/un-check" functionality for the "master" checkbox on checkbox lists. Point it at the container that holds your checkbox list and boxer does the rest.

## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src="/path/to/jquery.boxer.js"></script>
```

**Do not include the script directly from GitHub (http://raw.github.com/...).** The file is being served as text/plain and as such being blocked
in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: GitHub is not a CDN.

## Usage

Using defaults (checkbox list for a table)

```javascript
// the master checkbox is in thead, e.g. "thead :checkbox"
// the checkbox list is in tbody, e.g. "tbody :checkbox"
$('#my_table').boxer();
```

Using custom checkbox selectors

```javascript
// attach to checkboxes in a sorted/unsorted list
$('#my_list').boxer({ checkall: "li.master :checkbox", check: "li.child :checkbox"});
```

