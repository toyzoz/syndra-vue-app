// 定义分页结果的泛型接口

export interface PaginatedItems<T> {
  pageSize: number; // 每页大小
  pageIndex: number; // 当前页索引
  count: number; // 总记录数
  data: T[]; // 具体的数据列表
}
