<template>
  <ParentLayout>
    <CodeFund slot="sidebar-top" />
    <SideBarApi slot="sidebar-bottom" />
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import CodeFund from '../components/CodeFund.vue'
import SideBarApi from '../components/SideBarApi.vue'

export default {
  components: {
    ParentLayout,
    CodeFund,
    SideBarApi
  }
}
</script>

<style>
  #codefund {
    border-bottom: 1px solid #eaecef;
    min-height: 115px;
  }
  #codefund + .sidebar-links {
    padding-top: 1rem;
    border-bottom: none;
    padding-bottom: 0.75rem;
  }
</style>
