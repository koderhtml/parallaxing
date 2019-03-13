# Parallaxing
### A jQuery plugin for creating parallax backgrounds.
It is responsive and works on all devices. 

## Demo

## Download
Get the [minified](https://raw.githubusercontent.com/koderhtml/parallaxing/master/parallaxing.min.js) version or the [source](https://raw.githubusercontent.com/koderhtml/parallaxing/master/parallaxing.js) here.

## How to use? 
Start by including this plugin after jQuery. Then use data-atributtes to load parallaxing efect to your element.

``` html
<div style="height:150px;width:100%;" data-parallaxing="" data-parallaxing-img="background-image.jpg"></div>

```

or you can init it by jQuery but you will still need to set up `data-parallaxing-img` attribute for it to work.
``` js
$('.yourElementSelector').parallaxing();
```

As you can see above you need to set `data-parallaxing=""` and `data-parallaxing-img="background-image.jpg"` and that is all. But to make it little bit better you can use more attributes.

All available attributes:
* `data-parallaxing`
* `data-parallaxing-img`
* `data-parallaxing-speed`
* `data-parallaxing-bleed`

#### data-parallaxing-img
To get this plugin work properly you need to allways set this with full path to your image that you want to use.
Like this: `data-parallaxing-img="/path/to/image/background-image.jpg"` 

#### data-parallaxing-speed
Setting this from 0-1 you will get the image follow your parralax window but slower. 1 means it will flow with the content and 0 means the image will be fixed on position. Default is 0. I would reccomend 0.2.

#### data-parallaxing-bleed
This plugin is based on scrolling and sometimes when your page is more complex it could result in this pluggin underflowing data-parallaxing-bleed causes an overlap and can be used to fix this. `Default is 0. But i would reccomend to use 50.` It means that parallaxing background will `overlap 50px on top and 50px on bottom`. So `you would need to set background` collor for your `elements above and byond` your parallaxing element `to hide that overlap`.

## Destroy
To destroy use function parallaxingDestroy() on your element.

Like this: 
``` js
$('.yourElementSelector').parallaxingDestroy();
```

## License
The MIT License (MIT)
Copyright © 2019 Bc. Martin Tesař <m.tesar@koderhtml.cz>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
