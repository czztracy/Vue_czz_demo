const getters = {
  isCollapse: state => state.header.isCollapse,
  token: state => state.user.token,
  roles: state => state.user.roles,
  permission_routers: state => state.user.routers,
  addRouters: state => state.user.addRouters
}

export default getters
