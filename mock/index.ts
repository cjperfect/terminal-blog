import Mock from "mockjs";
const random = Mock.Random;

export default [
  {
    url: "/api/getList",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "success",
        data: [random.cname(), random.cname(), random.cname()],
      };
    },
  },
  {
    url: "/api/getJson",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "success",
        data: {
          id: random.id(),
          title: random.ctitle(),
          content: random.csentence(),
        },
      };
    },
  },
];
