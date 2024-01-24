<!-- SCRIPT -->
<script setup>
import { ref } from "vue";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const props = defineProps({
  title: String,
  wrapperClasses: String,

  color: { type: String },
  variant: { type: String },
  shape: { type: String },
  size: { type: String },

  href: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  shadow: String,
  className: String,
});

// Class Variance Authority
const button = cva("leading-normal transition-300", {
  variants: {
    variant: {
      filled: "text-white bg-black text-center focus:outline-none outline-none",
      outline:
        "text-black text-center border outline-none focus:outline-none  border-black dark:text-white dark:border-white",
      translucent:
        "text-gray-400 bg-black/10 text-center focus:outline-none outline-none",
      textOnly: "text-gray-700 text-center hover:text-gray-900",
    },

    color: {
      primary:
        "bg-primary hover:bg-transparent hover:text-primary border border-primary dark:bg-primary dark:hover:text-white dark:hover:bg-transparent dark:hover:border-secondaryLight",
      secondary:
        "bg-secondary hover:bg-transparent hover:text-secondary border border-primary dark:bg-secondary dark:hover:bg-transparent  dark:hover:text-white dark:hover:border-secondaryLight",
      gray: "bg-gray-200 text-gray-500 border-none hover:border-none hover:bg-gray-300 hover:text-gray-600",
      disabled: "text-gray-400 bg-gray-200  border-gray-400 dark:bg-gray-200",
    },

    shape: {
      pill: "shape-pill",
      rounded: "shape-rounded",
      square: "shape-square",
    },

    size: {
      large: "btn-lg ",
      medium: "btn-md",
      small: "btn-sm",
      xsmall: "btn-xs",
    },
  },

  compoundVariants: [
    {
      variant: "outline",
      color: "primary",
      class:
        "text-primary bg-transparent border-primary hover:text-white hover:bg-primary dark:hover:bg-primary dark:hover:border-primary dark:bg-transparent dark:border-primaryLight dark:text-primaryLight dark:hover:text-white",
    },
    {
      variant: "outline",
      color: "secondary",
      class:
        "bg-transparent  border-secondary hover:text-white hover:bg-secondary dark:hover:bg-secondary dark:hover:border-secondary dark:bg-transparent dark:border-secondaryDark dark:text-white",
    },
    {
      variant: "outline",
      color: "disabled",
      class:
        "text-gray-400  border-gray-400 hover:bg-white dark:bg-transparent dark:hover:text-gray-400",
    },

    {
      variant: "translucent",
      color: "primary",
      class:
        "bg-primaryLight text-primaryDark border-none dark:text-white hover:border-none hover:bg-primary hover:text-white dark:hover:bg-primaryDark",
    },
    {
      variant: "translucent",
      color: "secondary",
      class:
        "bg-secondaryLight text-secondaryDark border-none dark:text-white hover:border-none hover:bg-secondary hover:text-white dark:hover:bg-secondaryDark",
    },
    {
      variant: "translucent",
      color: "disabled",
      class: "bg-gray-300 text-gray-600",
    },

    {
      size: "small",
      class: "text-sm font-normal ",
    },
  ],

  defaultVariants: {
    variant: "filled",
    color: "primary",
    size: "medium",
    shape: "rounded",
  },
});

const buttonComponent = ref(props.href ? "router-link" : "button");
const linkAttr = ref(props.href ? "to" : "");
</script>

<!-- === TEMPLATE === -->
<template>
  <component
    :is="buttonComponent"
    :[linkAttr]="href"
    :disabled="buttonComponent === 'button' && disabled"
    v-bind="$attrs"
    :class="cn(button({ variant, color, size, shape }))"
  >
    <slot name="prefix"></slot>
    {{ title }}
    <slot name="suffix"></slot>
  </component>
</template>
