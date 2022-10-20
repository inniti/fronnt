import type { PagingInput } from '@fronnt/core';

export function extractPaging(paging: PagingInput) {
  let page = 1;
  let limit = 12;
  let start = 0;
  let end = 12;

  if (paging) {
    page = paging.page || 1;
    limit = paging.limit || 12;
    start = (page - 1) * limit;
    end = start + limit;
  }

  return {
    page,
    limit,
    start,
    end,
  };
}
