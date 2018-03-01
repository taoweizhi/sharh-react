
const sideBar = {
  current: 'shedule',
  menu: [
    {
      hasSubMenu: false,
      key: 'activity',
      icon: 'environment',
      title: '活动',
      href: '',
    },
    {
      hasSubMenu: false,
      key: 'schedule',
      icon: 'schedule',
      title: '课程',
      href: '',
    },
    {
      hasSubMenu: false,
      key: 'sign',
      icon: 'form',
      title: '签到',
      href: '',
    },
  ],
};

const footBar = {
  copyRight: '南京享辉',
  links: [
    {
      title: '友情链接',
      content: [
        {
          title: '南京理工大学',
          href: 'www.njust.edu.cn',
        },
      ],
    },
    {
      title: '联系我们',
      content: [
        {
          title: '邮箱',
          href: ''
        }
      ],
    }
  ],
};


export {sideBar, footBar}
