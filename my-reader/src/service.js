const orignList = 'https://cnodejs.org/api/v1/topics';

const detailAPI = 'https://cnodejs.org/api/v1/topic';

export const getList = (page = 1) => fetch(`${orignList}?page=${page}`).then((response) => response.json());

export const getDetail = (id) => fetch(`${detailAPI}/${id}`).then((response) => response.json()); 