---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Shanze
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 35min
# background: rgb(127,0,32)
fonts:
  sans: MiSans VF
  serif: Noto Serif CJK SC
  mono: Adwaita Mono
---

<img src="/pics/山泽2.png" class="w-1/3 mx-auto"></img>

<div class="text-center">
  <p class="font-bold">
    山泽新能源科技有限公司
  </p>
  <p>
    基于电芯技术的多场景储能与移动能源解决方案提供商
  </p>

</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://www.linkedin.com/company/shanzetech/" target="_blank" class="slidev-icon-btn">
    <carbon:logo-linkedin />
  </a>
  <a href="https://www.youtube.com/@shanzesz" target="_blank" class="slidev-icon-btn">
    <carbon:logo-youtube />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: two-cols
layoutClass: gap-16
---

# 目录

You can use the `Toc` component to generate a table of contents for your slides:

```html
<Toc minDepth="1" maxDepth="1" />
```

The title will be inferred from your slide content, or you can override it with `title` and `level` in your frontmatter.

::right::

<Toc text-sm minDepth="1" maxDepth="2" />

---
class: text-left px-14 text-slate-50
---

# 公司概况

<div class="glass-card rounded-2xl px-4 py-2 border-white/40 shadow-xl flex flex-col">
  <ul class="list-disc pl-5 space-y-1">
    <li><strong>公司名称</strong>：东莞山泽新能源科技有限公司</li>
    <li><strong>品牌/简称</strong>：山泽能源</li>
    <li><strong>成立时间</strong>：2022 年 4 月 18 日</li>
    <li><strong>注册资本</strong>：1,000 万元人民币</li>
    <li><strong>企业性质</strong>：有限责任公司（自然人投资或控股）</li>
    <li><strong>所在地</strong>：广东省东莞市长安镇</li>
    <li><strong>所属行业</strong>：新能源及电子制造（电池与储能相关应用）</li>
  </ul>

  <p class="px-4">公司简介：东莞山泽新能源科技有限公司专注于电池及新能源相关产品的研发、制造与销售，业务覆盖电池电芯、储能系统、启停电源以及移动电源等多类产品。公司立足东莞制造基地，依托成熟的电芯工艺与新材料技术，面向消费电子、家用及便携储能、汽车启停等多元应用场景，为客户提供稳定可靠的新能源解决方案。</p>

  <div class="text-sm glass-plain inline-block px-3 py-2 rounded-xl border-white/40 text-slate-50 self-end text-right">
    参保人数：7 人（精干团队，灵活高效）<br>
    经营状态：开业（持续经营中）
  </div>
</div>

---
class: px-14 py-10 text-slate-50
---

# 发展历程与股东背景

<div class="grid grid-cols-2 gap-6 text-sm">
  <div class="glass-card rounded-2xl px-4 py-2 border-white/40 shadow-xl">
    <p class="text-lg font-semibold text-sky-50 mb-2">发展历程</p>
    <ul class="list-disc pl-5 space-y-1 ">
      <li>2022.04 东莞山泽新能源科技有限公司正式成立，聚焦电池制造与新兴能源技术研发</li>
      <li>2022–2023 建立电池及电池零部件生产体系，逐步拓展至电子元器件与机电组件制造</li>
      <li>2023–2024 形成以电芯为核心，向储能电源、启停电源、移动电源等成品延伸的业务布局</li>
      <li>2024 起 加大在半固态电池、便携储能和磁吸移动电源等方向的研发投入，推动产品升级与业务转型</li>
    </ul>
  </div>
  <div class="glass-card rounded-2xl px-4 py-2 border-white/40 shadow-xl">
    <p class="text-lg font-semibold text-emerald-50 mb-2">股东结构亮点</p>
    <ul class="list-disc pl-5 space-y-1 ">
      <li>实控人及大股东：张烈先生，持股比例 75%，兼任执行董事、经理及财务负责人</li>
      <li>战略股东：
        <ul class="list-disc pl-5 space-y-1">
          <li>山东山泽新能源科技有限公司（持股 10%）</li>
          <li>赣州市沃能新能源有限公司（持股 10%）</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<div class="mt-6 text-sm glass-plain inline-block px-4 py-3 rounded-xl border-white/40 text-slate-50">
  <strong>总结：</strong>公司股东背景涵盖新能源电池及相关产业链企业，为山泽能源在技术、供应链及市场协同方面提供了坚实支撑。
</div>

---
class: px-14 py-10 text-slate-50
---

# 业务布局与产品矩阵

## 一张图说明业务版块（四宫格）

<div class="grid grid-cols-2 gap-5 mt-6 max-w-4xl mx-auto">
  <div class="rounded-2xl glass-card border-white/40 p-4">
    <div class="flex items-center justify-between">
      <p class="text-lg font-semibold text-white">电池电芯业务</p>
      <span class="text-xs glass-chip text-sky-900 px-2 py-1 rounded-full border border-white/30 shadow-sm">核心</span>
    </div>
    <ul class="list-disc pl-5 mt-2.5 space-y-1.5 text-sm leading-relaxed text-slate-100">
      <li>电池制造、电池零配件生产与销售</li>
      <li>面向多种容量与规格定制</li>
    </ul>
  </div>
  <div class="rounded-2xl glass-card border-white/40 p-4">
    <div class="flex items-center justify-between">
      <p class="text-lg font-semibold text-white">储能产品</p>
      <span class="text-xs glass-chip text-indigo-900 px-2 py-1 rounded-full border border-white/30 shadow-sm">储发一体</span>
    </div>
    <ul class="list-disc pl-5 mt-2.5 space-y-1.5 text-sm leading-relaxed text-slate-100">
      <li>便携储能、电源模组</li>
      <li>结合光伏设备与元器件，实现储发一体解决方案</li>
    </ul>
  </div>
  <div class="rounded-2xl glass-card border-white/40 p-4">
    <div class="flex items-center justify-between">
      <p class="text-lg font-semibold text-white">启停电源</p>
      <span class="text-xs glass-chip text-amber-900 px-2 py-1 rounded-full border border-white/30 shadow-sm">高倍率</span>
    </div>
    <ul class="list-disc pl-5 mt-2.5 space-y-1.5 text-sm leading-relaxed text-slate-100">
      <li>面向汽车/设备启停场景的电源产品</li>
      <li>高倍率放电、可靠启停性能</li>
    </ul>
  </div>
  <div class="rounded-2xl glass-card border-white/40 p-4">
    <div class="flex items-center justify-between">
      <p class="text-lg font-semibold text-white">移动电源成品</p>
      <span class="text-xs glass-chip text-emerald-900 px-2 py-1 rounded-full border border-white/30 shadow-sm">消费终端</span>
    </div>
    <ul class="list-disc pl-5 mt-2.5 space-y-1.5 text-sm leading-relaxed text-slate-100">
      <li>半固态电池磁吸移动电源</li>
      <li>快充、安全、轻薄，服务消费电子终端</li>
    </ul>
  </div>
</div>

<div class="mt-8 text-sm leading-relaxed glass-plain rounded-xl p-4 text-slate-50 border-white/40">
  <strong>总结：</strong>山泽能源以电芯为核心，向储能、启停、移动电源等多产品形态延伸，能够根据客户场景需求，提供从零部件到整机的多层级产品与解决方案。
</div>

---
class: px-14 py-10 text-slate-50
---

# 核心技术与研发实力

<div class="grid grid-cols-3 gap-5 mt-6 text-sm leading-relaxed">
  <div class="rounded-xl glass-card border-white/40 p-4">
    <p class="text-base font-semibold text-sky-50">电池与新材料技术</p>
    <ul class="list-disc pl-5 mt-2.5 space-y-1.5">
      <li>以电池制造为起点，持续在电解质、极片材料、结构设计等方面优化升级</li>
      <li>关注半固态电池方向，提升安全性与能量密度</li>
    </ul>
  </div>
  <div class="rounded-xl glass-card border-white/40 p-4">
    <p class="text-base font-semibold text-indigo-50">储能与电源应用研发</p>
    <ul class="list-disc pl-5 mt-2.5 space-y-1.5">
      <li>面向储能、启停及移动电源场景进行系统设计</li>
      <li>结合电力电子与 BMS（电池管理）技术，提升系统稳定性与使用寿命</li>
    </ul>
  </div>
  <div class="rounded-xl glass-card border-white/40 p-4">
    <p class="text-base font-semibold text-emerald-50">研发与技术服务能力</p>
    <ul class="list-disc pl-5 mt-2.5 space-y-1.5">
      <li>覆盖技术开发、技术咨询、技术转让及技术推广</li>
      <li>可根据客户需求提供定制化设计与联合开发服务（ODM / OEM）</li>
    </ul>
  </div>
</div>

<div class="mt-8 text-sm leading-relaxed glass-plain border-white/40 rounded-xl p-4 text-slate-50">
 一句话总结：从“单一电芯”到“系统级电源解决方案”，山泽能源正在通过持续研发，将技术优势转化为客户的产品竞争力。
</div>

---
class: px-14 py-10 text-slate-50
---

# 制造能力与质量管理

<div class="grid grid-cols-2 gap-6 mt-6 text-sm leading-relaxed">
  <div class="rounded-xl glass-card border-white/40 p-5">
    <p class="text-base font-semibold text-white">制造能力</p>
    <ul class="list-disc pl-5 mt-2.5 space-y-1.5">
      <li>完成电池、电池零配件、电子元器件及机电组件等多类产品的制造布局</li>
      <li>拥有模具制造、电力电子元器件、家用电器等相关生产能力</li>
      <li>支持从小批试产到大批量量产的柔性生产模式</li>
    </ul>
  </div>
  <div class="rounded-xl glass-card border-white/40 p-5">
    <p class="text-base font-semibold text-white">质量管理与品控</p>
    <ul class="list-disc pl-5 mt-2.5 space-y-1.5">
      <li>依据行业标准建立从来料检验 → 制程控制 → 成品出货的全流程质量管理体系</li>
      <li>对电池相关产品进行安全性、可靠性及寿命测试</li>
      <li>针对储能与启停产品，重点控制高倍率、安全保护与环境适应性指标</li>
    </ul>
  </div>
</div>

<div class="mt-8 text-sm leading-relaxed glass-plain border border-white/40 rounded-xl p-4 text-slate-50">
  <strong>一句增强信任的话：</strong>山泽能源坚持“安全可靠是电源产品的第一标准”，通过严格的品质控制，为客户提供稳定、一致的交付能力。
</div>

---
class: px-14 py-10 text-slate-50
---

# 资质认证与合规保障

<div class="grid grid-cols-3 gap-4 text-sm leading-relaxed">
  <div class="glass-card rounded-xl border-white/40 px-4 pb-2 space-y-2">
    <p class="text-base font-semibold text-white"><carbon:security class="inline-block mr-1 align-middle" />工商合规</p>
    <ul class="list-disc pl-2 space-y-1">
      <li>已依法取得营业执照，经营范围覆盖电池制造、新材料技术研发、光伏设备、家用电器制造及进出口等业务</li>
    </ul>
  </div>
  <div class="glass-card rounded-xl border-white/40 px-4 pb-2 space-y-2">
    <p class="text-base font-semibold text-white"><carbon:badge class="inline-block mr-1 align-middle" />产品与体系认证</p>
    <ul class="list-disc pl-2 space-y-1">
      <li>已规划并落地 <a href="https://www.iso.org/" target="_blank">ISO</a> 质量 / 环境管理体系</li>
      <li>产品安全与材料合规：<a href="https://www.osha.gov/hazard-communication/safety-data-sheets" target="_blank">MSDS</a>、<a href="https://www.ul.com/" target="_blank">UL</a>、<a href="https://www.cnca.gov.cn/" target="_blank">3C</a>、<a href="https://www.iec.ch/" target="_blank">IEC</a>、<a href="https://unece.org/transport/dangerous-goods" target="_blank">UN38.3</a> 等核心认证齐备</li>
      <li>可按客户与目标市场要求补充其他认证与测试</li>
    </ul>
  </div>
  <div class="glass-card rounded-xl border-white/40 px-4 pb-2 space-y-2">
    <p class="text-base font-semibold text-white"><carbon:earth class="inline-block mr-1 align-middle" />进出口能力</p>
    <ul class="list-disc pl-2 space-y-1">
      <li>具备货物进出口与技术进出口资质，可支持海外客户合作</li>
    </ul>
  </div>
  <div class="glass-card rounded-xl border-white/40 px-4 pb-2 space-y-2 col-span-3">
    <p class="text-base font-semibold text-emerald-50"><carbon:flag class="inline-block mr-1 align-middle" />核心结论</p>
    <p class="leading-relaxed">公司高度重视合规经营与产品认证工作，能够根据客户目标市场要求，匹配相应的测试认证与资料支持。</p>
  </div>
</div>

---
class: px-20
---

# Themes

Slidev comes with powerful theming support. Themes can provide styles, layouts, components, or even configurations for tools. Switching between themes by just **one edit** in your frontmatter:

<div grid="~ cols-2 gap-2" m="t-2">

```yaml
---
theme: default
---
```

```yaml
---
theme: seriph
---
```

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-default/01.png?raw=true" alt="">

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-seriph/01.png?raw=true" alt="">

</div>

Read more about [How to use a theme](https://sli.dev/guide/theme-addon#use-theme) and
check out the [Awesome Themes Gallery](https://sli.dev/resources/theme-gallery).

---

# Clicks Animations

You can add `v-click` to elements to add a click animation.

<div v-click>

This shows up when you click the slide:

```html
<div v-click>This shows up when you click the slide.</div>
```

</div>

<br>

<v-click>

The <span v-mark.red="3"><code>v-mark</code> directive</span>
also allows you to add
<span v-mark.circle.orange="4">inline marks</span>
, powered by [Rough Notation](https://roughnotation.com/):

```html
<span v-mark.underline.orange>inline markers</span>
```

</v-click>

<div mt-20 v-click>

[Learn more](https://sli.dev/guide/animations#click-animation)

</div>

---

# Motions

Motion animations are powered by [@vueuse/motion](https://motion.vueuse.org/), triggered by `v-motion` directive.

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }"
  :click-3="{ x: 80 }"
  :leave="{ x: 1000 }"
>
  Slidev
</div>
```

<div class="w-60 relative">
  <div class="relative w-40 h-40">
    <img
      v-motion
      :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50 }"
      :enter="final"
      class="absolute inset-0"
      src="https://sli.dev/logo-square.png"
      alt=""
    />
    <img
      v-motion
      :initial="{ y: 500, x: -100, scale: 2 }"
      :enter="final"
      class="absolute inset-0"
      src="https://sli.dev/logo-circle.png"
      alt=""
    />
    <img
      v-motion
      :initial="{ x: 600, y: 400, scale: 2, rotate: 100 }"
      :enter="final"
      class="absolute inset-0"
      src="https://sli.dev/logo-triangle.png"
      alt=""
    />
  </div>

  <div
    class="text-5xl absolute top-14 left-40 text-[#2B90B6] -z-1"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 0, opacity: 1, transition: { delay: 2000, duration: 1000 } }">
    Slidev
  </div>
</div>

<!-- vue script setup scripts can be directly used in markdown, and will only affects current page -->
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<div
  v-motion
  :initial="{ x:35, y: 30, opacity: 0}"
  :enter="{ y: 0, opacity: 1, transition: { delay: 3500 } }">

[Learn more](https://sli.dev/guide/animations.html#motion)

</div>

---

# LaTeX

LaTeX is supported out-of-box. Powered by [KaTeX](https://katex.org/).

<div h-3 />

Inline $\sqrt{3x-1}+(1+x)^2$

Block

$$
{1|3|all}
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial\vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0\vec{J} + \mu_0\varepsilon_0\frac{\partial\vec{E}}{\partial t}
\end{aligned}
$$

[Learn more](https://sli.dev/features/latex)

---

# Diagrams

You can create diagrams / graphs from textual descriptions, directly in your Markdown.

<div class="grid grid-cols-4 gap-5 pt-4 -mb-6">

```mermaid {scale: 0.5, alt: 'A simple sequence diagram'}
sequenceDiagram
    Alice->John: Hello John, how are you?
    Note over Alice,John: A typical interaction
```

```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Text] --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```

```mermaid
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectiveness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
```

```plantuml {scale: 0.7}
@startuml

package "Some Group" {
  HTTP - [First Component]
  [Another Component]
}

node "Other Groups" {
  FTP - [Second Component]
  [First Component] --> FTP
}

cloud {
  [Example 1]
}

database "MySql" {
  folder "This is my folder" {
    [Folder 3]
  }
  frame "Foo" {
    [Frame 4]
  }
}

[Another Component] --> [Example 1]
[Example 1] --> [Folder 3]
[Folder 3] --> [Frame 4]

@enduml
```

</div>

Learn more: [Mermaid Diagrams](https://sli.dev/features/mermaid) and [PlantUML Diagrams](https://sli.dev/features/plantuml)

---
foo: bar
dragPos:
  square: 691,32,167,_,-16
---

# Draggable Elements

Double-click on the draggable elements to edit their positions.

<br>

###### Directive Usage

```md
<img v-drag="'square'" src="https://sli.dev/logo.png">
```

<br>

###### Component Usage

```md
<v-drag text-3xl>
  <div class="i-carbon:arrow-up" />
  Use the `v-drag` component to have a draggable container!
</v-drag>
```

<v-drag pos="663,206,261,_,-15">
  <div text-center text-3xl border border-main rounded>
    Double-click me!
  </div>
</v-drag>

<img v-drag="'square'" src="https://sli.dev/logo.png">

###### Draggable Arrow

```md
<v-drag-arrow two-way />
```

<v-drag-arrow pos="67,452,253,46" two-way op70 />

---
src: ./pages/imported-slides.md
hide: false
---

---

# Monaco Editor

Slidev provides built-in Monaco Editor support.

Add `{monaco}` to the code block to turn it into an editor:

```ts {monaco}
import { ref } from "vue";
import { emptyArray } from "./external";

const arr = ref(emptyArray(10));
```

Use `{monaco-run}` to create an editor that can execute the code directly in the slide:

```ts {monaco-run}
import { version } from "vue";
import { emptyArray, sayHello } from "./external";

sayHello();
console.log(`vue ${version}`);
console.log(
  emptyArray<number>(10).reduce(
    (fib) => [...fib, fib.at(-1)! + fib.at(-2)!],
    [1, 1],
  ),
);
```

---
layout: center
class: text-center
---

# Learn More

[Documentation](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/resources/showcases)

<PoweredBySlidev mt-10 />

---
layout: center
class: text-center
---

<img src="/pics/山泽2.png" class="w-1/3 mx-auto"></img>

# 山泽新能源科技有限公司

---
class: px-14 py-10 text-slate-50
---

# 发展历程

<div class="grid grid-cols-2 gap-8 h-full items-start px-4">
  <!-- 左侧：时间轴 -->
  <div class="glass-card text-left rounded-2xl p-6 border-white/40 shadow-xl space-y-4">
    <div class="flex items-center space-x-4">
      <div>
        <p class="text-xl font-semibold text-sky-50">2022</p>
        <p class="text-lg">成立山泽新能源科技</p>
      </div>
    </div>
    <div class="flex items-center space-x-4">
      <div>
        <p class="text-xl font-semibold text-sky-50">2023</p>
        <p class="text-lg">建成长安智能工厂</p></div>
      </div>
    <div class="flex items-center space-x-4">
      <div>
        <p class="text-xl font-semibold text-sky-50">2024</p>
        <p class="text-lg">服务客户破千</p>
      </div>
    </div>
    <div class="flex items-center space-x-4">
      <div>
        <p class="text-xl font-semibold text-sky-50">2025</p>
        <p class="text-lg">团队 500+ 人</p>
      </div>
    </div>    
  </div>

  <!-- 右侧：4个关键数字 + 小地图 -->
  <div class="space-y-8 glass-card rounded-2xl p-6 border-white/40 shadow-xl">
    <!-- 4个圆形指标 -->
    <div class="grid grid-cols-2 gap-y-6 gap-x-12">
        <div class="w-44 h-44 rounded-full glass-card flex flex-col items-center justify-center border-white/40">
          <div class="text-4xl font-bold text-white">1000万</div>
          <div class="text-sm text-slate-100">注册资本</div>
        </div>
        <div class="w-44 h-44 rounded-full glass-card flex flex-col items-center justify-center border-white/40">
          <div class="text-4xl font-bold text-white">7人</div>
          <div class="text-sm text-slate-100">核心团队</div>
        </div>
        <div class="w-44 h-44 rounded-full glass-card flex flex-col items-center justify-center border-white/40">
          <div class="text-3xl font-bold text-white">电池+产品</div>
          <div class="text-sm text-slate-100">全链条制造</div>
        </div>
        <div class="w-44 h-44 rounded-full glass-card flex flex-col items-center justify-center border-white/40">
          <div class="text-4xl font-bold text-white">东莞</div>
          <div class="text-sm text-slate-100">总部</div>
        </div>
    </div>
  </div>
</div>

---
class: px-10 py-10 text-slate-50
---

# 总部位置

<div class="glass-card rounded-3xl p-4 border-white/40 shadow-2xl max-w-6xl mx-auto">
  <iframe class="w-full rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.8007667243496!2d113.74241607605255!3d22.77277392560265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403bdec6d798e31%3A0x2c3a1ff4f5846206!2z5Y2a5Lia5bel5Lia5Zut!5e0!3m2!1szh-CN!2sjp!4v1762858420061!5m2!1szh-CN!2sjp" width="900" height="425" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

---

# 发展历程
