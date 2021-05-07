<template>
      <div id="tab-bar">
        <slot></slot>
     </div>
    
  </template>

<script>
    import TabBarItem from "./TabBarItem"

    export default {
        name: "TabBar",
        // components: {
        //     TabBarItem
        // }
    }
</script>

<style>
    #tab-bar {
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        width: 100%;
        height: 49px;
        text-align: center;
        box-shadow: 0 -1px 10px rgba(100, 100, 100, .2);
        z-index: 10;
    }
</style>