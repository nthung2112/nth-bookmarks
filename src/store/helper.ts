import { ConfigItem } from '@/types';

function mappingKeys(
  map: Record<string, string>,
  data: ConfigItem[],
  parent?: ConfigItem
): Record<string, string> {
  data.forEach((item) => {
    map[item.id] = parent ? `${map[parent.id]}_${item.id}` : item.id;

    if (item.children) {
      mappingKeys(map, item.children, item);
    }
  });
  return map;
}

export function getPathMapping(data: ConfigItem[]): Record<string, string> {
  const pathMapping = {} as Record<string, string>;
  mappingKeys(pathMapping, data);
  return pathMapping;
}

export function getActiveFolderByPath(data: ConfigItem[], paths: string[]) {
  if (paths.length === 0) return undefined;

  const firstElement = paths.shift();
  const folder = data.find((item) => item.id === firstElement);

  if (!folder) return undefined;

  if (paths.length === 0 || !folder.children) {
    return folder;
  }

  return getActiveFolderByPath(folder.children, paths);
}

export function searchInData(data: ConfigItem[], query: string) {
  let results: ConfigItem[] = [];
  data.forEach((item) => {
    if (item.title.toLowerCase().includes(query)) {
      results.push(item);
    }
    if (item.children) {
      const childResults = searchInData(item.children, query);
      if (childResults.length > 0) {
        results = results.concat(childResults);
      }
    }
  });
  return results;
}
