export const pagination = ({ current = "1", pageSize = "10" }) => ({
  skip: (current - 1) > 0 ? (current * pageSize) - pageSize : 0,
  limit: parseInt(pageSize)
});
