# Tabs - 普通标签页

---

````iframe:50
<div id="demo1">
  <ul class="tab-nav">
    <li class="tab-hd">item</li>
    <li class="tab-hd">item</li>
    <li class="tab-hd">item</li>
  </ul>
  <div class="tab-strip"></div>
  <div class="tab-bd">
    <div class="bd" style="display:none;">a</div>
    <div class="bd" style="display:none;">b</div>
    <div class="bd" style="display:none;">c</div>
  </div>
</div>

<script type="text/javascript">
seajs.use(['tab'], function(Tab) {
  new Tab({
    element: '#demo1',
    triggers: '.tab-nav li',
    panels: '.tab-bd div'
  }).render();
});
</script>
````

##auto-render

````iframe:50
<div id="demo2" data-widget="tab">
  <ul class="tab-nav" data-role="nav">
    <li class="tab-hd">item</li>
    <li class="tab-hd">item</li>
    <li class="tab-hd">item</li>
  </ul>
  <div class="tab-strip"></div>
  <div class="tab-bd" data-role="content">
    <div class="bd" style="display:none;">a</div>
    <div class="bd" style="display:none;">b</div>
    <div class="bd" style="display:none;">c</div>
  </div>
</div>

<script type="text/javascript">
seajs.use(['widget'], function(Widget) {
  Widget.autoRenderAll();
});
</script>
````

