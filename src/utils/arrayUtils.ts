interface ObjectWithName {
  name: string;
}

export const checkIfArrayContainsElement = (arrayOfObjects: ObjectWithName[], arrayToCheck: string[]): boolean => {
  return arrayOfObjects.some((obj) => {
    return arrayToCheck.includes(obj.name);
  });
}