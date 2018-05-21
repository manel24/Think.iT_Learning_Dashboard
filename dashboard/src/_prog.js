export default {
  tableItems: [
    {
      avatar: { url: 'static/img/avatars/1.jpg', status: 'InProgress' },
      fellow: { name: 'Amine Troudi', cohort: 2 },
      progress: { value: 50, period: 'Jun 11, 2018 - Jul 10, 2018' },
      Status: { value: 'InProgress' },
      Deadline: '10 May'
    },
    {
      avatar: { url: 'static/img/avatars/2.jpg', status: 'finished' },
      fellow: { name: 'Manel Charouni', cohort: 2 },
      progress: { value: 22, period: 'Jun 11, 2018 - Jul 10, 2018' },
      Status: { value: 'Inprogress' },
      Deadline: '15 May'
    },
    {
      avatar: { url: 'static/img/avatars/3.jpg', status: 'outOfDeadline' },
      fellow: { name: 'Anonymous', cohort: 3 },
      progress: { value: 100, period: 'Jun 11, 2018 - Jul 10, 2018' },
      Status: { value: 'finished' },
      Deadline: '20 Jun'
    },
    {
      avatar: { url: 'static/img/avatars/4.jpg', status: 'InProgress' },
      fellow: { name: 'Sana Tarhoui', cohort: 2 },
      progress: { value: 98, period: 'Jun 11, 2018- Jul 10, 2018' },
      Status: { value: 'outOfDeadline' },
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
    // TODO
    // status should be a calculated field : fx(progress)
    Status: {
      label: 'Status'
    }
  }
}
