/**
 * utility that when given a path (e.g. "nested.path") will extract the desired
 * value from a record of values
 */
export function selectValueByPath(
  path: string,
  values: Record<string, unknown>
): unknown {
  const pathDelimiterIndex = path.indexOf(".");

  if (pathDelimiterIndex !== -1) {
    const propName = path.substring(0, pathDelimiterIndex);
    const nestedValues = selectValueByProperty(propName, values);

    if (typeof nestedValues !== "object" || !nestedValues) {
      return undefined;
    }

    return selectValueByPath(
      path.substring(pathDelimiterIndex + 1),
      nestedValues as Record<string, unknown>
    );
  }

  return selectValueByProperty(path, values);
}

function selectValueByProperty(
  propName: string,
  values: Record<string, unknown>
): unknown {
  return Object.hasOwn(values, propName) ? values[propName] : undefined;
}
