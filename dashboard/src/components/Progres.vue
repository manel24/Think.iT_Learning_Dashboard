<template >
    <progres>
    <b-table class="mb-0 table-outline" responsive="sm" hover :items="tableItems" :fields="tableFields"  head-variant="light">
            <div slot="avatar" class="avatar" slot-scope="item">
              <img :src="item.value.url" class="img-avatar" alt="">
              <span class="avatar-status" v-bind:class="{ 'bg-success': item.value.status == 'finished',  'bg-warning': item.value.status == 'InProgress', 'bg-danger': item.value.status == 'outOfDeadline', 'bg-secondary': item.value.status == '' }"></span>
            </div>
            <div slot="fellow" slot-scope="item">
              <div>{{item.value.name}}</div>
              <div class="small text-muted">
                <span>
                  cohort {{item.value.cohort}}
                </span> 
              </div>
            </div>
            <div slot="progress" slot-scope="item">
              <div class="clearfix">
                <div class="float-left">
                  <strong>{{item.value.value}}%</strong>
                </div>
                <div class="float-right">
                  <small class="text-muted">{{item.value.period}}</small>
                </div>
              </div>
              <b-progress height={} class="progress-xs" v-model="item.value.value" :variant="variant(item.value.value)"></b-progress>
            </div>   
          <div slot="Status" slot-scope="item">
          <b-badge :variant="getBadge(item.value.value)"> {{item.value.value}} </b-badge>
           </div>
            <div slot="Deadline" slot-scope="item">
              <strong>{{item.value}}</strong>
            </div>
          </b-table>
    </progres>
</template>

<script>

export default {
    name:'c-progres', 
     methods: {
   
    variant (value) {
      let $variant
      if (value <= 25) {
        $variant = 'danger'
      } else if (value > 25 && value <= 50) {
        $variant = 'warning'
      } else if (value > 50 && value <= 75) {
        $variant = 'info'
      } else if (value > 75 && value <= 100) {
        $variant = 'success'
      }
      return $variant
    },
    // TODO
    // modify this fx so that it calculates status based on progress % + deadline ==>
    // if out of deadline => outOfDeadline, else : if progress==100% => finished, else=> Inprogress 
     getBadge (status) {
      return status === 'Inprogress' ? 'warning'
        : status === 'finished' ? 'success'
          : status === 'outOfDeadline' ? 'danger'
            : 'primary'
    }
  },
    props: {
    /*module_id: {
      type: Number,
      default:1 // should be required
    },*/
    tableItems: {
      type: Array,
      required: true,
      default: () => []
    },
    tableFields: {
      required: true,
      default: () => {}
    }
  }
}
</script>
