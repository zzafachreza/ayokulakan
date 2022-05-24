import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    // error reading value
  }
};

export const validToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjcxZmY4OWMzM2M1MzgzZjc0OTYyMWNkZjM4MDNlMTZmNzk5NTlkOWM5ODI5Y2E5ZmI4MTdjNWQ5OTk0NzU0ODIwMGY1NjJhMmI0YzBkMTgiLCJpYXQiOjE2MjgzMTE0MjQuNDE5NDM3LCJuYmYiOjE2MjgzMTE0MjQuNDE5NDUsImV4cCI6MTY1OTg0NzQyNC40MDEwNTksInN1YiI6IjIiLCJzY29wZXMiOlsiY2FuX2NyZWF0ZSJdfQ.QgZqvv8o3U-ybP2LRXXoh9imvoorsFPAo_MCbOo9R95xSM7wQ4jN7qa7UvN--WVF0BfRg6RudM7VbEzc5v9jQMi8xnnPkaAHcp2eyV-_hJ9gVc4lzDOtv2wHvl0flJ76xX1GNmGiYe4LvHRGR1W5u6R9ou1b1fxGegk5C_4OJkeXq_so1t37lNSz4JWx5qOcIVs3RF9V8GM7edM7yBAljeCfNNDO6qA9a0mzjURofOi66jwS14JLQwuOe6MoKc1jkwUZDy9nQvX2xjz_-ZLfRJinNQNOinxVgYHHNa6hgAOG5ZOLWYIT1To66_zDPLIoBoU43bfmMwZ3Sw-zI_O7TDT0y-Y4_G9-X8SCqpm7ZtSv8kA8DNucNNc8N1yWZWWZYwxI2HtjRPf-KPEJZnDqNPk-1f-Ic7nItjAJlb6eaglZsbpaAvTbSHkrl8ja6BeObPSdVu9zGZcty6KRkqnIfhbOSWIDo4_OXn-N9ApDjYG1jKHWIclz3InyMU8JFDP-HQ6XwXbbb3VHbrcsRwLnwR6WxkoCJHMR_zxB95HAgsosWYSuQrKlTMoEFAuG2dBIxobcpz8x29JanqCRLO7V0N0mKTRSH4ObPwVGR_0D1DvpPW-l_22KuV5fReC_oprzYXVTkKDl4_yJFy44pzgJIzG7RAwy0qpWBjzi9aJtwfY';
export const apiURL = 'https://ayokulakan.com/';
export const apiURLStorage = 'https://ayokulakan.com/storage/';