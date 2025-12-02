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

# 目录

<div class="grid cols-2  gap-6  max-w-7xl mx-auto px-2"> 
<div></div>
  <div class=" rounded-3xl border-white/40 p-4 shadow-xl">
    <Toc
      minDepth="1"
      maxDepth="2"
    />
  </div>
</div>

---
class: text-left px-14 text-slate-50
---

# 公司概况

<div class="glass-card rounded-2xl px-4 py-2 border-white/40 shadow-xl flex flex-col">
  <ul class="space-y-2">
    <li class="flex items-center gap-2">
      <span class="i-carbon-building text-sky-200"></span>
      <span><strong>公司名称</strong>：东莞山泽新能源科技有限公司</span>
    </li>
    <li class="flex items-center gap-2">
      <span class="i-carbon-calendar text-emerald-200"></span>
      <span><strong>成立时间</strong>：2022 年 4 月 18 日</span>
    </li>
    <li class="flex items-center gap-2">
      <span class="i-carbon-currency-yen text-indigo-200"></span>
      <span><strong>注册资本</strong>：1,000 万元人民币</span>
    </li>
    <li class="flex items-center gap-2">
      <span class="i-carbon-license-draft text-fuchsia-200"></span>
      <span><strong>企业性质</strong>：有限责任公司（自然人投资或控股）</span>
    </li>
    <li class="flex items-center gap-2">
      <span class="i-carbon-location text-cyan-200"></span>
      <span><strong>所在地</strong>：广东省东莞市长安镇</span>
    </li>
    <li class="flex items-center gap-2">
      <span class="i-carbon-battery-full text-lime-200"></span>
      <span><strong>所属行业</strong>：新能源及电子制造（电池与储能相关应用）</span>
    </li>
  </ul>

  <p class="p-4">公司简介：东莞山泽新能源科技有限公司专注于电池及新能源相关产品的研发、制造与销售，业务覆盖电池电芯、储能系统、启停电源以及移动电源等多类产品。公司立足东莞制造基地，依托成熟的电芯工艺与新材料技术，面向消费电子、家用及便携储能、汽车启停等多元应用场景，为客户提供稳定可靠的新能源解决方案。</p>

</div>

---
class: px-14  text-slate-50
---

# 发展历程与股东背景

<div class="grid grid-cols-2 gap-6 text-sm items-stretch">
  <div class="glass-card rounded-2xl px-4 py-2 border-white/40 shadow-xl">
    <p class="text-lg font-semibold text-sky-50 mb-2">发展历程</p>
    <ul class="list-disc pl-5 space-y-1 ">
      <li>2022.04 东莞山泽新能源科技有限公司正式成立，聚焦电池制造与新兴能源技术研发</li>
      <li>2022–2023 建立电池及电池零部件生产体系，逐步拓展至电子元器件与机电组件制造</li>
      <li>2023–2024 形成以电芯为核心，向储能电源、启停电源、移动电源等成品延伸的业务布局</li>
      <li>2024 起 加大在半固态电池、便携储能和磁吸移动电源等方向的研发投入，推动产品升级与业务转型</li>
    </ul>
  </div>
  <div class="glass-card rounded-2xl">
    <img src="/pics/lab.png" alt="实验室/产线照片" class="w-full h-full object-cover rounded-2xl">
  </div>
</div>

<div class="mt-6 text-sm glass-plain inline-block px-4 py-3 rounded-xl border-white/40 text-slate-50">
  <strong>总结：</strong>公司股东背景涵盖新能源电池及相关产业链企业，为山泽能源在技术、供应链及市场协同方面提供了坚实支撑。
</div>

---
class: px-14  text-slate-50
---

# 业务布局与产品矩阵

<div class="grid grid-cols-2 gap-5 mt-4 max-w-4xl mx-auto">
  <div class="rounded-2xl glass-card border-white/40 p-4">
    <div class="flex items-center justify-between">
      <p class="text-lg font-semibold text-white">电池电芯业务</p>
      <span class="text-xs glass-chip text-sky-900 px-2 py-1 rounded-full border border-white/30 shadow-sm">核心</span>
    </div>
    <ul class="list-disc pl-5 mt-2.5 space-y-1 text-sm leading-relaxed text-slate-100">
      <li>电池制造、电池零配件生产与销售</li>
      <li>面向多种容量与规格定制</li>
    </ul>
  </div>
  <div class="rounded-2xl glass-card border-white/40 p-4">
    <div class="flex items-center justify-between">
      <p class="text-lg font-semibold text-white">储能产品</p>
      <span class="text-xs glass-chip text-indigo-900 px-2 py-1 rounded-full border border-white/30 shadow-sm">储发一体</span>
    </div>
    <ul class="list-disc pl-5 mt-2.5 space-y-1 text-sm leading-relaxed text-slate-100">
      <li>便携储能、电源模组</li>
      <li>结合光伏设备与元器件，实现储发一体解决方案</li>
    </ul>
  </div>
  <div class="rounded-2xl glass-card border-white/40 p-4">
    <div class="flex items-center justify-between">
      <p class="text-lg font-semibold text-white">启停电源</p>
      <span class="text-xs glass-chip text-amber-900 px-2 py-1 rounded-full border border-white/30 shadow-sm">高倍率</span>
    </div>
    <ul class="list-disc pl-5 mt-2.5 space-y-1 text-sm leading-relaxed text-slate-100">
      <li>面向汽车/设备启停场景的电源产品</li>
      <li>高倍率放电、可靠启停性能</li>
    </ul>
  </div>
  <div class="rounded-2xl glass-card border-white/40 p-4">
    <div class="flex items-center justify-between">
      <p class="text-lg font-semibold text-white">移动电源成品</p>
      <span class="text-xs glass-chip text-emerald-900 px-2 py-1 rounded-full border border-white/30 shadow-sm">消费终端</span>
    </div>
    <ul class="list-disc pl-5 mt-2.5 space-y-1 text-sm leading-relaxed text-slate-100">
      <li>半固态电池磁吸移动电源</li>
      <li>快充、安全、轻薄，服务消费电子终端</li>
    </ul>
  </div>
</div>

<div class="mt-4 text-sm leading-relaxed glass-plain rounded-xl px-4 py-2 text-slate-50 border-white/40">
  <strong>总结：</strong>山泽能源以电芯为核心，向储能、启停、移动电源等多产品形态延伸，能够根据客户场景需求，提供从零部件到整机的多层级产品与解决方案。
</div>

---
class: px-14  text-slate-50
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
class: px-14  text-slate-50
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
class: px-14  text-slate-50
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
class: px-14  text-slate-50
---

# 典型应用与合作方向

<section class="space-y-4">
  <div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">
    <div class="glass-card rounded-2xl border-white/40 p-4 space-y-2">
      <p class="font-semibold text-white flex items-center gap-2">
        <span class="i-carbon-mobile text-amber-200"></span>
        <span>消费电子领域</span>
      </p>
      <p class="text-slate-100">搭载半固态电池及磁吸移动电源，为手机、平板等终端提供安全便捷的随身电力。</p>
    </div>
    <div class="glass-card rounded-2xl border-white/40 p-4 space-y-2">
      <p class="font-semibold text-white flex items-center gap-2">
        <span class="i-carbon-solar-panel text-emerald-200"></span>
        <span>家用与便携储能</span>
      </p>
      <p class="text-slate-100">小型储能电源与光伏设备配套，为家庭应急、户外露营等场景提供稳定电力支持。</p>
    </div>
    <div class="glass-card rounded-2xl border-white/40 p-4 space-y-2">
      <p class="font-semibold text-white flex items-center gap-2">
        <span class="i-carbon-car-front text-indigo-200"></span>
        <span>汽车与设备启停</span>
      </p>
      <p class="text-slate-100">启停电源应用于车辆启停、电源应急启动等场景，对可靠性和瞬间输出能力要求高。</p>
    </div>
    <div class="glass-card rounded-2xl border-white/40 p-4 space-y-2">
      <p class="font-semibold text-white flex items-center gap-2">
        <span class="i-carbon-ibm-watsonx-code-assistant text-sky-200"></span>
        <span>定制化能源解决方案</span>
      </p>
      <p class="text-slate-100">为品牌客户及项目客户提供从电芯选型、结构设计到整机交付的一体化合作模式。</p>
    </div>
  </div>

  <div class="glass-plain border border-white/40 rounded-xl p-4 text-sm text-slate-100">
    <strong class="text-white">结论：</strong>无论是标准化产品，还是项目型、定制化合作，山泽能源都能够结合客户需求提供匹配的电源与储能解决方案。
  </div>
</section>

---
class: px-14  text-slate-50
---

# 合作模式与服务优势

<section class="space-y-4">
  <div class="grid grid-cols-2 gap-5">
    <div class="rounded-2xl border-white/40 px-4 space-y-2">
      <div class="glass-plain rounded-xl border-white/30 px-3 ">
        <p class="font-semibold text-amber-100">OEM / 代工生产</p>
        <p class="text-sm  text-slate-100">按客户设计图纸与标准进行生产制造</p>
      </div>
      <div class="glass-plain rounded-xl border-white/30 px-3 ">
        <p class="font-semibold text-sky-100">ODM / 联合开发</p>
        <p class="text-sm  text-slate-100">基于山泽的电芯与电源方案，为客户定制外观、功能和性能配置</p>
      </div>
      <div class="glass-plain rounded-xl border-white/30 px-3 ">
        <p class="font-semibold text-emerald-100">技术合作与方案输出</p>
        <p class="text-sm  text-slate-100">提供电池选型、系统设计、测试验证等技术服务</p>
      </div>
    </div>
    <div class="glass-card rounded-2xl border-white/40 px-4 pb-4 space-y-2">
      <p class="text-lg font-semibold text-white">服务优势</p>
      <ul class="list-disc pl-5 space-y-1.5 text-sm  text-slate-100">
        <li>源自电芯的技术理解，能够从底层优化产品方案</li>
        <li>多品类能力，便于客户统一采购与平台化开发</li>
        <li>小批试制 + 大批量量产能力，适合从新品导入到成熟放量的全阶段合作</li>
        <li>位于东莞，产业链配套完善、响应迅速</li>
      </ul>
    </div>
  </div>

  <div class="glass-plain rounded-xl border-white/40 p-4 text-sm text-slate-100">
    <strong class="text-white">结论：</strong>以电芯与系统双重能力为底座，山泽可灵活匹配 OEM / ODM / 技术合作等模式，交付快速、品质稳定。
  </div>
</section>

---
class: px-14 py-12 text-slate-50
---

<section class="space-y-6">
  <h1 class="text-3xl font-bold text-white flex items-center gap-3">
    <span class="i-carbon-renew text-sky-200"></span>
    <span>未来规划与发展方向</span>
  </h1>

  <div class="grid grid-cols-2 gap-5">
    <div class="glass-card rounded-2xl border-white/40 p-5 space-y-2 text-sm leading-relaxed text-slate-100">
      <p class="text-lg font-semibold text-white">战略方向</p>
      <p>从传统电池制造企业，升级为“多场景能源解决方案提供商”</p>
      <p class="text-lg font-semibold text-white pt-2">技术方向</p>
      <p>持续加大对半固态电池、新材料及高安全性电源产品的研发投入</p>
    </div>
    <div class="glass-card rounded-2xl border-white/40 p-5 space-y-2 text-sm leading-relaxed text-slate-100">
      <p class="text-lg font-semibold text-white">产品方向</p>
      <p>深耕储能、启停及移动电源等方向，形成系列化、平台化产品矩阵</p>
      <p class="text-lg font-semibold text-white pt-2">合作方向</p>
      <p>与上下游合作伙伴共同打造更完善的新能源生态，为终端客户提供更安全、更高效的电源产品</p>
    </div>
  </div>

  <div class="glass-plain rounded-xl border-white/40 p-4 text-sm text-slate-100">
    <strong class="text-white">总结：</strong>山泽能源期待与更多合作伙伴携手，在新能源变革的浪潮中，共同打造具有长期竞争力的产品与解决方案。
  </div>
</section>

---
class: px-14 py-12  text-slate-50
---

# 联系我们

<div class="grid grid-cols-2 gap-6 items-stretch">
  <div class="glass-card rounded-2xl border-white/40 p-6 space-y-3 text-sm text-slate-100">
    <p class="text-2xl font-bold text-white mb-2">东莞山泽新能源科技有限公司</p>
    <div class="space-y-1.5">
      <p><strong class="text-white">地址：</strong>广东省东莞市长安镇上沙中南中路 84 号 22 号楼 201 房</p>
      <p><strong class="text-white">电话：</strong>400 804 2015</p>
      <p><strong class="text-white">邮箱：</strong>info@shanzesz.com</p>
    </div>
    <div class="glass-plain rounded-xl border-white/30 p-3 text-xs leading-relaxed">
      山泽能源期待与更多合作伙伴携手，在新能源变革的浪潮中，共同打造具有长期竞争力的产品与解决方案。
    </div>
  </div>

  <div class="grid grid-cols-2 gap-3">
    <div class="  glass-card rounded-2xl  border-white/40  items-center justify-center text-center text-xl text-slate-100">
      <p class="text-white font-bold "><a href="https://shanzesz.com" target="_blank" rel="noopener noreferrer">山泽官网</a></p>
      <img src="/pics/shanzesz.com.png"  />
    </div>
    <div class=" glass-plain rounded-2xl border-white/30 p-4 text-xs leading-relaxed text-slate-100 grid place-content-center">
      欢迎随时通过电话或邮件联系预约交流，支持到厂参观与项目技术沟通。
    </div>
  </div>
</div>
