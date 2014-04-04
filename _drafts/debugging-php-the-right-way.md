---
layout: post
title:  "Debugging PHP the right way"
---

_Notes:_

1. Explain why debugging is awesome, and why you should use it.
2. Show an example of debugging.
3. Explain how to set it up

We've all used var_dump and print_r to debug problems when coding PHP. It's time for that to stop.

* Altering your code to debug it is not intuitive, and you risk having debug statements left in your code.
* var_dump and print_r only gives you exactly what you ask about, meaning you will not see what variables around your debugging statement holds.

Ever since I started using [PHPstorm](http://www.jetbrains.com/phpstorm/) I've been using it's powerful debugging features on a regular basis.

_insert image of debugging session here_

