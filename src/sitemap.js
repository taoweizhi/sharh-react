//注册所有链接
const root = 'http://lgd.shareh.com.cn';
const activity = {
  root: 'activity'

};

const attendance = {
  root: 'attendance'

};

const authentication = {
  root: 'authentication',
  login: 'login',
  logout: 'logout',
  signin: 'signin',
};

const group = {
  root: 'group'

};

const profile = {
  root: 'profile'

};

const schedule = {
  root: 'schedule'

};

const loadSiteMap = () => {
  return {
    root: root,
    site: {
      activity: activity,
      attendance: attendance,
      authentication: authentication,
      group: group,
      profile: profile,
      schedule: schedule,
    }
  }
};
export { root, activity, attendance, authentication, group, profile, schedule, loadSiteMap }
