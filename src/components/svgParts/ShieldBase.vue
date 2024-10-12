<script setup lang="ts">
import DivisionGyronny from '@/components/svgParts/DivisionGyronny.vue'
import DivisionPerBend from '@/components/svgParts/DivisionPerBend.vue'
import DivisionPerPale from '@/components/svgParts/DivisionPerPale.vue'
</script>

<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="100%"
    height="100%"
    viewBox="0 0 159.661 208.519"
    enable-background="new 0 0 159.661 208.519"
    xml:space="preserve"
  >
    <pattern
      id="division"
      patternUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="163"
      height="217"
      viewBox="0 0 163 217"
    >
      <g id="base">
        <rect class="field" id="rect2985" width="163" height="217" x="0" y="0" />
      </g>
      <DivisionGyronny />
    </pattern>

    <g id="shield">
      <path
        fill="url(#division)"
        stroke="#000000"
        stroke-width="0"
        d="M158.367,145.863c0,22.642-73.914,48.666-78.748,60.321
		c-5.911-11.052-78.333-39.094-78.333-60.321c0-11.322,0-144.345,0-144.345h157.082C158.367,1.518,158.367,134.542,158.367,145.863z
		"
      />
    </g>

    <g id="ordinaries">#ORDINARIES#</g>

    <g id="shield_outline">
      <path
        fill="none"
        stroke="#000000"
        stroke-width="3"
        d="M158.367,145.863c0,22.642-73.914,48.666-78.748,60.321
		c-5.911-11.052-78.333-39.094-78.333-60.321c0-11.322,0-144.345,0-144.345h157.082C158.367,1.518,158.367,134.542,158.367,145.863z
		"
      />
    </g>

    #CHARGE#

    <g id="Layer_2">
      <g id="shield_1_" opacity="0.15">
        <linearGradient
          id="path100_2_"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="160"
          y2="0"
        >
          <stop offset="0" style="stop-color: #131012" />
          <stop offset="0.3257" style="stop-color: #cccccc" />
          <stop offset="0.4999" style="stop-color: #ffffff" />
          <stop offset="0.6855" style="stop-color: #cccccc" />
          <stop offset="1" style="stop-color: #333333" />
        </linearGradient>
        <path
          id="path100_1_"
          fill="url(#path100_2_)"
          d="M158.367,145.863c0,22.642-73.914,48.666-78.748,60.321
		c-5.911-11.052-78.333-39.094-78.333-60.321c0-11.322,0-144.345,0-144.345h157.082C158.367,1.518,158.367,134.542,158.367,145.863z
		"
        />
      </g>
    </g>
  </svg>
</template>
