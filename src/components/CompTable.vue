<template>
    <div class="table-wrap">
        <table v-bind="$attrs">
            <colgroup v-if="$slots.col">
                <slot name="col" />
            </colgroup>
            <thead>
                <tr>
                    <slot name="th" />
                </tr>
            </thead>
            <tbody>
                <slot />
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
    defineOptions({ inheritAttrs: false });
</script>
