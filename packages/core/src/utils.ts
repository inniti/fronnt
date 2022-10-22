import type { PagingInput } from '../types';

export const DEFAULT_LIMIT = 12;

export function extractPaging(
  paging: PagingInput | null = { limit: DEFAULT_LIMIT, page: 1 }
): {
  limit: number;
  page: number;
  start: number;
  end: number;
} {
  const limit = paging?.limit || DEFAULT_LIMIT;
  const page = paging?.page || 1;
  const start = (page - 1) * limit;
  const end = start + limit;
  return {
    limit,
    page,
    start,
    end,
  };
}
