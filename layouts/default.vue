<script setup lang="ts">
import { computed, inject } from "vue";
import { handleBackground } from "@slidev/client/layoutHelper.ts";
import { injectionCurrentPage } from "@slidev/client/constants.ts";

// 前端可传入的布局属性
const props = defineProps({
  class: {
    type: String,
    default: "",
  },
  layoutClass: {
    type: String,
    default: "",
  },
  background: {
    type: String,
    default: "",
  },
});

// Slidev 提供的当前页号注入值，用于计算每页专属背景
const currentPage = inject(injectionCurrentPage);

const backgroundUrl = computed(() => {
  // 基于当前页号拼出 cover.sli.dev 的随机背景；若用户传了自定义背景则使用自定义
  const base = (props.background || "https://cover.sli.dev").trim();
  const page = currentPage?.value;

  if (!page || !base.includes("cover.sli.dev")) return base;

  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}slide=${page}`;
});

// 生成背景样式，沿用官方的 handleBackground 以保持主题一致
const style = computed(() => handleBackground(backgroundUrl.value));
</script>

<template>
  <!-- 包一层默认布局样式，兼容 Slidev 默认类名 -->
  <div
    class="slidev-layout default w-full h-full"
    :class="props.layoutClass"
    :style="style"
  >
    <div class="background-dim" aria-hidden="true"></div>
    <!-- 内容插槽，允许自定义类 -->
    <div class="content" :class="props.class">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.default {
  position: relative;
}

.background-dim {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(0, 0, 0, 0.4), transparent 35%),
    radial-gradient(circle at 80% 15%, rgba(0, 0, 0, 0.45), transparent 40%),
    linear-gradient(135deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.6));
  z-index: 0;
  pointer-events: none;
}

.content {
  position: relative;
  z-index: 1;
}
</style>
