export const searchInArray = <T>(
  data: T[],
  search: string,
  searchFields: (keyof T)[],
): T[] =>
  data.filter((item) =>
    searchFields.some((field) =>
      (item[field]?.toString().toLowerCase() ?? "").includes(
        search.toLowerCase(),
      ),
    ),
  );
