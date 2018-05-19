<template>
   <div class="wrapper">
        <div class="animated fadeIn">
     <b-row>
        <b-col cols='16' md='8'>
            <b-card>
            <div slot="header" style="text-align:center">
        <i class="fa fa-spinner"></i> <div ><strong> Fellows Progress</strong></div>
        </div>
           <b-table class="mb-0 table-outline" responsive="sm" hover :items="tableItems" :fields="tableFields" head-variant="light">
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
            </b-card>
       </b-col>
        <b-col cols="8" md="4">
          <b-card header-tag="header" footer-tag="footer">
              <div slot="header" style="text-align:center">
        <i class="fa fa-comments"></i> <div ><strong> Fellows Feedbacks</strong></div>
        </div>
     <div role="tablist">
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.accordion1 variant="info">Sana Tarhouni</b-btn>
            </b-card-header>
            <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <p class="card-text">
                        {{ text }}
                    </p>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.accordion2 variant="info">Amine Troudi</b-btn>
            </b-card-header>
            <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <p class="card-text">
                        {{ text }}
                    </p>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.accordion3 variant="info">Manel Charouni</b-btn>
            </b-card-header>
            <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <p class="card-text">
                        {{ text }}
                    </p>
                </b-card-body>
            </b-collapse>
        </b-card>
        </div>
       </b-card>
       </b-col>
       </b-row>
    </div>
</div>
</template>
<script>

export default {
  name: 'dashboard',
    data () {
    return {
      showCollapse: true,
      text: `
        some feedback...
      `,tableItems: [
        {
          avatar: { url: 'static/img/avatars/1.jpg', status: 'InProgress' },
          fellow: { name: 'Amine Troudi', cohort: 2},
          progress: { value: 50, period: 'Jun 11, 2018 - Jul 10, 2018' },
          Status: {value: 'InProgress' },
          Deadline: '10 May'
        },
        {
          avatar: { url: 'static/img/avatars/2.jpg', status: 'finished' },
          fellow: { name: 'Manel Charouni', cohort:2 },
          progress: { value: 22, period: 'Jun 11, 2018 - Jul 10, 2018' },
          Status: {value: 'Inprogress' },
          Deadline: '15 May'
        },
        {
          avatar: { url: 'static/img/avatars/3.jpg', status: 'outOfDeadline' },
          fellow: { name: 'Anonymous', cohort: 3},
          progress: { value: 100, period: 'Jun 11, 2018 - Jul 10, 2018' },
          Status: {value:'finished' },
          Deadline: '20 Jun'
        },
        {
          avatar: { url: 'static/img/avatars/4.jpg', status: 'InProgress' },
          fellow: { name: 'Sana Tarhoui', cohort: 2},
          progress: { value: 98, period: 'Jun 11, 2018- Jul 10, 2018' },
          Status: { value:'outOfDeadline' },
          Deadline: 'Last month'
        }
      ],
      tableFields: {
        avatar: {
          label: '<i class="icon-people"></i>',
          class: 'text-center'
        },
        fellow: {
          label: 'Fellow'
        },
        progress: {
          label: 'Progress'
        },
        Deadline: {
          label: 'Deadline',
          class: 'text-center'
        },
        Status: {
          label: 'Status'
        }
      }
    }
    },
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
    //TODO
    //modify this fx so that it calculates status based on progress % + deadline ==>
    // if out of deadline => outOfDeadline, else : if progress==100% => finished, else=> Inprogress 
     getBadge (status) {
      return status === 'Inprogress' ? 'warning'
        : status === 'finished' ? 'success'
          : status === 'outOfDeadline' ? 'danger'
            : 'primary'
    }
  }
  }
</script>
