<template>
    <div>
        <button
            @click="onClick"
            @dblclick="onDoubleClick"
            :class="[
                `xyz-button`,
                `xyz-button--${color}`,
                `xyz-button--${size}`,
                {
                    'xyz-button--rounded': rounded,
                }
            ]">
            <slot></slot>
        </button>
        <!-- <button
            @click="onClick"
            @dblclick="onDoubleClick"
            :class="[
                'xyz-button',
                'xyz-button--' + color,
                'xyz-button--' + size,
                {
                    'xyz-button--rounded': rounded
                }
            ]">
            <slot></slot>
        </button> -->
    </div>
</template>

<script>
    // "use strict";
    /**
     *
     * @author xgqfrms
     * @license MIT
     * @copyright xgqfrms
     *
     * @description  XyzButton
     * @augments
     * @example
     * @link
     * @created 2019-05-23
     *
     */
    export default {
        // name: "XyzButton",
        props: {
            color: {
                type: String,
                default: "blue",
                validator(x) {
                    return ["blue", "green", "red"].indexOf(x) !== -1;
                },
            },
            rounded: {
                type: Boolean,
                default: true,
            },
            size: {
                type: String,
                default: "default",
                validator(x) {
                    return ["small", "default", "large"].indexOf(x) !== -1;
                },
            },
        },
        methods: {
            onClick(event) {
                this.$emit("click", event);
            },
            // not work on mobile devices
            onDoubleClick(event) {
                this.$emit("dblclick", event);
            }
        }
    };
</script>

<style>
    .xyz-button {
        display: inline-block;
        outline: 0;
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: #ffffff;
        font-weight: 500;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        user-select: none;
        cursor: pointer;
    }
    /* colors */
    .xyz-button--blue {
        background-color: #0194ef;
    }
    .xyz-button--green {
        background-color: #1bb934;
    }
    .xyz-button--red {
        background-color: #e1112c;
    }
    /* sizes */
    .xyz-button--small {
        padding: 8px 10px;
        border-radius: 4px;
        font-size: 12px;
        line-height: 12px;
    }
    .xyz-button--default {
        padding: 12px 14px;
        border-radius: 6px;
        font-size: 14px;
        line-height: 16px;
    }
    .xyz-button--large {
        padding: 16px 18px;
        border-radius: 8px;
        font-size: 16px;
        line-height: 20px;
    }
    /* boolean */
    .xyz-button--rounded {
        border-radius: 60px;
    }
</style>
