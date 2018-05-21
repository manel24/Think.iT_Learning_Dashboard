<template>
   <div class="wrapper">
        <div class="animated fadeIn">
     <b-row>
        <b-col cols='16' md='8'>
            <b-card>
            <div slot="header" style="text-align:center">
        <i class="fa fa-spinner"></i> <div ><strong> Fellows Progress</strong></div>
        </div>
           <c-progres/>
            </b-card>
       </b-col>
        <b-col cols="8" md="4">
          <b-card header-tag="header" footer-tag="footer">
              <div slot="header" style="text-align:center">
        <i class="fa fa-comments"></i> <div ><strong> Fellows Feedbacks</strong></div>
        </div>
     <div role="tablist">
      <c-feeds :feeds="feeds" />
        </div>
       </b-card>
       </b-col>
       </b-row>
    </div>
</div>
</template>
<script>

// import prog from '@/_prog.js'
import feedbs from '@/_feeds.js'
import cFeeds from '@/components/Feedbacks.vue'
import cProgres from '@/components/Progres.vue'

export default {
  name: 'dashboard',
  components: {
    cProgres,
    cFeeds
      },
  data () {
    return {
      // tableItems: prog.tableItems,
      // tableFields: prog.tableFields,
      showCollapse: true,
      FELLOWS_NBR: 20,
      feeds: feedbs.feeds
    }  
  }
}
</script>
