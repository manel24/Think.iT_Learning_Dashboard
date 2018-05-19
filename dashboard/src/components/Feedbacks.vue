  <template v-for="item in feeds">
  <b-card no-body class="mb-1" >
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.accordion1 variant="info">{{item.fellow}}</b-btn>
            </b-card-header>
            <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <p class="card-text">
                        {{ item.text }}
                    </p>
                </b-card-body>
            </b-collapse>
        </b-card> 
  </template>
  
<script>

export default {
  name: 'c-feeds',
   props: {
    /*module_id: {   //TO ADD
      type: Number,
      default:1 // should be required
    },*/
    feeds:{
      type: Array
    }
  /* maxFeeds: {    //TO ADD
      type: Number,
      default: this.FELLOWS_NBR //should be var not a const
    }*/
 }
}
</script>

