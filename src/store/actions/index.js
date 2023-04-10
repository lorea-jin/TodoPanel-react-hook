import request from 'service.js'

const getList = payload => {
  return {
    type: 'GET_LIST',
    payload,
  }
}
export const getListAsync = () => {
  return async dispatch => {
    const res = await request.get()
    dispatch(getList(res))
  }
}

export const addTodo = data => {
  return async dispatch => {
    await request({
      method: 'POST',
      data,
    })
    dispatch(getListAsync())
  }
}

export const delTodo = id => {
  return async dispatch => {
    await request({
      url: `/${id}`,
      method: 'delete',
    })
    dispatch(getListAsync())
  }
}

export const changeStatus = (id, done) => {
  return async dispatch => {
    await request({
      url: `/${id}`,
      method: 'patch',
      data: {
        done,
      },
    })
    dispatch(getListAsync())
  }
}

export const changeName = (id, name) => {
  return async dispatch => {
    await request({
      url: `/${id}`,
      method: 'patch',
      data: {
        name,
      },
    })
    dispatch(getListAsync())
  }
}

export const changeType = status => {
  return {
    type: 'CHANGE_TYPE',
    payload: status,
  }
}
